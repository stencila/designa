import { Component, h, Host, State, Element } from '@stencil/core'

@Component({
  tag: 'stencila-code-expression',
  styleUrl: 'codeExpression.css',
  scoped: false
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

  protected componentDidLoad() {
    this.calculateSourceWidth()
  }

  public render() {
    return (
      <Host class={{ sourceHidden: !this.isSourceVisible }}>
        <span class="source" style={{ '--source-width': this.sourceWidth }}>
          <stencila-icon
            tabindex="1"
            aria-label={`${this.isSourceVisible ? 'Hide' : 'Show'} Source`}
            icon={this.isSourceVisible ? 'eye' : 'eye-off'}
            onClick={this.toggleSourceVisibility}
          ></stencila-icon>
          <slot name={CodeExpression.slots.text} />
        </span>

        <svg
          class="divider"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 8 24"
          preserveAspectRatio="xMinYMin"
        >
          <path d="M8 12L1 0H0v24h1l7-12z" />
        </svg>

        <slot name={CodeExpression.slots.output} />
      </Host>
    )
  }
}
