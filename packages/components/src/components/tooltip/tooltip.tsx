import { createPopper, Instance } from '@popperjs/core'
import {
  Component,
  ComponentInterface,
  Element,
  h,
  Host,
  Prop,
  Watch,
} from '@stencil/core'

@Component({
  tag: 'stencila-tooltip',
  styleUrls: {
    default: 'tooltip.css',
    material: 'tooltip.css',
  },
  scoped: true,
})
export class Tooltip implements ComponentInterface {
  protected static readonly elementName = 'stencila-tooltip'

  @Element() el: HTMLStencilaTooltipElement

  /**
   * The text content of the Tooltip.
   */
  @Prop() text!: string

  private tooltipRef?: HTMLSpanElement
  private popperRef: Instance | null = null

  private showTooltip = (): void => {
    // TODO: Use Schema helpers once package is updated: https://github.com/stencila/schema/issues/178
    const target =
      document.querySelector('[data-itemscope="root"]') ?? document.body

    if (this.tooltipRef === undefined) {
      this.tooltipRef =
        document.querySelector('stencila-tooltip-element') ??
        document.createElement('stencila-tooltip-element')
    }

    this.tooltipRef.innerText = this.text
    target.appendChild(this.tooltipRef)

    this.popperRef = createPopper(this.el, this.tooltipRef, {
      placement: 'bottom',
      modifiers: [
        {
          name: 'offset',
          options: {
            offset: [0, 8],
          },
        },
        {
          name: 'preventOverflow',
        },
      ],
    })
  }

  private destroyTooltip = (): void => {
    if (this.tooltipRef) {
      this.tooltipRef.remove()
    }

    if (this.popperRef) {
      this.popperRef.destroy()
      this.popperRef = null
    }
  }

  private loadComponent = (): void => {
    this.el.addEventListener('focus', this.showTooltip)
    this.el.addEventListener('blur', this.destroyTooltip)

    this.el.addEventListener('mouseenter', this.showTooltip)
    this.el.addEventListener('mouseleave', this.destroyTooltip)
  }

  private unloadComponent = (): void => {
    this.el.removeEventListener('focus', this.showTooltip)
    this.el.removeEventListener('blur', this.destroyTooltip)

    this.el.removeEventListener('mouseenter', this.showTooltip)
    this.el.removeEventListener('mouseleave', this.destroyTooltip)
  }

  public componentDidLoad(): void {
    this.loadComponent()
  }

  protected componentDidUnload(): void {
    this.unloadComponent()
    this.destroyTooltip()
  }

  @Watch('text')
  watchHandler(newText: string): void {
    if (this.tooltipRef !== undefined) {
      this.tooltipRef.innerText = newText
    }
  }

  public render(): HTMLElement {
    return (
      <Host tabindex="0">
        <slot />
      </Host>
    )
  }
}
