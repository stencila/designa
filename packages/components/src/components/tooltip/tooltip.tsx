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

    window.addEventListener('mousemove', this.onMouseMoveHandler)
  }

  private onMouseMoveHandler = (e: MouseEvent): void => {
    if (!this.el.contains(e.target as Node)) {
      this.destroyTooltip()
    }
  }

  private onMouseOutHandler = (e: MouseEvent): void => {
    if (e.relatedTarget && !this.el.contains(e.relatedTarget as Node)) {
      this.destroyTooltip()
    }
  }

  private destroyTooltip = (): void => {
    if (this.tooltipRef) {
      this.tooltipRef.remove()
    }

    if (this.popperRef) {
      this.popperRef.destroy()
      this.popperRef = null
    }

    window.removeEventListener('mousemove', this.onMouseMoveHandler)
  }

  private loadComponent = (): void => {
    this.el.addEventListener('focusin', this.showTooltip)
    this.el.addEventListener('focusout', this.destroyTooltip)

    this.el.addEventListener('mouseenter', this.showTooltip)
    this.el.addEventListener('mouseout', this.onMouseOutHandler)
  }

  private unloadComponent = (): void => {
    this.el.removeEventListener('focusin', this.showTooltip)
    this.el.removeEventListener('focusout', this.destroyTooltip)

    this.el.removeEventListener('mouseenter', this.showTooltip)
    this.el.removeEventListener('mouseout', this.onMouseOutHandler)
    window.removeEventListener('mousemove', this.onMouseMoveHandler)
  }

  public componentDidLoad(): void {
    this.loadComponent()
  }

  public disconnectedCallback(): void {
    this.unloadComponent()
    this.destroyTooltip()
  }

  @Watch('text')
  watchHandler(newText: string): void {
    if (this.tooltipRef !== undefined) {
      this.tooltipRef.innerText = newText
      if (this.popperRef) {
        this.popperRef
          .update()
          .catch((err) =>
            console.log('could not update Tooltip position\n', err)
          )
      }
    }
  }

  public render(): HTMLElement {
    return (
      <Host>
        <slot />
      </Host>
    )
  }
}
