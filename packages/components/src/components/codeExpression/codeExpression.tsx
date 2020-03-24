import { Component, Element, h, Host, State } from '@stencil/core'

const slots = {
  text: 'text',
  output: 'output'
}

@Component({
  tag: 'stencila-code-expression',
  styleUrls: {
    default: 'codeExpression.css',
    material: 'codeExpression.css'
  },
  scoped: true
})
export class CodeExpression {
  @Element() private el: HTMLStencilaCodeExpressionElement

  @State() sourceWidth = 'auto'

  @State() isSourceVisible = true

  private toggleSourceVisibility = () =>
    (this.isSourceVisible = !this.isSourceVisible)

  private calculateSourceWidth = () => {
    const source: HTMLElement | null = this.el.querySelector(
      `[slot=${slots.text}]`
    )
    if (source !== null) {
      source.style.width = 'auto'
      this.sourceWidth = source !== null ? `${source.offsetWidth}px` : 'auto'
      source.style.width = ''
    }
  }

  @State() isOutputEmpty = true

  private outputExists = () => {
    const output: HTMLElement | null = this.el.querySelector(
      `[slot=${slots.output}]`
    )

    this.isOutputEmpty = output === null ? true : output.innerHTML.trim() === ''

    if (this.isOutputEmpty && output !== null) {
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
        <stencila-tooltip
          text={`${this.isSourceVisible ? 'Hide' : 'Show'} Source`}
        >
          <stencila-icon
            tabindex="0"
            aria-label={`${this.isSourceVisible ? 'Hide' : 'Show'} Source`}
            icon={this.isSourceVisible ? 'eye' : 'eye-off'}
            onClick={this.toggleSourceVisibility}
          ></stencila-icon>
        </stencila-tooltip>
        <slot name={slots.text} />
      </span>,
      this.dividerArrow,
      <slot name={slots.output} />
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
