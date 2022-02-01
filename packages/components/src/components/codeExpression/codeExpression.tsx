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
import { codeExpression, CodeExpression } from '@stencila/schema'
import { CodeExecuteStatus } from '../code/codeExecuteStatus'
import {
  CodeComponent,
  CodeExecuteCancelEvent,
  CodeExecuteEvent,
  CodeVisibilityEvent,
  DiscoverExecutableLanguagesEvent,
  ExecuteRequired,
  ExecuteStatus,
} from '../code/codeTypes'
import {
  FileFormat,
  fileFormatMap,
  FileFormatMap,
  lookupFormat,
} from '../editor/languageUtils'
import { getSlotByName } from '../utils/slotSelectors'
import { LanguagePickerInline } from './languageSelect'

const slots = {
  text: 'text',
  output: 'output',
}

/**
 * @slot text - The source code of the `CodeChunk`. Corresponds to the `text`
 *              field in the Stencila `CodeExpression` Schema.
 * @slot output - A single output element. Corresponds to the `output` field in
 *                the Stencila `CodeExpression` Schema.
 */
@Component({
  tag: 'stencila-code-expression',
  styleUrls: {
    default: 'codeExpression.css',
    material: 'codeExpression.css',
  },
  scoped: true,
})
export class CodeExpressionComponent implements CodeComponent<CodeExpression> {
  @Element() private el: HTMLStencilaCodeExpressionElement

  private emptyOutputMessage = 'No output to show'
  private hoverTimeOut: number | undefined = undefined
  private hoverStartedAt = Date.now()
  private outputSlot: Element

  /**
   * A callback function to be called with the value of the `CodeExpression`
   * node when executing the `CodeExpression`.
   */
  @Prop() public executeHandler?: (
    codeExpression: CodeExpression
  ) => Promise<CodeExpression>

  /**
   * Disallow editing of the editor contents when set to `true`
   */
  @Prop()
  public readOnly = false

  /**
   * Programming language of the CodeExpression
   */
  @Prop({ mutable: true })
  public programmingLanguage: string

  /**
   * List of all supported programming languages
   */
  @Prop()
  public languageCapabilities: FileFormatMap = fileFormatMap

  /**
   * List of programming languages that can be executed in the current context
   */
  @Prop({ mutable: true })
  public executableLanguages: FileFormatMap =
    window.stencilaWebClient?.executableLanguages ?? {}

  @Listen('stencila-discover-executable-languages', { target: 'window' })
  onDiscoverExecutableLanguages({
    detail,
  }: DiscoverExecutableLanguagesEvent): void {
    this.executableLanguages = detail.languages
    this.checkIfExecutable()
  }

  @State() isExecutable: boolean = false

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
   * Event emitted when the language of the editor is changed.
   */
  @Event({ eventName: 'stencila-language-change' })
  languageChange: EventEmitter<FileFormat>

  /**
   * Function to call when the user selects a new language from the language
   * picker dropdown.
   */
  private onSelectLanguage = async (language: string): Promise<void> => {
    this.languageChange.emit(lookupFormat(language))
    this.programmingLanguage = language
  }

  /**
   * Stencila CodeExpression node to render
   */
  @Prop({
    mutable: true,
  })
  codeExpression?: CodeExpression

  @State() hover = false

  @State() isCodeVisible = false

  @State() isOutputEmpty = false

  private getOutputSlotContents = () => {
    // Checking output list to account for non-text nodes such as images.
    const output = (this.outputSlot?.childNodes ?? [])[0]

    return output instanceof Text ? output.textContent : output
  }

  private checkIfEmpty = (): void => {
    this.isOutputEmpty = this.getOutputSlotContents() === undefined
  }

  componentWillLoad(): void {
    this.outputSlot = getSlotByName(this.el)(slots.output)[0]

    this.checkIfEmpty()
    this.checkIfExecutable()
  }

  @Listen('stencila-code-visibility-change', { target: 'window' })
  onAllCodeVisibilityChange(event: CodeVisibilityEvent): void {
    this.setCodeVisibility(event)
  }

  /**
   * Returns the text contents from the inline code editor
   */
  @Method()
  public async getTextContents(): Promise<string> {
    const slot = this.selectTextSlot()
    return Promise.resolve(slot?.textContent ?? '')
  }

  /**
   * Returns the `CodeExpression` node with the updated `text` contents from the
   * editor.
   */
  @Method()
  public async getContents(): Promise<CodeExpression> {
    return Promise.resolve(
      codeExpression({
        text: await this.getTextContents(),
        programmingLanguage: this.programmingLanguage,
      })
    )
  }

  private setCodeVisibility = (e: CodeVisibilityEvent): void => {
    this.isCodeVisible = e.detail.isVisible
  }

  private toggleCodeVisibility = (): boolean =>
    (this.isCodeVisible = !this.isCodeVisible)

  private selectTextSlot = (): HTMLElement | null =>
    this.el.querySelector(`.${slots.text}`)

  /**
   * Event emitted when the source code of the `CodeExpression` node is changed.
   */
  @Event({ eventName: 'stencila-content-change' })
  contentChange: EventEmitter<string>

  private contentChangeHandler = (e: Event) => {
    const target = e.currentTarget as HTMLSpanElement
    this.contentChange.emit(target.textContent ?? '')
  }

  private handleKeyDown = (event: KeyboardEvent): void => {
    if (event.key === 'Enter' && event.ctrlKey) {
      event.preventDefault()
      this.execute().catch((err) => {
        console.error(err)
      })
    }
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

  /**
   * Determine if the CodeChunk can be executed or not.
   * For a CodeChunk to be considered executable it must have a `executeHandler` function attached
   * and the current `programmingLanguage` must be in the list of `executableLanguages`.
   */
  private checkIfExecutable = (): void => {
    if (
      this.programmingLanguage === undefined ||
      !this.executeHandler ||
      Object.keys(this.executableLanguages ?? {}).length <= 0
    ) {
      this.isExecutable = false
      return
    }

    const activeLanguageFormat = lookupFormat(this.programmingLanguage).name
    this.isExecutable =
      this.executeHandler !== undefined &&
      Object.values(this.executableLanguages ?? {}).some(
        (format) => format.name === activeLanguageFormat
      )
    return
  }

  private isPending = (): boolean => {
    return (
      this.executeStatus?.includes('Running') ||
      this.executeStatus?.includes('Scheduled') ||
      false
    )
  }

  private onExecuteHandler = async (): Promise<CodeExpression> => {
    const node = await this.getContents()

    // If node is running, emit cancel event and terminate early
    if (this.isPending()) {
      this.codeExecuteCancelEvent.emit({ nodeId: this.el.id, scope: 'All' })
      return node
    }

    this.codeExecuteEvent.emit({ nodeId: this.el.id, ordering: 'Topological' })

    if (this.isExecutable && this.executeHandler) {
      const computed = await this.executeHandler(node)
      this.isOutputEmpty =
        computed.output === undefined || computed.output === null
      this.codeExpression = computed
      return computed
    }

    return node
  }

  /**
   * Run the `CodeExpression`
   */
  @Method()
  public async execute(): Promise<CodeExpression | Error> {
    try {
      const res = await this.onExecuteHandler()
      // Add artificial delay to allow user to register the spinner
      return res
    } catch (err) {
      console.error(err)
      return new Error('Could not execute CodeExpression')
    }
  }

  // Create an execute handler bound to this instance
  // @see https://github.com/typescript-eslint/typescript-eslint/blob/v3.7.0/packages/eslint-plugin/docs/rules/unbound-method.md
  private executeRef = () => this.execute()

  private dividerArrow = (): SVGElement => (
    <svg
      class="divider"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 8 24"
      preserveAspectRatio="xMinYMin"
    >
      <path d="M8 12L1 0H0v24h1l7-12z" />
    </svg>
  )

  private onMouseOutHandler = (e: MouseEvent): void => {
    const target = e.target as Node | null
    const relatedTarget = e.relatedTarget as Node | null
    if (!target?.contains(relatedTarget)) {
      this.removeHoverState()
    }
  }

  private addHoverState = (): void => {
    window.clearTimeout(this.hoverTimeOut)

    if (!this.hover) {
      this.hover = true
      this.hoverStartedAt = Date.now()
    }
  }

  private removeHoverState = (): void => {
    const diff = Date.now() - this.hoverStartedAt
    if (this.hover && diff < 60) {
      this.hoverTimeOut = window.setTimeout(() => {
        this.hover = false
      }, 3000)
    } else if (this.hover) {
      this.hover = false
    }
  }

  private generateContent = (): HTMLElement[] => {
    return [
      <span class="actions">
        <stencila-menu menuPosition="bottom-start">
          <CodeExecuteStatus
            executeStatus={this.executeStatus}
            executeRequired={this.executeRequired}
            slot="toggle"
          ></CodeExecuteStatus>
          <slot name="code-dependencies" />
          <slot name="code-dependents" />
        </stencila-menu>
        <stencila-button
          aria-label="Run Code"
          class="run"
          onClick={this.executeRef}
          color="key"
          icon={this.isPending() ? 'loader-2' : 'play'}
          iconOnly={true}
          minimal={true}
          size="xsmall"
          tooltip={this.isPending() ? 'Cancel' : 'Run'}
        ></stencila-button>
        <stencila-button
          aria-label={`${this.isCodeVisible ? 'Hide' : 'Show'} Code`}
          class="secondaryAction sourceToggle"
          onClick={this.toggleCodeVisibility}
          color="key"
          icon={this.isCodeVisible ? 'eye-off' : 'eye'}
          iconOnly={true}
          minimal={true}
          size="xsmall"
          tooltip={`${this.isCodeVisible ? 'Hide' : 'Show'} Code`}
        ></stencila-button>
        <span class="secondaryAction">
          <LanguagePickerInline
            activeLanguage={this.programmingLanguage ?? ''}
            languageCapabilities={this.languageCapabilities}
            executableLanguages={this.executableLanguages}
            onSetLanguage={this.onSelectLanguage}
            disabled={this.readOnly}
          ></LanguagePickerInline>
        </span>
        <span
          class="text"
          contentEditable={!this.readOnly}
          onBlur={this.removeHoverState}
          onInput={this.contentChangeHandler}
          tabIndex={this.isCodeVisible ? 0 : -1}
          role="textbox"
        >
          <slot name={slots.text} />
        </span>
      </span>,
      this.dividerArrow(),
      <span class={{ hidden: this.isOutputEmpty, slot: true }}>
        <slot name="output" />
      </span>,
      this.isOutputEmpty && (
        <stencila-tooltip text={this.emptyOutputMessage} class="output">
          …
        </stencila-tooltip>
      ),
    ]
  }

  public render(): HTMLElement {
    return (
      <Host
        class={{
          hover: this.hover,
          isCodeVisible: this.isCodeVisible,
          isOutputEmpty: this.isOutputEmpty,
        }}
        onMouseEnter={this.addHoverState}
        onMouseOut={this.onMouseOutHandler}
        onKeyDown={this.handleKeyDown}
      >
        {this.generateContent()}
      </Host>
    )
  }
}
