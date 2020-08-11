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
import { Keymap } from '../editor/editor'

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
   * Callback function to call when a language of the editor is changed
   */
  @Prop() public onSetLanguage?: (language: string) => void

  /**
   * @deprecated Use `isCodeVisible` prop (`is-code-visible` attribute) instead
   * Whether the code section is visible or not
   */
  @Prop({
    attribute: 'data-collapsed',
  })
  public isCodeCollapsed = false

  /**
   * Whether the code section is visible or not
   */
  @Prop()
  public isCodeVisible = false

  /**
   * A callback function to be called with the value of the `CodeChunk` node when execting the `CodeChunk`.
   */
  @Prop() public executeHandler?: (codeChunk: CodeChunk) => Promise<CodeChunk>

  /**
   * Custom keyboard shortcuts to pass along to CodeMirror
   * @see https://codemirror.net/6/docs/ref/#keymap
   */
  @Prop() public keymap: Keymap[] = []

  @State() executeCodeState: 'INITIAL' | 'PENDING' | 'RESOLVED' = 'INITIAL'

  @State() outputs: CodeChunk['outputs']

  @State() codeErrors: CodeChunk['errors']

  @State() private isCodeVisibleState: boolean = this.isCodeVisible

  /**
   * Trigger a global DOM event to hide or show all `CodeChunk` and `CodeExpress` component source code,
   * leaving only the results visible.
   */
  @Event({
    eventName: 'setAllCodeVisibility',
  })
  public setAllCodeVisibility: EventEmitter

  @Listen('collapseAllCode', { target: 'window' })
  @Listen('setAllCodeVisibility', { target: 'window' })
  onSetAllCodeVisibility(event: CodeVisibilityEvent): void {
    this.setCodeVisibility(event)
  }

  private toggleCodeVisibility = (e: MouseEvent): void => {
    if (e.shiftKey) {
      this.toggleAllCodeVisibility()
    } else {
      this.isCodeVisibleState = !this.isCodeVisibleState
    }
  }

  private toggleAllCodeVisibility = (): void =>
    this.setAllCodeVisibilityHandler(!this.isCodeVisibleState)

  private onExecuteHandler = async (): Promise<CodeChunk> => {
    this.executeCodeState = 'PENDING'
    const node = await this.getContents()

    if (this.executeHandler !== undefined) {
      const computed = await this.executeHandler(node)
      this.executeCodeState = 'RESOLVED'
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

  /**
   * Run the `CodeChunk`
   */
  @Method()
  public async execute(): Promise<CodeChunk> {
    this.executeCodeState = 'PENDING'
    try {
      const res = await this.onExecuteHandler()
      // Add artificial delay to allow user to register the spinner
      window.setTimeout(() => (this.executeCodeState = 'RESOLVED'), 250)
      return res
    } catch (err) {
      console.error(err)
      return err
    }
  }

  // Create an execute handler bound to this instance
  // @see https://github.com/typescript-eslint/typescript-eslint/blob/v3.7.0/packages/eslint-plugin/docs/rules/unbound-method.md
  private executeRef = () => this.execute()

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

  private setCodeVisibility = (e: CodeVisibilityEvent): void => {
    // TODO: Remove usage of `isCodeCollapsed` once prop is fully deprecated.
    this.isCodeVisibleState = e.detail.isVisible ?? e.detail.isCodeCollapsed
  }

  public render(): HTMLElement {
    return (
      <Host
        class={{
          isCodeVisible: this.isCodeVisibleState,
        }}
      >
        <stencila-action-menu expandable={true}>
          {this.executeHandler !== undefined && (
            <stencila-button
              icon="play"
              minimal={true}
              color="key"
              class="run"
              size="xsmall"
              tooltip="Run"
              iconOnly={true}
              slot="persistentActions"
              clickHandlerProp={this.executeRef}
              isLoading={this.executeCodeState === 'PENDING'}
            ></stencila-button>
          )}

          <stencila-button
            minimal={true}
            color="key"
            class="sourceToggle"
            clickHandlerProp={this.toggleCodeVisibility}
            icon={this.isCodeVisibleState ? 'eye-off' : 'eye'}
            iconOnly={true}
            size="xsmall"
            slot="persistentActions"
            tooltip={`${this.isCodeVisibleState ? 'Hide' : 'Show'} Code`}
          ></stencila-button>
        </stencila-action-menu>

        <div>
          <div
            class={{
              editorContainer: true,
              hidden: !this.isCodeVisibleState,
            }}
          >
            <stencila-editor
              activeLanguage={this.programmingLanguageProp}
              autofocus={this.autofocus}
              executeHandler={this.onExecuteHandler}
              keymap={this.keymap}
              readOnly={this.executeHandler === undefined}
            >
              <slot name={CodeChunkComponent.slots.text} />
            </stencila-editor>
          </div>

          <stencila-node-list nodes={this.outputs}>
            <slot name={CodeChunkComponent.slots.outputs} />
            {this.codeErrors}
          </stencila-node-list>
        </div>
      </Host>
    )
  }
}
