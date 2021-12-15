import { Component, Element, h, Host, Prop } from '@stencil/core'
import { createPopper, Instance, Placement } from '@popperjs/core'

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

  private menuEl: HTMLUListElement | undefined
  private popperRef: Instance | null = null

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
  public autoClose = true

  /**
   * The position relative to the toggle button where the menu should appear.
   */
  @Prop()
  public menuPosition: Placement = 'right-start'

  initMenu = () => {
    if (this.menuEl) {
      this.popperRef = createPopper(this.el, this.menuEl, {
        placement: this.menuPosition,
        strategy: 'fixed',
        modifiers: [{ name: 'preventOverflow' }],
      })
    }
  }

  private computeMenuLocation = () => {
    this.popperRef ? this.popperRef.update() : this.initMenu()
  }

  private toggleMenu = (e: MouseEvent) => {
    e.preventDefault()
    if (this.autoClose) {
      e.stopPropagation()
    }
    this.isOpen ? (this.isOpen = false) : this.openMenu()
  }

  private openMenu = () => {
    this.computeMenuLocation()
    this.isOpen = true
  }

  private closeMenu = () => {
    if (this.autoClose) {
      this.isOpen = false
    }
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

  public disconnectedCallback(): void {
    this.el.removeEventListener('mouseout', this.closeOnBlur)
    this.el.removeEventListener('mouseenter', this.clearTimeout)

    if (this.popperRef) {
      this.popperRef.destroy()
      this.popperRef = null
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
          ref={(el) => (this.menuEl = el)}
        >
          <slot />
        </ul>
      </Host>
    )
  }
}
