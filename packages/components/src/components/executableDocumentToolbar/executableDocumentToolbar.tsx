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
  SoftwareSession,
  softwareSession,
} from '@stencila/schema'
import wretch from 'wretch'
import {
  toastController,
  ToastPositions,
  ToastTypes,
} from '../toast/toastController'

interface Job {
  id: number
  statusMessage: string
  summaryString: string
  runtimeFormatted: string
  url: null | string
  position: number
  children: unknown[]
  key: string
  description: string
  created: Date
  updated: Date
  began: null
  ended: null
  status: string
  isActive: boolean
  method: string
  params: Params
  result: null
  error: null | { message: string; type: string }
  log: null
  runtime: null
  worker: null
  retries: null
  callbackId: null
  callbackMethod: null
  project: number
  creator: number
  queue: number
  parent: null
  callbackType: null
  users: number[]
}

export interface Params {
  project: number
  snapshotPath: string
}

const jobLogic = {
  keepChecking: ['WAITING', 'DISPATCHED', 'PENDING', 'RECEIVED', 'STARTED'],
  stopChecking: ['SUCCESS', 'FAILURE', 'CANCELLED', 'REVOKED', 'TERMINATED'],
  readyToExecute: ['RUNNING'],
}

const notify = toastController({
  position: ToastPositions.topCenter,
})

@Component({
  tag: 'stencila-executable-document-toolbar',
  styleUrls: {
    default: 'executableDocumentToolbar.css',
    material: 'executableDocumentToolbar.css',
  },
  scoped: true,
})
export class StencilaExecutableDocumentToolbar implements ComponentInterface {
  /**
   * The URL of the document being decorated. Could be a Snapshot from Stencila Hub, a Project URL, or something else.
   */
  @Prop() sourceUrl: string

  /**
   * The URL for requesting a SoftwareSession as defined in Stencila Schema.
   * Passed to Stencila Executa for instantiating the session.
   * TODO: If undefined user should be able to set one themselves (e.g. running a local machine)
   */
  @Prop() sessionProviderUrl: string

  @State() sessionStatus: 'initial' | 'pending' | 'replete' = 'initial'
  @State() session: null | SoftwareSession = null
  @State() executor: null | Executor = null

  @State() job: null | Job = null
  @State() jobUrl: string | undefined
  @State() jobStatus: 'initial' | 'pending' | 'replete' = 'initial'
  private jobPoller: number | undefined = undefined

  private sessionProvider = wretch()
  // Set the base url
  /* .options({ redirect: 'manual' }) */
  // Cors fetch options
  /* .options({ credentials: 'include', mode: 'cors' }) */
  // Handle 403 errors
  /* .resolve((_) => _.forbidden(handle403)) */

  private checkJobStatus = async (): Promise<Job | undefined> => {
    if (this.jobUrl !== undefined) {
      try {
        this.jobStatus = 'pending'
        return this.sessionProvider
          .url(this.jobUrl)
          .get()
          .json((job) => {
            const _job = job as Job
            this.job = _job
            this.jobStatus = 'replete'
            return _job
          })
      } catch (err) {
        this.jobStatus = 'replete'
        throw new Error(err)
      }
    }

    return Promise.resolve(undefined)
  }

  private handleJobStatus = (
    job: Job | undefined
  ): Promise<SoftwareSession | undefined> => {
    // eslint-disable-next-line @typescript-eslint/prefer-optional-chain
    if (job !== undefined) {
      if (jobLogic.stopChecking.includes(job.status)) {
        // Stop polling
        window.clearInterval(this.jobPoller)
        throw new Error(
          job.error?.message ?? 'Could not start a compute session'
        )
      } else if (
        jobLogic.readyToExecute.includes(job.status) &&
        job.url !== null
      ) {
        // Ready to execute
        window.clearInterval(this.jobPoller)
        return this.startExecutor(job.url)
      } else {
        window.clearInterval(this.jobPoller)
        throw new Error('Something went seriously wrong with polling for a Job')
      }
    }

    return Promise.resolve(undefined)
  }

  private pollJob = () =>
    new Promise<SoftwareSession>((resolve, reject) => {
      this.checkJobStatus()
        .then((job) => this.handleJobStatus(job))
        .then((s) => {
          if (s !== undefined) {
            resolve(s)
          } else {
            this.jobPoller = window.setInterval(() => {
              this.checkJobStatus()
                .then(this.handleJobStatus)
                .catch((err) => reject(err))
            }, 5000)
          }
        })
        .catch((err) => {
          reject(new Error(err))
        })
    })

  private findSession = async (): Promise<SoftwareSession | void> => {
    // POST to sessionProviderURL
    // Poll response until status: running
    // poll every 5 seconds
    // Smart polling: aggressive, ease up, accelerate again once wait time low?
    // meanwhile present user with info: position, message TBD, wait time
    // Pass `url` from `success` state payload to WebSocketClient

    if (
      this.sessionStatus === 'initial' &&
      this.sessionProviderUrl !== undefined
    ) {
      this.sessionStatus = 'pending'

      return this.sessionProvider
        .url(this.sessionProviderUrl)
        .post()
        .res(async (res) => {
          const location = res.url
          this.job = await res.json()
          this.jobUrl = location
          return res
        })
        .then(() => this.pollJob())
        .catch((err) => {
          this.sessionStatus = 'replete'
          console.error(err)
          return err
        })
    } else if (this.session) {
      return Promise.resolve(this.session)
    }
  }

  private startExecutor = async (executorUrl: string) => {
    const sessionClient = new WebSocketClient(executorUrl)
    this.executor = sessionClient
    this.session = await sessionClient.begin(softwareSession())
    /* this.session = await this.executor.begin() */
    notify.present('Connected', {
      type: ToastTypes.success,
    })
    return this.session
  }

  private codeNodeSelector = (): (
    | HTMLStencilaCodeChunkElement
    | HTMLStencilaCodeExpressionElement
  )[] => {
    return [
      ...Array.from(document.getElementsByTagName('stencila-code-chunk')),
      ...Array.from(document.getElementsByTagName('stencila-code-expression')),
    ]
  }

  private executeHandler = async (
    code: CodeChunk | CodeExpression
  ): Promise<CodeChunk | CodeExpression> => {
    /* ): Promise<C extends CodeChunk ? CodeChunk : CodeExpression | undefined | void> => { */

    const failureCase = (stackTrace: string): CodeChunk | CodeExpression => ({
      ...code,
      errors: [
        ...(code.errors ?? []),
        codeError({
          errorType: 'error',
          errorMessage: `Could not execute ${code.type}`,
          stackTrace: stackTrace,
        }),
      ],
    })

    return this.findSession()
      .then(() => {
        if (this.executor && this.session) {
          return this.executor.execute(code, this.session).catch((err) => {
            console.error(err)
            return failureCase(err)
          })
        }

        return failureCase(
          `Couldn’t start a compute session\n${this.job?.error?.message ?? ''}`
        )
      })
      .catch((err) => {
        return failureCase(err)
      })
      .finally(() => {
        this.sessionStatus = 'replete'
        this.jobStatus = 'replete'
      })
  }

  private runAll = async (
    e: MouseEvent
  ): Promise<(CodeExpression | CodeChunk | undefined | void)[]> => {
    e.preventDefault()

    return this.findSession().then(() =>
      Promise.all(
        this.codeNodeSelector().map(async (item) => {
          return item.execute()
        })
      )
    )
  }

  componentDidLoad(): void {
    this.codeNodeSelector().map((code) => {
      // @ts-ignore
      code.executeHandler = this.executeHandler
    })
  }

  componentWillUnload(): void {
    if (this.session) {
      // PATCH to cancel job
    }
  }

  render(): HTMLElement {
    console.log('JOB UPDATE: -------------------')
    console.log(JSON.stringify(this.job, null, 2))
    console.log('-------------------------------')
    return (
      <Host>
        <stencila-toolbar color="neutral-300">
          <span slot="start">
            <stencila-button
              color="stock"
              icon={this.session ? 'play' : 'cloud-off'}
              size="small"
              clickHandlerProp={this.runAll}
            >
              Run Document
            </stencila-button>

            {/*
            {this.sessionStatus === 'replete' && this.session && (
              <span slot="middle">
                <stencila-button
                  color="warn"
                  isSecondary={true}
                  icon="refresh-cw"
                  size="small"
                  iconOnly={true}
                  tooltip="Restart Session"
                ></stencila-button>
              </span>
            )}
            */}
          </span>

          <span
            slot="middle"
            style={{ color: 'black', verticalAlign: 'middle' }}
          >
            {this.sessionStatus === 'pending' && (
              <stencila-icon icon="loader"></stencila-icon>
            )}
            <span style={{ verticalAlign: 'middle', lineHeight: '1' }}>
              {this.sessionStatus === 'pending' &&
                !this.job &&
                'Starting compute session'}
              {this.jobStatus !== 'replete' &&
                this.job?.statusMessage !== 'Job is running' &&
                this.job?.statusMessage}
              {this.job?.statusMessage === 'Job is running' && (
                <stencila-tooltip text="Compute session is active">
                  <stencila-icon
                    icon="activity"
                    style={{
                      color: 'var(--color-success-700)',
                      cursor: 'help',
                    }}
                  ></stencila-icon>
                </stencila-tooltip>
              )}
              {this.job?.statusMessage === 'Job is failure' && (
                <stencila-tooltip
                  text={`Could not start a compute session\n${
                    this.job.error?.message ?? ''
                  }`}
                >
                  <stencila-icon
                    icon="x-octagon"
                    style={{
                      color: 'var(--color-danger-700)',
                      cursor: 'help',
                    }}
                  ></stencila-icon>
                </stencila-tooltip>
              )}
            </span>
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
