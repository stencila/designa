import { Component, getAssetPath, h, Host, Prop } from '@stencil/core'
import wretch from 'wretch'
import { Colors } from '../../types'
import {
  IconNames,
  isSuffixedIconName,
  isUnsuffixedIconName,
} from './iconNames'

let isFetchingIcons = false

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

  /**
   * The fill color of the icon
   */
  @Prop()
  public readonly color?: Colors | string

  /**
   * The URL of the SVG file containing icon symbols
   */
  @Prop()
  public readonly iconUrl: string = getAssetPath(
    `./assets/remixicon.symbol.svg`
  )

  private fetchIcons = async () => {
    const response = await wretch()
      .url(this.iconUrl)
      .options({ credentials: 'omit', mode: 'cors' })
      .get()
      .text()

    const div = document.createElement('div')
    div.innerHTML = response
    document.body.append(div)
  }

  componentWillLoad() {
    if (!isFetchingIcons) {
      isFetchingIcons = true
      this.fetchIcons().catch((err) => {
        console.log('Failed to load icons', err)
      })
    }
  }

  public render() {
    const iconName = isSuffixedIconName(this.icon)
      ? `#ri-${this.icon}-${this.iconStyle}`
      : isUnsuffixedIconName(this.icon)
      ? `#ri-${this.icon}`
      : this.icon

    return (
      <Host icon={this.icon} aria-hidden="true">
        <svg
          style={{
            fill: this.color ? `var(--color-${this.color})` : undefined,
          }}
        >
          <use href={iconName}></use>
        </svg>
      </Host>
    )
  }
}
