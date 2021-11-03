import { Component, h, Host, Prop } from '@stencil/core'

let menuIds = 0

@Component({
  tag: 'stencila-menu',
  styleUrls: {
    default: 'menu.css',
    material: 'menu.material.css',
  },
  scoped: true,
})
export class Menu {
  /**
   * Determines whether the Menu is shown or not
   */
  @Prop({
    mutable: true,
    reflect: true,
  })
  public isOpen = false

  private toggleMenu = (e: MouseEvent) => {
    e.preventDefault()
    this.isOpen = !this.isOpen
  }

  private menuId = `stencila-menu-${menuIds++}`

  public render() {
    return (
      <Host>
        <span
          onClick={this.toggleMenu}
          aria-controls={this.menuId}
          aria-expanded={this.isOpen ? 'true' : 'false'}
        >
          <slot name="toggle" />
        </span>

        <ul
          role="menu"
          aria-hidden={!this.isOpen}
          aria-orientation="vertical"
          tabindex="-1"
          id={this.menuId}
        >
          <slot />
        </ul>
      </Host>
    )
  }
}
