import { EditorView } from '@codemirror/view'
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
import { CodeChunk, codeChunk as makeCodeChunk } from '@stencila/schema'
import { CodeExecuteStatus } from '../code/codeExecuteStatus'
import {
  CodeComponent,
  CodeExecuteCancelEvent,
  CodeExecuteEvent,
  CodeExecuteOrdering,
  CodeVisibilityEvent,
  DiscoverExecutableLanguagesEvent,
  ExecuteRequired,
  ExecuteStatus,
} from '../code/codeTypes'
import { isPending } from '../code/codeUtils'
import { EditorUpdateHandlerCb } from '../editor/customizations/onUpdateHandlerExtension'
import { Keymap } from '../editor/editor'
import {
  FileFormat,
  fileFormatMap,
  FileFormatMap,
  lookupFormat,
} from '../editor/languageUtils'

/**
 * @slot text - The source code of the `CodeChunk`. Corresponds to the `text` field in the Stencila `CodeChunk` Schema.
 * @slot outputs - The resulting output when evaluating the CodeChunk. Corresponds to the `outputs` field in the Stencila `CodeChunk` Schema.
 * @slot errors - List of any errors encountered when compiling (e.g. syntax errors) or executing the CodeChunk.
 * @slot label - `label` element label of the `CodeChunk`. Corresponds to the `label` field in the Stencila `CodeChunk` Schema.
 * @slot caption - `figcaption` content of the `CodeChunk`. Corresponds to the `caption` field in the Stencila `CodeChunk` Schema.
 */
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
    errors: 'errors',
    caption: 'caption',
    label: 'label',
  }

  @Element() private el: HTMLStencilaCodeChunkElement

  public editorRef: HTMLStencilaEditorElement | undefined

  /**
   * Source code contents of the CodeChunk.
   * Corresponds to the `text` property of the CodeChunk schema.
   */
  @Prop()
  public text?: string

  /**
   * Autofocus the editor on page load
   */
  @Prop() public autofocus = false

  /**
   * Programming language of the CodeChunk
   */
  @Prop({ mutable: true })
  public programmingLanguage: string | undefined

  /**
   * List of all supported programming languages
   */
  @Prop()
  public languageCapabilities: FileFormatMap = fileFormatMap

  /**
   * List of programming languages that can be executed in the current context
   */
  @Prop()
  public executableLanguages?: FileFormatMap

  @Listen('stencila-discover-executable-languages', { target: 'window' })
  onDiscoverExecutableLanguages({
    detail,
  }: DiscoverExecutableLanguagesEvent): void {
    this.executableLanguages = detail.languages
    this.checkIfExecutable()
  }

  @State() isExecutable = false

  /**
   * Whether the code section is visible or not
   */
  @Prop()
  public isCodeVisible = false

  /**
   * A callback function to be called with the value of the `CodeChunk` node when executing the `CodeChunk`.
   */
  @Prop()
  public executeHandler?: (codeChunk: CodeChunk) => Promise<CodeChunk>

  @State()
  shiftIsPressed = false

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

  /**
   * Callback function to invoke whenever the editor contents are updated.
   */
  @Prop()
  public contentChangeHandler?: EditorUpdateHandlerCb

  /**
   * The execution status of the code node
   */
  @Prop()
  executeStatus: ExecuteStatus

  /**
   * A digest representing the state of a [`Resource`] and its dependencies at
   * compile time.
   */
  @Prop()
  compileDigest: string

  /**
   * Status of upstream dependencies, and whether the node needs to be
   * re-executed
   */
  @Prop()
  executeRequired: ExecuteRequired

  /**
   * A digest representing the state of a [`Resource`] and its dependencies from
   * the latest execution.
   */
  @Prop()
  executeDigest: string

  /**
   * Time when the latest code execution ended
   */
  @Prop()
  executeEnded: string

  /**
   * Duration of the latest code execition
   */
  @Prop()
  executeDuration: string

  /**
   * Custom keyboard shortcuts to pass along to CodeMirror
   * @see https://codemirror.net/6/docs/ref/#keymap
   */
  @Prop() public keymap: Keymap[] = []

  @State() isStacked = true

  @State() private isCodeVisibleState: boolean = this.isCodeVisible

  /**
   * Trigger a global DOM event to hide or show all `CodeChunk` and `CodeExpress` component source code,
   * leaving only the results visible.
   */
  @Event({
    eventName: 'stencila-code-visibility-change',
  })
  public allCodeVisibilityChange: EventEmitter

  @Listen('stencila-code-visibility-change', { target: 'window' })
  onAllCodeVisibilityChange(event: CodeVisibilityEvent): void {
    this.setCodeVisibility(event)
  }

  private toggleCodeVisibility = (e: MouseEvent): void => {
    e.preventDefault()
    if (e.shiftKey) {
      this.toggleAllCodeVisibility()
    } else {
      this.isCodeVisibleState = !this.isCodeVisibleState
    }
  }

  private toggleAllCodeVisibility = (): void =>
    this.allCodeVisibilityChangeHandler(!this.isCodeVisibleState)

  /**
   * Determine if the CodeChunk can be executed or not.
   * For a CodeChunk to be considered executable it must have a `executeHandler` function attached
   * and the current `programmingLanguage` must be in the list of `executableLanguages`.
   */
  private checkIfExecutable = (): void => {
    if (
      this.programmingLanguage === undefined ||
      Object.keys(this.executableLanguages ?? {}).length <= 0
    ) {
      this.isExecutable = false
      return
    }

    const activeLanguageFormat = lookupFormat(this.programmingLanguage).name
    this.isExecutable = Object.values(this.executableLanguages ?? {}).some(
      (format) => format.name === activeLanguageFormat
    )
  }

  /**
   * Listen for the `stencila-language-change` event emitted by the language dropdown
   * provided by the child Editor component, and update the active language if necessary.
   */
  private handleLanguageChange = (e: CustomEvent<FileFormat>) => {
    if (
      this.programmingLanguage === undefined ||
      lookupFormat(this.programmingLanguage).name !== e.detail.name
    ) {
      this.programmingLanguage = e.detail.name
    }
  }

  private editorLayoutChangeHandler = (isStacked: boolean) => {
    this.isStacked = isStacked
  }

  /**
   * Trigger a global DOM event to set the layout of all `CodeChunk` component.
   * Can be set to either show the editor and outputs side by side or stacked vertically.
   */
  @Event({
    eventName: 'stencila-editor-layout-change',
  })
  public editorLayoutChange: EventEmitter

  @Listen('stencila-editor-layout-change', { target: 'window' })
  onSetEditorLayout(event: { detail: { isStacked: boolean } }): void {
    this.editorLayoutChangeHandler(event.detail.isStacked)
  }

  private toggleEditorLayout = (e: MouseEvent) => {
    e.preventDefault()
    if (e.shiftKey) {
      this.editorLayoutChange.emit({ isStacked: !this.isStacked })
    } else {
      this.editorLayoutChangeHandler(!this.isStacked)
    }
  }

  /**
   * Returns the `CodeChunk` node with the updated `text` content from the editor.
   */
  @Method()
  public async getContents(): Promise<CodeChunk> {
    if (this.editorRef) {
      const { text, language } = await this.editorRef?.getContents()
      return makeCodeChunk({ text, programmingLanguage: language })
    }

    throw new Error('Could not get CodeChunk contents')
  }

  /**
   * Returns the text contents from the editor
   */
  @Method()
  public async getTextContents(): Promise<string> {
    if (this.editorRef) {
      const { text } = await this.editorRef?.getContents()
      return text
    }

    throw new Error('Could not get CodeChunk contents')
  }

  private onExecuteHandler = async (
    ordering: CodeExecuteOrdering = 'Topological'
  ): Promise<CodeChunk> => {
    const node = await this.getContents()

    // If node is running, emit cancel event and terminate early
    if (isPending(this.executeStatus)) {
      this.codeExecuteCancelEvent.emit({
        nodeId: this.el.id,
        scope: 'All',
      })
      return node
    }

    this.codeExecuteEvent.emit({
      nodeId: this.el.id,
      ordering,
    })

    if (this.isExecutable && this.executeHandler) {
      const computed = await this.executeHandler(node)
      return computed
    }

    return node
  }

  /**
   * Run the `CodeChunk`
   */
  @Method()
  public async execute(
    ordering: CodeExecuteOrdering = 'Topological'
  ): Promise<CodeChunk | Error> {
    try {
      const res = await this.onExecuteHandler(ordering)
      // Add artificial delay to allow user to register the spinner
      return res
    } catch (err) {
      console.error(err)
      return new Error('Could not execute CodeChunk')
    }
  }

  /**
   * Retrieve a reference to the internal CodeMirror editor.
   * Allows for maintaining state from applications making use of this component.
   */
  @Method()
  public async getRef(): Promise<EditorView | undefined> {
    return this.editorRef?.getRef()
  }

  private onKeyPress = (e: KeyboardEvent): void => {
    this.shiftIsPressed = e.shiftKey
  }

  private addKeyListeners = () => {
    window.addEventListener('keydown', this.onKeyPress)
    window.addEventListener('keyup', this.onKeyPress)
  }

  private removeKeyListeners = () => {
    window.removeEventListener('keydown', this.onKeyPress)
    window.removeEventListener('keyup', this.onKeyPress)
    this.shiftIsPressed = false
  }

  private allCodeVisibilityChangeHandler(isVisible: boolean) {
    this.allCodeVisibilityChange.emit({ isVisible })
  }

  private setCodeVisibility = (e: CodeVisibilityEvent): void => {
    this.isCodeVisibleState = e.detail.isVisible
  }

  componentWillLoad(): void {
    /** Get rendered width of component to decide whether to stack the editor and outputs or not.
     * We can’t use media queries as the component is not always full width of the viewport, and depends on the parent element width.
     */
    const minWidth = 1200 // A non-scientific value below which the side-by-side layout looks too narrow.
    this.isStacked = this.el.getBoundingClientRect().width < minWidth

    this.checkIfExecutable()
  }

  public render(): HTMLElement {
    return (
      <Host
        class={{
          isCodeVisible: this.isCodeVisibleState,
          isStacked: this.isStacked,
        }}
      >
        <figure>
          <stencila-action-menu>
            <stencila-menu menuPosition="bottom-start" slot="persistentActions">
              <CodeExecuteStatus
                executeStatus={this.executeStatus}
                executeRequired={this.executeRequired}
                slot="toggle"
              ></CodeExecuteStatus>
              <slot name="code-dependencies"></slot>
              <slot name="code-dependents"></slot>
            </stencila-menu>
            {this.isExecutable && (
              <stencila-button
                icon={isPending(this.executeStatus) ? 'stop' : 'play'}
                minimal={true}
                color="key"
                class="run"
                size="xsmall"
                tooltip={
                  isPending(this.executeStatus)
                    ? 'Cancel'
                    : this.shiftIsPressed
                    ? 'Run only this code'
                    : 'Run'
                }
                iconOnly={true}
                slot="persistentActions"
                onClick={(e) =>
                  this.execute(e.shiftKey ? 'Single' : 'Topological')
                }
                onMouseEnter={this.addKeyListeners}
                onMouseLeave={this.removeKeyListeners}
              ></stencila-button>
            )}
            <stencila-button
              minimal={true}
              color="key"
              class="sourceToggle"
              onClick={this.toggleCodeVisibility}
              icon={this.isCodeVisibleState ? 'eye-off' : 'eye'}
              iconOnly={true}
              size="xsmall"
              slot="persistentActions"
              tooltip={`${
                this.isCodeVisibleState ? 'Hide' : 'Show'
              } Code\nShift click to set for all code blocks`}
            ></stencila-button>
            )
            {this.isCodeVisibleState && (
              <stencila-button
                minimal={true}
                color="key"
                class="layoutToggle"
                onClick={this.toggleEditorLayout}
                icon={this.isStacked ? 'layout-column' : 'layout-row'}
                iconOnly={true}
                size="xsmall"
                slot="persistentActions"
                tooltip={`${
                  this.isStacked ? 'Side by side' : 'Stacked'
                } view\nShift click to set for all code blocks`}
              ></stencila-button>
            )}
          </stencila-action-menu>

          <div>
            <div
              class={{
                editorContainer: true,
                hidden: !this.isCodeVisibleState,
              }}
            >
              <stencila-editor
                activeLanguage={this.programmingLanguage}
                executableLanguages={this.executableLanguages}
                autofocus={this.autofocus}
                executeHandler={() => this.onExecuteHandler()}
                keymap={this.keymap}
                readOnly={!this.isExecutable}
                onStencila-language-change={this.handleLanguageChange}
                ref={(el) => {
                  this.editorRef = el
                }}
              >
                <slot name={CodeChunkComponent.slots.text} />
                <slot name={CodeChunkComponent.slots.errors} />
              </stencila-editor>
            </div>

            <stencila-node-list>
              <slot name={CodeChunkComponent.slots.outputs} />
            </stencila-node-list>
          </div>

          <slot name={CodeChunkComponent.slots.label} />

          <slot name={CodeChunkComponent.slots.caption} />
        </figure>
      </Host>
    )
  }
}
