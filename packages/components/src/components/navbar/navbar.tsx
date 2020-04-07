import { Component, h, Prop, Host } from '@stencil/core'
import { Colors } from '../../types'

@Component({
  tag: 'stencila-nav-bar',
  styleUrls: {
    default: 'navbar.css',
    material: 'navbar.material.css',
  },
  scoped: true,
})
export class Navbar {
  /**
   * When `fixed` the Navbar will remain pinned to the top of the screen.
   * Note that if the Navbar component is not followed by a sibling element,
   * you will have to set `margin-top: 3rem` on the following element yourself.
   */
  @Prop() public position: 'static' | 'fixed' = 'static'

  /**
   * The background fill color of the Navbar
   */
  @Prop() public color: Colors = 'primary'

  public render() {
    return (
      <Host color={this.color} position={this.position}>
        <nav class={{ [this.color]: true }}>
          <slot name="start" />
          <slot name="middle" />
          <slot name="end" />
        </nav>
      </Host>
    )
  }
}
