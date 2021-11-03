import { Component, h, Host, Prop } from '@stencil/core'
import { IconNames } from '../icon/iconNames'

@Component({
  tag: 'stencila-menu-item',
  styleUrls: {
    default: 'menuItem.css',
    material: 'menuItem.material.css',
  },
  scoped: true,
})
export class MenuItem {
  /**
   * Name of the icon to show before the label
   * @see Icon component for possible values
   */
  @Prop()
  icon: IconNames | undefined

  public render() {
    return (
      <Host role="menuitem">
        {this.icon !== undefined && (
          <stencila-icon icon={this.icon}></stencila-icon>
        )}
        <slot />
      </Host>
    )
  }
}
