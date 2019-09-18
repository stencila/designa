import { Component, h, Prop } from '@stencil/core'

@Component({
  tag: 'stencila-action-menu',
  styleUrls: {
    default: 'actionMenu.css'
  },
  shadow: true
})
export class ActionMenu {
  /**
   * List of buttons to include in Action Menu
   */
  @Prop()
  public actions: HTMLButtonElement[]

  public render() {
    return <nav>{this.actions}</nav>
  }
}
