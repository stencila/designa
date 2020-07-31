import { Component, h, Host, Prop } from '@stencil/core'
import { Colors } from '../../types'

@Component({
  tag: 'stencila-toolbar',
  styleUrls: {
    default: 'toolbar.css',
    material: 'toolbar.material.css',
  },
  scoped: true,
})
export class Toolbar {
  /**
   * When `fixed` the Navbar will remain pinned to the top of the screen.
   * Note that if the Navbar component is not followed by a sibling element,
   * you will have to set `margin-top: 3rem` on the following element yourself.
   */
  @Prop() public position: 'static' | 'fixed' = 'static'

  /**
   * The background fill color of the Navbar
   */
  @Prop() public color: Colors | string = 'primary'

  public render() {
    return (
      <Host color={this.color} position={this.position}>
        <div>
          <slot name="start" />
          <slot name="middle" />
          <slot name="end" />
        </div>
      </Host>
    )
  }
}
