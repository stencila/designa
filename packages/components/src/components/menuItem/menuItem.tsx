import { Element, Component, h, Host, Prop, Fragment } from '@stencil/core'
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
  @Element() el: HTMLStencilaMenuItemElement | undefined

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

  /**
   * The overall size of the component.
   */
  @Prop() public role: 'menuitem' | 'menuitemradio' | 'menuitemcheckbox' =
    'menuitem'

  /**
   * Determines whether the menu item is enabled/clickable or not
   */
  @Prop({ reflect: true }) public disabled = false

  /**
   * Renders the menu item as a section divider.
   * It does not have any click or hover handlers
   */
  @Prop({ reflect: true }) public divider = false

  public render() {
    const ariaAttrs = {
      'aria-disabled': this.disabled || this.divider,
      role: this.role,
    }

    return (
      <Host {...ariaAttrs} size={this.size}>
        {this.el?.slot === 'toggle' ? (
          <Fragment>
            {this.icon !== undefined && (
              <stencila-icon icon={this.icon}></stencila-icon>
            )}
            <slot />
          </Fragment>
        ) : (
          <li>
            {this.icon !== undefined && (
              <stencila-icon icon={this.icon}></stencila-icon>
            )}
            <slot />
          </li>
        )}
      </Host>
    )
  }
}
