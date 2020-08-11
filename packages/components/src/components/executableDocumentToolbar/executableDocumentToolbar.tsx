import { datumEither as DE } from '@nll/datum'
import {
  Component,
  ComponentInterface,
  h,
  Host,
  Prop,
  State,
} from '@stencil/core'
import { Executor, WebSocketClient } from '@stencila/executa'
import {
  CodeChunk,
  codeError,
  CodeExpression,
  softwareSession,
} from '@stencila/schema'
import { pipe } from 'fp-ts/lib/function'
import {
  toastController,
  ToastPositions,
  ToastTypes,
} from '../toast/toastController'
import {
  executableJobGuard,
  fetchJobDatum,
  JobDatum,
  JobError,
  jobFetch,
  SessionDatum,
} from './executa'
import { SessionStatus } from './sessionStatus'

const notify = toastController({
  position: ToastPositions.topCenter,
})

const errorNotification = () =>
  notify.present('Couldn’t start a compute session', {
    type: ToastTypes.danger,
  })

type OnConnect = (a: Promise<SessionDatum>) => void
type OnReject = (a: JobError) => void

// =============================================================================

@Component({
  tag: 'stencila-executable-document-toolbar',
  styleUrls: {
    default: 'executableDocumentToolbar.css',
    material: 'executableDocumentToolbar.css',
  },
  scoped: true,
})
export class StencilaExecutableDocumentToolbar implements ComponentInterface {
  private jobPoller: number | undefined = undefined

  /** Frequency in milliseconds with which to check the status of a Job on Stencila Hub */
  private jobPollFrequency = 3_000

  private jobUrl: string | undefined

  /**
   * The URL of the document being decorated. Could be a Snapshot from Stencila Hub, a Project URL, or something else.
   */
  @Prop()
  sourceUrl: string

  /**
   * The URL for requesting a SoftwareSession as defined in Stencila Schema.
   * Passed to Stencila Executa for instantiating the session.
   * TODO: If undefined user should be able to set one themselves (e.g. running a local machine)
   */
  @Prop()
  sessionProviderUrl: string

  /**
   * When `fixed` the Navbar will remain pinned to the top of the screen.
   * Note that if the Navbar component is not followed by a sibling element,
   * you will have to set `margin-top: 3rem` on the following element yourself.
   */
  @Prop()
  public position: 'fixed' | 'static' = 'fixed'

  @State()
  session: SessionDatum = DE.initial

  @State()
  job: JobDatum = DE.initial

  @State()
  executor: null | Executor = null

  private checkJobStatus = async (): Promise<JobDatum> => {
    // If we're already checking for the status, don't send second request
    if (DE.isRefresh(this.job)) {
      return this.job
    } else {
      this.job = DE.toRefresh(this.job)
      return fetchJobDatum(this.jobUrl)
    }
  }

  private handleJobStatus = (
    job: JobDatum,
    onJobReady?: OnConnect,
    onJobError?: OnReject
  ): JobDatum =>
    pipe(
      job,
      DE.fold(
        () => {
          this.jobPoller = this.pollJobFn(
            this.jobPollFrequency,
            onJobReady,
            onJobError
          )
          return DE.pending
        },
        () => job,
        () => job,
        () => job,
        (jobError) => {
          window.clearInterval(this.jobPoller)
          this.executor?.stop().catch((err) => {
            console.warn('Failed to stop Executa', err)
          })
          this.session = DE.failure(jobError)
          return job
        },
        (jobValue) => {
          if (executableJobGuard(jobValue)) {
            window.clearInterval(this.jobPoller)
            this.jobPoller = this.pollJobFn(10_000)
            if (onJobReady) {
              onJobReady(this.startExecutor(jobValue.url))
            }
          }

          return job
        }
      ),
      (jobDatum) => {
        this.job = jobDatum
        return jobDatum
      }
    )

  private pollJob = (onConnectCb?: OnConnect, onRejectCb?: OnReject) =>
    this.checkJobStatus()
      .then((job) => this.handleJobStatus(job, onConnectCb, onRejectCb))
      .catch((err) => this.handleJobStatus(DE.failure(err)))

  private pollJobFn = (
    interval = this.jobPollFrequency,
    onJobReady?: OnConnect,
    onJobError?: OnReject
  ) =>
    window.setInterval(() => {
      this.pollJob(onJobReady, onJobError).catch((err) => DE.failure(err))
    }, interval)

  private findSession = async (): Promise<SessionDatum | void> => {
    // TODO: Smart polling: aggressive, ease up, accelerate again once wait time low?

    if (this.sessionProviderUrl === undefined) {
      return DE.failure(new Error('Please set a SessionProviderUrl'))
    }

    if (DE.isInitial(this.session) || DE.isFailure(this.session)) {
      this.session = DE.pending

      return jobFetch
        .url(this.sessionProviderUrl)
        .post()
        .res((res) => {
          this.jobUrl = res.url
        })
        .then(
          () =>
            new Promise<SessionDatum>((resolve, reject) =>
              this.handleJobStatus(DE.initial, resolve, reject)
            )
        )
        .catch((err) => {
          errorNotification()
          this.session = DE.failure(err)
          throw err
        })
    }

    return Promise.resolve(this.session)
  }

  private startExecutor = async (executorUrl: string) => {
    const sessionClient = new WebSocketClient(executorUrl)
    this.executor = sessionClient
    this.session = await sessionClient
      .begin(softwareSession())
      .then((session) => {
        notify.present('Ready to run document', {
          type: ToastTypes.success,
        })
        return DE.success(session)
      })
      .catch((err) => {
        errorNotification()
        return DE.failure(new Error(err))
      })

    return this.session
  }

  private codeNodeSelector = (): (
    | HTMLStencilaCodeChunkElement
    | HTMLStencilaCodeExpressionElement
  )[] => [
    ...Array.from(document.getElementsByTagName('stencila-code-chunk')),
    ...Array.from(document.getElementsByTagName('stencila-code-expression')),
  ]

  private executeHandler = async (
    code: CodeChunk | CodeExpression
  ): Promise<CodeChunk | CodeExpression> => {
    if (DE.isPending(this.session)) {
      notify.present('Please wait until a compute session is found', {
        type: ToastTypes.warn,
      })

      return code
    }

    const failureCase = (stackTrace: string): CodeChunk | CodeExpression => ({
      ...code,
      errors: [
        ...(code.errors ?? []),
        codeError({
          errorType: 'error',
          errorMessage: `Could not run ${code.type}`,
          stackTrace: stackTrace,
        }),
      ],
    })

    return this.findSession()
      .then(() => {
        if (this.executor && DE.isSuccess(this.session)) {
          return this.executor
            .execute(code, this.session.value.right)
            .catch((err) => {
              console.error(err)
              return failureCase(err)
            })
        }

        return failureCase('Couldn’t start a compute session')
      })
      .catch((err) => failureCase(err))
  }

  private runAll = async (
    e: MouseEvent
  ): Promise<(CodeExpression | CodeChunk | undefined | void)[]> => {
    e.preventDefault()

    return this.findSession().then(() => {
      return Promise.all(
        this.codeNodeSelector().map(async (item) => item.execute())
      )
    })
  }

  componentDidLoad(): void {
    this.codeNodeSelector().map((code) => {
      // @ts-ignore
      code.executeHandler = this.executeHandler
    })
  }

  render(): HTMLElement {
    return (
      <Host position={this.position}>
        <stencila-toolbar>
          <span slot="start">
            <stencila-button
              color="stock"
              icon="play"
              size="small"
              clickHandlerProp={this.runAll}
              isLoading={
                DE.isPending(this.session) || DE.isRefresh(this.session)
              }
            >
              Run Document
            </stencila-button>
          </span>

          <span slot="middle">
            <SessionStatus
              job={this.job}
              session={this.session}
            ></SessionStatus>
          </span>

          {this.sourceUrl !== undefined && (
            <span slot="end">
              <stencila-button
                color="stock"
                href={this.sourceUrl}
                target="_blank"
                rel="nofollow noopener"
                icon="external-link"
                size="small"
              >
                Source
              </stencila-button>
            </span>
          )}
        </stencila-toolbar>
      </Host>
    )
  }
}
