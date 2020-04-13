import {
  Component,
  Element,
  Event,
  EventEmitter,
  h,
  Host,
  Listen,
  Method,
  Prop,
  State,
} from '@stencil/core'
import { codeChunk, CodeChunk } from '@stencila/schema'
import { Keymap } from '@codemirror/next/keymap'

interface CollapseEvent extends CustomEvent {
  detail: {
    isCollapsed: boolean
  }
}

@Component({
  tag: 'stencila-code-chunk',
  styleUrls: {
    default: 'codeChunk.css',
    material: 'codeChunk.material.css',
  },
  scoped: true,
})
export class CodeChunkComponent {
  /* private static readonly elementName = 'stencila-code-chunk' */

  private static readonly slots = {
    text: 'text',
    outputs: 'outputs',
  }

  @Element() private el: HTMLStencilaCodeChunkElement

  private editorRef: HTMLStencilaEditorElement | null

  /**
   * Programming language of the CodeChunk
   */
  @Prop({
    attribute: 'data-programmingLanguage',
  })
  public programmingLanguageProp: string

  /**
   * Whether the code section is visible or not
   */
  @Prop({
    attribute: 'data-collapsed',
  })
  public isCodeCollapsedProp = false

  @State() private isCodeCollapsed: boolean = this.isCodeCollapsedProp

  private toggleCodeVisibility = (): void => {
    this.isCodeCollapsed = !this.isCodeCollapsed
  }

  private collapseAllCodeHandler(isCollapsed: boolean) {
    this.collapseAllCode.emit({ isCollapsed })
  }

  /**
   * Trigger a global DOM event to collapse all `CodeChunk` and `CodeFragment` component code expressions,
   * leaving only the results visible.
   */
  @Event({
    eventName: 'collapseAllCode',
  })
  public collapseAllCode: EventEmitter

  private collapseAllListenHandler = (e: CollapseEvent) => {
    this.isCodeCollapsed = e.detail.isCollapsed
  }

  @Listen('collapseAllCode', { target: 'window' })
  collapseAllListenHandlerTwo(event: CollapseEvent) {
    this.collapseAllListenHandler(event)
  }

  private collapseAllCodeTrigger = () =>
    this.collapseAllCodeHandler(!this.isCodeCollapsed)

  /**
   * Custom keyboard shortcuts to pass along to CodeMirror
   * @see https://codemirror.net/6/docs/ref/#keymap
   */
  @Prop() public keymap: Keymap = {}

  /**
   * A callback function to be called with the value of the `CodeChunk` node when execting the `CodeChunk`.
   */
  @Prop() public executeHandler: (codeChunk: CodeChunk) => Promise<CodeChunk>

  private onExecuteHandler_ = async () => {
    const node = await this.getContents()

    if (this.executeHandler !== undefined) {
      const computed = await this.executeHandler(node)
      this.updateErrors(computed.errors)
      this.outputs = computed.outputs
      return computed
    }

    return node
  }

  @State() executeCodeState: 'INITIAL' | 'PENDING' | 'RESOLVED'

  private executeCode = () => {
    this.executeCodeState = 'PENDING'
    this.onExecuteHandler_()
      .then((res) => {
        this.executeCodeState = 'RESOLVED'
        return res
      })
      .catch((err) => {
        console.error(err)
        return err
      })
  }

  protected componentDidLoad() {
    this.editorRef = this.el.querySelector('stencila-editor')
  }

  @State() outputs: CodeChunk['outputs']

  @State() codeErrors: CodeChunk['errors']

  private updateErrors = (errors: CodeChunk['errors'] = []) => {
    this.codeErrors = errors.map((error) => (
      <stencila-code-error
        kind={(error.errorType as unknown) as 'error' | 'warning' | 'incapable'}
        hasStacktrace={error.stackTrace !== undefined}
      >
        {error.errorMessage}
        <pre slot="stacktrace">{error.stackTrace}</pre>
      </stencila-code-error>
    ))
  }

  /**
   * Returns the `CodeChunk` node with the updated `text` content from the editor.
   */
  @Method()
  public async getContents(): Promise<CodeChunk> {
    if (this.editorRef) {
      const { text, language } = await this.editorRef?.getContents()
      return codeChunk({ text, programmingLanguage: language })
    }

    return codeChunk({ text: '' })
  }

  public render() {
    return (
      <Host>
        <stencila-action-menu expandable={true}>
          <stencila-button
            isSecondary={true}
            onClick={this.toggleCodeVisibility}
            icon={this.isCodeCollapsed ? 'eye' : 'eye-off'}
            size="xsmall"
          >
            {this.isCodeCollapsed ? 'Show' : 'Hide'} Source
          </stencila-button>
          <stencila-button
            isSecondary={true}
            icon={this.isCodeCollapsed ? 'eye' : 'eye-off'}
            size="xsmall"
            onClick={this.collapseAllCodeTrigger}
          >
            {this.isCodeCollapsed ? 'Show' : 'Hide'} All Sources
          </stencila-button>
          {this.executeHandler !== undefined && (
            <stencila-button
              icon="play"
              isSecondary={true}
              size="xsmall"
              ariaLabel="Run Code"
              slot="persistentActions"
              clickHandlerProp={this.executeCode}
              isLoading={this.executeCodeState === 'PENDING'}
            >
              Run
            </stencila-button>
          )}
        </stencila-action-menu>

        <div
          class={{
            editorContainer: true,
            hidden: this.isCodeCollapsed,
          }}
        >
          <stencila-editor
            activeLanguage={this.programmingLanguageProp}
            keymap={this.keymap}
          >
            <slot name={CodeChunkComponent.slots.text} />
          </stencila-editor>
        </div>

        <stencila-node-list nodes={this.outputs}>
          <slot name={CodeChunkComponent.slots.outputs} />
        </stencila-node-list>

        {this.codeErrors}
      </Host>
    )
  }
}
