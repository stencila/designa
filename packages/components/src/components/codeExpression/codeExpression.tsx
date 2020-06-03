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
   * A callback function to be called with the value of the `CodeExpression` node when execting the `CodeExpression`.
   */
  @Prop() public executeHandler?: (
    codeExpression: CodeExpression
  ) => Promise<CodeExpression>

  @State() output: CodeExpression['output']

  @State() codeErrors: CodeExpression['errors']

  @State() hover = false

  @State() isCodeVisible = false

  @State() isOutputEmpty = false

  componentDidLoad(): void {
    this.isOutputEmpty = this.outputExists()
  }

  @Listen('collapseAllCode', { target: 'window' })
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
        output: this.getOutputSlotContents(),
      })
    )
  }

  private collapseAllListenHandler = (e: CodeVisibilityEvent): void => {
    this.isCodeVisible = !e.detail.isVisible
  }

  private toggleCodeVisibility = (): boolean =>
    (this.isCodeVisible = !this.isCodeVisible)

  // Use `innerHTML` for checking output presence to account for non-text nodes such as images.
  private outputExists = (): boolean =>
    this.selectOutputSlot()?.innerHTML.trim() === ''

  private selectTextSlot = (): HTMLElement | null =>
    this.el.querySelector(`[slot=${slots.text}]`)

  private getTextSlotContents = (): string => {
    const slot = this.selectTextSlot()
    return slot?.textContent ?? ''
  }

  private selectOutputSlot = (): HTMLElement | null =>
    this.el.querySelector(`[slot=${slots.output}]`)

  private getOutputSlotContents = (): string => {
    const slot = this.selectOutputSlot()
    return slot?.textContent ?? ''
  }

  // eslint-disable-next-line @stencil/own-props-must-be-private
  execute = async (): Promise<CodeExpression> => {
    try {
      const codeExpression = await this.getContents()
      if (this.executeHandler) {
        return this.executeHandler(codeExpression)
      }

      throw new Error('handler not found')
    } catch (err) {
      console.error(err)
      throw new Error(err)
    }
  }

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
        <stencila-icon
          aria-label="Code Express"
          icon="terminal"
        ></stencila-icon>
        <span class="extraActions">
          <stencila-tooltip
            text={`${this.isCodeVisible ? 'Hide' : 'Show'} Code`}
          >
            <stencila-icon
              tabindex="0"
              aria-label={`${this.isCodeVisible ? 'Hide' : 'Show'} Code`}
              icon={this.isCodeVisible ? 'eye-off' : 'eye'}
              onClick={this.toggleCodeVisibility}
            ></stencila-icon>
          </stencila-tooltip>
          <stencila-tooltip text="Run">
            <stencila-icon
              tabindex="0"
              aria-label="Run Code"
              icon="play"
              onClick={this.execute}
            ></stencila-icon>
          </stencila-tooltip>
        </span>
        <span
          class="text"
          contentEditable={true}
          onBlur={this.removeHoverState}
        >
          <slot name={slots.text} />
        </span>
      </span>,
      this.dividerArrow(),
      this.isOutputEmpty ? (
        <stencila-tooltip text={this.emptyOutputMessage}>…</stencila-tooltip>
      ) : (
        <slot name={slots.output} />
      ),
    ]
  }

  public render(): HTMLElement {
    return (
      <Host
        class={{
          hover: this.hover,
          codeHidden: !this.isCodeVisible,
          isOutputEmpty: this.isOutputEmpty,
        }}
        onMouseEnter={this.addHoverState}
        onMouseOut={this.onMouseOutHandler}
      >
        {this.generateContent()}
      </Host>
    )
  }
}
