import { Component, Element, h, Host, Prop } from '@stencil/core'

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
  @Element() private el: HTMLStencilaCodeFragmentElement

  /**
   * Determines whether the Menu is shown or not
   */
  @Prop({
    mutable: true,
    reflect: true,
  })
  public isOpen = false

  /**
   * Close the menu when losing focus
   */
  @Prop()
  public autoClose = false

  private toggleMenu = (e: MouseEvent) => {
    e.preventDefault()
    this.isOpen = !this.isOpen
  }

  private closeMenu = () => {
    this.isOpen = false
  }

  private autoCloseTimeoutRef: number
  private closeOnBlur = (e: MouseEvent) => {
    if (this.isOpen && !this.el.contains(e.relatedTarget as Node)) {
      this.autoCloseTimeoutRef = window.setTimeout(this.closeMenu, 250)
    }
  }

  private clearTimeout = () => {
    window.clearTimeout(this.autoCloseTimeoutRef)
  }

  private menuId = `stencila-menu-${menuIds++}`

  componentWillLoad() {
    if (this.autoClose) {
      this.el.addEventListener('mouseout', this.closeOnBlur)
      this.el.addEventListener('mouseenter', this.clearTimeout)
    }
  }

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
          onClick={this.closeMenu}
        >
          <slot />
        </ul>
      </Host>
    )
  }
}
