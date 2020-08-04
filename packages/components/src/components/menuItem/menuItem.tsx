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
