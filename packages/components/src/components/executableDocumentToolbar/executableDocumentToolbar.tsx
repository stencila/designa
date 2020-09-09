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
import { array as A, option as O } from 'fp-ts'
import { pipe } from 'fp-ts/lib/function'
import pluralize from 'pluralize'
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
})
export class StencilaExecutableDocumentToolbar implements ComponentInterface {
  private jobPoller: number | undefined = undefined

  /** Frequency in milliseconds with which to check the status of a Job on Stencila Hub */
  private jobPollFrequency = 3_000

  private jobUrl: string | undefined

  private activeNodeIndex?: number

  private requestController = new AbortController()
  private requestSignal = this.requestController.signal

  private initAbortControllers = () => {
    this.requestController = new AbortController()
    this.requestSignal = this.requestController.signal
  }

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

  @State()
  private codeCount = 0

  @State()
  statusMessage = ''

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
          this.requestController.abort()
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
    ...Array.from(
      document.querySelectorAll<
        HTMLStencilaCodeChunkElement | HTMLStencilaCodeExpressionElement
      >('stencila-code-chunk, stencila-code-expression')
    ),
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
          errorMessage: `Could not run ${
            code.type === 'CodeChunk' ? 'code chunk' : 'code expression'
          }`,
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
    this.initAbortControllers()

    return new Promise((resolve, reject) => {
      this.requestSignal.addEventListener('abort', reject)

      this.findSession()
        .then(async () => {
          const results: (CodeChunk | CodeExpression)[] = []
          let idx = 0

          this.session = DE.toRefresh(this.session)

          for (const node of this.codeNodeSelector()) {
            this.activeNodeIndex = idx
            this.statusMessage = `${++idx} of ${
              this.codeCount
            } code ${pluralize('node', this.codeCount)}`

            const res = await node.execute()
            results.push(res)

            if (idx >= this.codeCount) {
              this.statusMessage = ''
            }
          }

          this.session = DE.toReplete(this.session)
          this.requestSignal.removeEventListener('abort', reject)
          return resolve(results)
        })
        .catch((err) => {
          this.requestSignal.removeEventListener('abort', reject)
          reject(err)
        })
    })
  }

  componentWillLoad(): void {
    const codeNodes = this.codeNodeSelector()
    this.codeCount = codeNodes.length
    codeNodes.map((code) => {
      // @ts-ignore
      code.executeHandler = this.executeHandler
    })
  }

  private goToActiveNode = (): void => {
    pipe(
      this.codeNodeSelector(),
      A.lookup(this.activeNodeIndex ?? -1),
      O.map((el) => {
        const toolbar = document.querySelector(
          'stencila-executable-document-toolbar'
        )
        const offset = toolbar?.getBoundingClientRect().height ?? 0
        const target =
          el.getBoundingClientRect().top - offset + window.pageYOffset

        window.scrollTo({
          top: target,
          behavior: 'smooth',
        })
      })
    )
  }

  private executionProgress = () => (
    <stencila-tooltip text="Jump to location" onClick={this.goToActiveNode}>
      <stencila-icon icon="focus-3"></stencila-icon>
      <span>{this.statusMessage}</span>
    </stencila-tooltip>
  )

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
              disabled={this.codeCount <= 0}
              tooltip={
                this.codeCount <= 0
                  ? 'No code nodes in the document to execute'
                  : undefined
              }
              isLoading={
                DE.isPending(this.session) || DE.isRefresh(this.session)
              }
              data-el="Toolbar/Run Document"
            >
              {DE.isPending(this.session) || DE.isRefresh(this.session)
                ? 'Running'
                : ['Run', <span class="hidden-sm"> Document</span>]}
            </stencila-button>
          </span>

          <span slot="middle">
            <SessionStatus job={this.job} session={this.session}>
              {DE.isRefresh(this.session) && this.executionProgress()}
            </SessionStatus>
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
                data-el="Toolbar/Project Source"
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
