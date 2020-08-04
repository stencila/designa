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
  assetsDirs: ['assets'],
  scoped: true,
})
export class Icon {
  public static readonly elementName = 'stencila-icon'

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

  /**
   * Fully formed path to an SVG symbol file, including the ID selector of the symbol
   */
  @Prop()
  public readonly iconSrc: string | undefined

  private getIconName = (): string =>
    this.iconSrc !== undefined
      ? `${this.iconSrc}`
      : `${getAssetPath('./assets/remixicon.symbol.svg')}#ri-${this.icon}-${
          this.iconStyle
        }`

  public render() {
    return (
      <Host icon={this.icon}>
        <svg>
          <use href={this.getIconName()}></use>
        </svg>
      </Host>
    )
  }
}
