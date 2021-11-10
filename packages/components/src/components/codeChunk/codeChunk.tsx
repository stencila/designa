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
import { CodeChunk, codeChunk as makeCodeChunk, isA } from '@stencila/schema'
import { StencilaNodeUpdateEvent } from '../../globals/events'
import { CodeComponent, CodeVisibilityEvent } from '../code/codeTypes'
import { Keymap } from '../editor/editor'

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

  private editorRef: HTMLStencilaEditorElement | null

  /**
   * Autofocus the editor on page load
   */
  @Prop() public autofocus = false

  /**
   * Stencila CodeChunk node to render
   */
  @Prop({
    mutable: true,
  })
  codeChunk?: CodeChunk

  /**
   * Programming language of the CodeChunk
   */
  @Prop()
  public programmingLanguage: string | undefined

  /**
   * Whether the code section is visible or not
   */
  @Prop()
  public isCodeVisible = false

  /**
   * A callback function to be called with the value of the `CodeChunk` node when executing the `CodeChunk`.
   */
  @Prop() public executeHandler?: (codeChunk: CodeChunk) => Promise<CodeChunk>

  /**
   * Custom keyboard shortcuts to pass along to CodeMirror
   * @see https://codemirror.net/6/docs/ref/#keymap
   */
  @Prop() public keymap: Keymap[] = []

  @State() executeCodeState: 'INITIAL' | 'PENDING' | 'RESOLVED' = 'INITIAL'

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

  private onExecuteHandler = async (): Promise<CodeChunk> => {
    this.executeCodeState = 'PENDING'
    const node = await this.getContents()

    if (this.executeHandler !== undefined) {
      const computed = await this.executeHandler(node)
      this.codeChunk = computed
      this.executeCodeState = 'RESOLVED'
      return computed
    }

    this.executeCodeState = 'RESOLVED'
    return node
  }

  @Listen('stencila-document-patch', { target: 'window' })
  onCodeChunkPatch({ detail }: CustomEvent<StencilaNodeUpdateEvent>): void {
    if (detail.nodeId === this.el.id && isA('CodeChunk', detail.value)) {
      this.codeChunk = detail.value
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

  componentWillLoad(): void {
    /** Get rendered width of component to decide whether to stack the editor and outputs or not.
     * We can’t use media queries as the component is not always full width of the viewport, and depends on the parent element width.
     */
    const minWidth = 1200 // A non-scientific value below which the side-by-side layout looks too narrow.
    this.isStacked = this.el.getBoundingClientRect().width < minWidth
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
      return makeCodeChunk({ text, programmingLanguage: language })
    }

    throw new Error('Could not get CodeChunk contents')
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
      this.executeCodeState = 'RESOLVED'
      return err
    }
  }

  // Create an execute handler bound to this instance
  // @see https://github.com/typescript-eslint/typescript-eslint/blob/v3.7.0/packages/eslint-plugin/docs/rules/unbound-method.md
  private executeRef = () => this.execute()

  private allCodeVisibilityChangeHandler(isVisible: boolean) {
    this.allCodeVisibilityChange.emit({ isVisible })
  }

  private setCodeVisibility = (e: CodeVisibilityEvent): void => {
    this.isCodeVisibleState = e.detail.isVisible
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
                onClick={this.executeRef}
                isLoading={this.executeCodeState === 'PENDING'}
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
                autofocus={this.autofocus}
                executeHandler={this.onExecuteHandler}
                keymap={this.keymap}
                readOnly={this.executeHandler === undefined}
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

          <figcaption>
            <slot name={CodeChunkComponent.slots.caption} />
          </figcaption>
        </figure>
      </Host>
    )
  }
}
