import {
  Component,
  ComponentInterface,
  Event,
  EventEmitter,
  h,
  Host,
  Listen,
  Prop,
  State,
} from '@stencil/core'
import {
  CodeExecuteCancelEvent,
  CodeExecuteEvent,
  DiscoverExecutableLanguagesEvent,
  ExecuteStatus,
} from '../code/codeTypes'

// =============================================================================

@Component({
  tag: 'stencila-executable-document-toolbar',
  styleUrls: {
    default: 'executableDocumentToolbar.css',
    material: 'executableDocumentToolbar.css',
  },
})
export class StencilaExecutableDocumentToolbar implements ComponentInterface {
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

  /**
   * The execution status of the document
   */
  @Prop()
  executeStatus: ExecuteStatus

  @State()
  isExecutable: boolean =
    Object.keys(window.stencilaWebClient?.executableLanguages || {}).length > 0

  @Listen('stencila-discover-executable-languages', { target: 'window' })
  onDiscoverExecutableLanguages({
    detail,
  }: DiscoverExecutableLanguagesEvent): void {
    this.isExecutable = Object.keys(detail.languages).length > 0
  }

  /**
   * Emitted to indicate that code node should be executed
   *
   */
  @Event({
    eventName: 'stencila-code-execute',
  })
  public codeExecuteEvent: EventEmitter<CodeExecuteEvent['detail']>

  /**
   * Emitted to indicate that the execution of the code node should be cancelled/interrupted.
   */
  @Event({
    eventName: 'stencila-code-execute-cancel',
  })
  public codeExecuteCancelEvent: EventEmitter<CodeExecuteCancelEvent['detail']>

  private runDocument = () => {
    if (
      this.executeStatus?.includes('Running') ||
      this.executeStatus?.includes('Scheduled')
    ) {
      this.codeExecuteCancelEvent.emit(null)
    } else {
      this.codeExecuteEvent.emit(null)
    }
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
              onClick={this.runDocument}
              disabled={!this.isExecutable}
              isLoading={
                this.executeStatus?.includes('Running') ||
                this.executeStatus?.includes('Scheduled')
              }
              dataEl="Toolbar/Run Document"
            >
              {this.executeStatus?.includes('Running') ||
              this.executeStatus?.includes('Scheduled')
                ? 'Running'
                : ['Run', <span class="hidden-sm"> Document</span>]}
            </stencila-button>
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
                dataEl="Toolbar/Project Source"
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
