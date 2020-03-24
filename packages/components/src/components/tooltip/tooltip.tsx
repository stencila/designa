import { Component, Element, h, Host, Prop, Watch } from '@stencil/core'
import { clamp, ordNumber } from 'fp-ts/lib/Ord'

@Component({
  tag: 'stencila-tooltip',
  styleUrls: {
    default: 'tooltip.css',
    material: 'tooltip.css'
  },
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
    // TODO: Use Schema helpers once package is updated: https://github.com/stencila/schema/issues/178
    const target =
      document.querySelector('[data-itemscope="root"]') || document.body
    const { left, bottom, width } = this.el.getBoundingClientRect()
    if (this.tooltipRef === undefined) {
      this.tooltipRef =
        document.querySelector('stencila-tooltip-element') ??
        document.createElement('stencila-tooltip-element')
    }

    this.tooltipRef.innerText = this.text
    this.tooltipRef.style.top = `${clamp(ordNumber)(0, Infinity)(bottom + 8)}px`
    target.appendChild(this.tooltipRef)

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

  private loadComponent = () => {
    this.el.addEventListener('focus', this.showTooltip)
    this.el.addEventListener('blur', this.destroyTooltip)

    this.el.addEventListener('mouseenter', this.showTooltip)
    this.el.addEventListener('mouseleave', this.destroyTooltip)
  }

  private unloadComponent = () => {
    this.el.removeEventListener('focus', this.showTooltip)
    this.el.removeEventListener('blur', this.destroyTooltip)

    this.el.removeEventListener('mouseenter', this.showTooltip)
    this.el.removeEventListener('mouseleave', this.destroyTooltip)
  }

  componentDidLoad() {
    this.loadComponent()
  }

  componentDidUnload() {
    this.unloadComponent()
  }

  @Watch('text')
  watchHandler(newText: string) {
    this.tooltipRef.innerText = newText
  }

  public render() {
    return (
      <Host tabindex="0">
        <slot />
      </Host>
    )
  }
}
