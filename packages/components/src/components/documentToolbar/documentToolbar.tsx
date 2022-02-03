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
  tag: 'stencila-document-toolbar',
  styleUrls: {
    default: 'documentToolbar.css',
    material: 'documentToolbar.css',
  },
})
export class StencilaDocumentToolbar implements ComponentInterface {
  /**
   * The URL of the document being decorated. Could be a Snapshot from Stencila Hub, a Project URL, or something else.
   */
  @Prop()
  sourceUrl: string

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

  @State()
  shiftIsPressed: boolean = false

  @State()
  altIsPressed: boolean = false

  private onKeyPress = (e: KeyboardEvent): void => {
    this.shiftIsPressed = e.shiftKey
    this.altIsPressed = e.altKey
  }

  private addKeyListeners = () => {
    window.addEventListener('keydown', this.onKeyPress)
    window.addEventListener('keyup', this.onKeyPress)
  }

  private removeKeyListeners = () => {
    window.removeEventListener('keydown', this.onKeyPress)
    window.removeEventListener('keyup', this.onKeyPress)
    this.shiftIsPressed = false
    this.altIsPressed = false
  }

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
   * Emitted to indicate that language kernels should be restarted
   *
   */
  @Event({
    eventName: 'stencila-kernel-restart',
  })
  public kernelRestart: EventEmitter<{}>

  /**
   * Emitted to indicate that the execution of the code node should be cancelled/interrupted.
   */
  @Event({
    eventName: 'stencila-code-execute-cancel',
  })
  public codeExecuteCancelEvent: EventEmitter<CodeExecuteCancelEvent['detail']>

  private isPending = (): boolean => {
    return (
      this.executeStatus?.includes('Running') ||
      this.executeStatus?.includes('Scheduled') ||
      false
    )
  }

  private runDocument = (e: MouseEvent) => {
    if (this.isPending()) {
      this.codeExecuteCancelEvent.emit({
        nodeId: null,
        scope: 'All',
      })
    } else {
      if (this.altIsPressed) {
        // Restart kernel
        this.kernelRestart.emit()
      } else {
        // Execute document
        this.codeExecuteEvent.emit({
          nodeId: null,
          ordering: e.shiftKey ? 'Appearance' : 'Topological',
        })
      }
    }
  }

  render(): HTMLElement {
    return (
      <Host position={this.position}>
        <stencila-toolbar>
          <span slot="start">
            <stencila-button
              onKeyDown={this.onKeyPress}
              color="stock"
              icon={
                this.altIsPressed
                  ? 'restart'
                  : this.isPending()
                  ? 'loader-2'
                  : 'play'
              }
              size="small"
              onClick={this.runDocument}
              disabled={!this.isExecutable}
              dataEl="Toolbar/Run Document"
              onMouseEnter={this.addKeyListeners}
              onMouseLeave={this.removeKeyListeners}
              tooltip={
                this.altIsPressed
                  ? undefined
                  : this.shiftIsPressed
                  ? 'Run sequentially'
                  : 'Run topologically'
              }
            >
              {this.altIsPressed
                ? 'Restart kernel'
                : this.isPending()
                ? 'Cancel'
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
