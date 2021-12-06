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

  /**
   * The overall size of the component.
   */
  @Prop() public size: 'xsmall' | 'small' | 'default' | 'large' = 'default'

  public render() {
    return (
      <Host role="menuitem" size={this.size}>
        {this.icon !== undefined && (
          <stencila-icon icon={this.icon}></stencila-icon>
        )}
        <slot />
      </Host>
    )
  }
}
