import { Keymap } from '@codemirror/next/keymap'
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
import { CodeComponent, CodeVisibilityEvent } from '../code/codeTypes'

@Component({
  tag: 'stencila-code-chunk',
  styleUrls: {
    default: 'codeChunk.css',
    material: 'codeChunk.material.css',
  },
  scoped: true,
})
export class CodeChunkComponent implements CodeComponent<CodeChunk> {
  private static readonly slots = {
    text: 'text',
    outputs: 'outputs',
  }

  @Element() private el: HTMLStencilaCodeChunkElement

  private editorRef: HTMLStencilaEditorElement | null

  /**
   * Autofocus the editor on page load
   */
  @Prop() public autofocus = false

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
  public isCodeVisibleProp = true

  /**
   * A callback function to be called with the value of the `CodeChunk` node when execting the `CodeChunk`.
   */
  @Prop() public executeHandler?: (codeChunk: CodeChunk) => Promise<CodeChunk>

  /**
   * Custom keyboard shortcuts to pass along to CodeMirror
   * @see https://codemirror.net/6/docs/ref/#keymap
   */
  @Prop() public keymap: Keymap = {}

  @State() executeCodeState: 'INITIAL' | 'PENDING' | 'RESOLVED'

  @State() outputs: CodeChunk['outputs']

  @State() codeErrors: CodeChunk['errors']

  @State() private isCodeVisible: boolean = this.isCodeVisibleProp

  /**
   * Trigger a global DOM event to hide or show all `CodeChunk` and `CodeExpress` component source code,
   * leaving only the results visible.
   */
  @Event({
    eventName: 'collapseAllCode',
  })
  public setAllCodeVisibility: EventEmitter

  @Listen('collapseAllCode', { target: 'window' })
  onSetAllCodeVisibility(event: CodeVisibilityEvent): void {
    this.hideCode(event)
  }

  private hideAllCode = (): void =>
    this.setAllCodeVisibilityHandler(!this.isCodeVisible)

  private onExecuteHandler = async (): Promise<CodeChunk> => {
    const node = await this.getContents()

    if (this.executeHandler !== undefined) {
      const computed = await this.executeHandler(node)
      this.updateErrors(computed.errors)
      this.outputs = computed.outputs
      return computed
    }

    return node
  }

  componentDidLoad(): void {
    this.editorRef = this.el.querySelector('stencila-editor')
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

  // eslint-disable-next-line @stencil/own-props-must-be-private
  execute = async (): Promise<CodeChunk> => {
    this.executeCodeState = 'PENDING'
    try {
      const res = await this.onExecuteHandler()
      this.executeCodeState = 'RESOLVED'
      return res
    } catch (err) {
      console.error(err)
      return err
    }
  }

  private updateErrors = (errors: CodeChunk['errors'] = []): void => {
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

  private setAllCodeVisibilityHandler(isVisible: boolean) {
    this.setAllCodeVisibility.emit({ isVisible })
  }

  private hideCode = (e: CodeVisibilityEvent): void => {
    this.isCodeVisible = e.detail.isVisible
  }

  public render(): HTMLElement {
    return (
      <Host>
        <stencila-action-menu expandable={true}>
          <stencila-button
            isSecondary={true}
            clickHandlerProp={this.hideAllCode}
            icon={this.isCodeVisible ? 'eye' : 'eye-off'}
            iconOnly={true}
            size="xsmall"
            tooltip={`${this.isCodeVisible ? 'Show' : 'Hide'} Code`}
          ></stencila-button>
          {this.executeHandler !== undefined && (
            <stencila-button
              icon="play"
              isSecondary={true}
              size="xsmall"
              tooltip="Run Code"
              iconOnly={true}
              slot="persistentActions"
              clickHandlerProp={this.execute}
              isLoading={this.executeCodeState === 'PENDING'}
            ></stencila-button>
          )}
        </stencila-action-menu>

        <div
          class={{
            editorContainer: true,
            hidden: this.isCodeVisible,
          }}
        >
          <stencila-editor
            activeLanguage={this.programmingLanguageProp}
            autofocus={this.autofocus}
            keymap={this.keymap}
            readOnly={this.executeHandler === undefined}
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
