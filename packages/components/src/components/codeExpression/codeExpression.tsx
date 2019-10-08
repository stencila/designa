import { Component, h, Host, State, Element } from '@stencil/core'

@Component({
  tag: 'stencila-code-expression',
  styleUrl: 'codeExpression.css',
  shadow: true
})
export class CodeExpression {
  public static readonly elementName = 'stencila-code-expression'

  public static slots = {
    text: 'text',
    output: 'output'
  }

  @Element() private el: HTMLElement

  @State() sourceWidth: string = 'auto'

  @State() isSourceVisible: boolean = true

  private toggleSourceVisibility = () =>
    (this.isSourceVisible = !this.isSourceVisible)

  private calculateSourceWidth = () => {
    const source: HTMLElement = this.el.querySelector(
      `[slot=${CodeExpression.slots.text}]`
    )
    source.style.width = 'auto'
    this.sourceWidth = source !== null ? source.offsetWidth + 'px' : 'auto'
    source.style.width = ''
  }

  @State() isOutputEmpty: boolean = true

  private outputExists = () => {
    const output: HTMLElement = this.el.querySelector(
      `[slot=${CodeExpression.slots.output}]`
    )

    this.isOutputEmpty =
      output === null ? true : output.innerHTML.trim() === '' ? true : false
    if (this.isOutputEmpty) {
      output.innerHTML = `…`
    }
  }

  protected componentWillLoad() {
    this.outputExists()
  }

  protected componentDidLoad() {
    this.calculateSourceWidth()
  }

  private emptyOutputMessage = 'No output to show'

  private dividerArrow = (
    <svg
      class="divider"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 8 24"
      preserveAspectRatio="xMinYMin"
    >
      <path d="M8 12L1 0H0v24h1l7-12z" />
    </svg>
  )

  public render() {
    const content = [
      <span class="source" style={{ '--source-width': this.sourceWidth }}>
        <stencila-icon
          tabindex="0"
          aria-label={`${this.isSourceVisible ? 'Hide' : 'Show'} Source`}
          icon={this.isSourceVisible ? 'eye' : 'eye-off'}
          onClick={this.toggleSourceVisibility}
        ></stencila-icon>
        <slot name={CodeExpression.slots.text} />
      </span>,
      this.dividerArrow,
      <slot name={CodeExpression.slots.output} />
    ]

    return (
      <Host
        class={{
          sourceHidden: !this.isSourceVisible,
          isOutputEmpty: this.isOutputEmpty
        }}
      >
        {this.isOutputEmpty ? (
          <stencila-tooltip text={this.emptyOutputMessage}>
            {content}
          </stencila-tooltip>
        ) : (
          content
        )}
      </Host>
    )
  }
}
