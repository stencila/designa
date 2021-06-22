import { Component, h, Host, Prop, getAssetPath } from '@stencil/core'
import { IconNames } from './iconNames'

const getGlobalIconStyle = () =>
  document.getElementsByTagName('html')[0].getAttribute('data-icon-style') ===
  'fill'
    ? 'fill'
    : 'line'

@Component({
  tag: 'stencila-icon',
  styleUrls: {
    default: 'icon.css',
    material: 'icon.material.css',
  },
  scoped: true,
  assetsDirs: ['assets'],
})
export class Icon {
  /**
   * Name of the icon to be rendered.
   * Corresponds to icon names from the [Remix Icon set](http://remixicon.com)
   */
  @Prop()
  public readonly icon: IconNames

  /**
   * Style with which to render the icon
   */
  @Prop()
  public readonly iconStyle: 'fill' | 'line' = getGlobalIconStyle()

  public render() {
    return (
      <Host icon={this.icon} aria-hidden="true">
        <svg>
          <use
            xlinkHref={`${getAssetPath(`./assets/remixicon.symbol.svg`)}#ri-${
              this.icon
            }-${this.iconStyle}`}
          ></use>
        </svg>
      </Host>
    )
  }
}
