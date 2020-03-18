import { Component, h, Host } from '@stencil/core'

@Component({
  tag: 'stencila-tooltip-element',
  styleUrls: {
    default: 'tooltipElement.css',
    material: 'tooltipElement.material.css'
  },
  scoped: true
})
export class TooltipElement {
  public static readonly elementName = 'stencila-tooltip-element'

  public render() {
    return (
      <Host>
        <slot />
      </Host>
    )
  }
}
