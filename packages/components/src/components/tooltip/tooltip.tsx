import { Component, h, Element, Host, Prop } from '@stencil/core'
import { clamp, ordNumber } from 'fp-ts/lib/Ord'

@Component({
  tag: 'stencila-tooltip',
  styleUrl: 'tooltip.css',
  scoped: true
})
export class Tooltip {
  public static readonly elementName = 'stencila-tooltip'

  @Element() el: HTMLElement

  /**
   * The text content of the Tooltip.
   */
  @Prop() text!: string

  private tooltipRef: HTMLSpanElement

  private showTooltip = () => {
    const { left, bottom, width } = this.el.getBoundingClientRect()
    if (this.tooltipRef === undefined) {
      this.tooltipRef = document.createElement('stencila-tooltip-element')
    }

    this.tooltipRef.innerText = this.text
    this.tooltipRef.style.top = `${clamp(ordNumber)(0, Infinity)(bottom + 8)}px`
    document.body.appendChild(this.tooltipRef)

    const tooltip = this.tooltipRef.getBoundingClientRect()
    const maxLeft = window.outerWidth - tooltip.width
    this.tooltipRef.style.left = `${clamp(ordNumber)(0, maxLeft)(
      left + width / 2
    )}px`
  }

  private destroyTooltip = () => {
    if (this.tooltipRef) {
      this.tooltipRef.remove()
    }
  }

  componentDidLoad() {
    this.el.addEventListener('focus', this.showTooltip)
    this.el.addEventListener('blur', this.destroyTooltip)

    this.el.addEventListener('mouseenter', this.showTooltip)
    this.el.addEventListener('mouseleave', this.destroyTooltip)
  }

  componentDidUnload() {
    this.el.removeEventListener('focus', this.showTooltip)
    this.el.removeEventListener('blur', this.destroyTooltip)

    this.el.removeEventListener('mouseenter', this.showTooltip)
    this.el.removeEventListener('mouseleave', this.destroyTooltip)
  }

  public render() {
    return (
      <Host tabindex="0">
        <slot />
      </Host>
    )
  }
}
