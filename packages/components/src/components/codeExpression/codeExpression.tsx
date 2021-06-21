import {
  Component,
  Element,
  h,
  Host,
  Listen,
  Method,
  Prop,
  State,
} from '@stencil/core'
import { codeExpression, CodeExpression } from '@stencila/schema'
import { CodeComponent, CodeVisibilityEvent } from '../code/codeTypes'
import { NodeRenderer } from '../nodeList/nodeRenderer'

const slots = {
  text: 'text',
  output: 'output',
}

@Component({
  tag: 'stencila-code-expression',
  styleUrls: {
    default: 'codeExpression.css',
    material: 'codeExpression.css',
  },
  scoped: true,
})
export class CodeExpressionComponent implements CodeComponent<CodeExpression> {
  private emptyOutputMessage = 'No output to show'
  private hoverTimeOut: number | undefined = undefined
  private hoverStartedAt = Date.now()

  @Element() private el: HTMLStencilaCodeExpressionElement

  /**
   * A callback function to be called with the value of the `CodeExpression` node when executing the `CodeExpression`.
   */
  @Prop() public executeHandler?: (
    codeExpression: CodeExpression
  ) => Promise<CodeExpression>

  /**
   * Programming language of the CodeExpression
   */
  @Prop()
  public programmingLanguage: string

  @State() output: CodeExpression['output'] | HTMLElement

  @State() codeErrors: CodeExpression['errors']

  @State() hover = false

  @State() isCodeVisible = false

  @State() isOutputEmpty = false

  @State() executeCodeState: 'INITIAL' | 'PENDING' | 'RESOLVED' = 'INITIAL'

  componentDidLoad(): void {
    // Checking output list to account for non-text nodes such as images.
    const outputSlot = this.el.querySelector(`[slot=${slots.output}]`)
    const output = (outputSlot?.childNodes ?? [])[0]

    this.output =
      output === undefined
        ? ''
        : output instanceof Text
        ? output.textContent
        : output

    this.isOutputEmpty = output === undefined
  }

  @Listen('collapseAllCode', { target: 'window' })
  @Listen('setAllCodeVisibility', { target: 'window' })
  onSetAllCodeVisibility(event: CodeVisibilityEvent): void {
    this.collapseAllListenHandler(event)
  }

  /**
   * Returns the `CodeExpression` node with the updated `text` contents from the editor.
   */
  @Method()
  public async getContents(): Promise<CodeExpression> {
    return Promise.resolve(
      codeExpression({
        text: this.getTextSlotContents(),
        programmingLanguage: this.programmingLanguage,
      })
    )
  }

  private collapseAllListenHandler = (e: CodeVisibilityEvent): void => {
    this.isCodeVisible = e.detail.isVisible
  }

  private toggleCodeVisibility = (): boolean =>
    (this.isCodeVisible = !this.isCodeVisible)

  private selectTextSlot = (): HTMLElement | null =>
    this.el.querySelector(`.${slots.text}`)

  private getTextSlotContents = (): string => {
    const slot = this.selectTextSlot()
    return slot?.textContent ?? ''
  }

  private handleKeyDown = (event: KeyboardEvent): void => {
    if (event.key === 'Enter' && event.shiftKey) {
      event.preventDefault()
      this.execute().catch((err) => {
        console.error(err)
      })
    }
  }

  private onExecuteHandler = async (): Promise<CodeExpression> => {
    this.executeCodeState = 'PENDING'
    const node = await this.getContents()

    if (this.executeHandler !== undefined) {
      const computed = await this.executeHandler(node)
      this.executeCodeState = 'RESOLVED'
      /* this.updateErrors(computed.errors) */
      this.isOutputEmpty =
        computed.output === undefined || computed.output === null
      this.output = computed.output
      return computed
    }

    this.executeCodeState = 'RESOLVED'
    return node
  }

  /**
   * Run the `CodeExpression`
   */
  @Method()
  public async execute(): Promise<CodeExpression> {
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
        <stencila-button
          aria-label="Run Code"
          class="run"
          onClick={this.executeRef}
          color="key"
          disabled={!this.executeHandler}
          isLoading={this.executeCodeState === 'PENDING'}
          icon="play"
          iconOnly={true}
          minimal={true}
          size="xsmall"
          tooltip="Run"
        ></stencila-button>
        <stencila-button
          aria-label="Run Code"
          class="sourceToggle"
          onClick={this.toggleCodeVisibility}
          color="key"
          icon={this.isCodeVisible ? 'eye-off' : 'eye'}
          iconOnly={true}
          minimal={true}
          size="xsmall"
          tooltip={`${this.isCodeVisible ? 'Hide' : 'Show'} Code`}
        ></stencila-button>
        <span
          class="text"
          contentEditable={true}
          onBlur={this.removeHoverState}
          tabIndex={this.isCodeVisible ? 0 : -1}
        >
          <slot name={slots.text} />
        </span>
      </span>,
      this.dividerArrow(),
      <span class={{ hidden: true, slot: true }}>
        <slot name="output" />
      </span>,
      this.isOutputEmpty ? (
        <stencila-tooltip text={this.emptyOutputMessage} class="output">
          …
        </stencila-tooltip>
      ) : this.output == null ? null : (
        <NodeRenderer node={this.output}></NodeRenderer>
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
