import { Component, h, Prop, State, Host } from '@stencil/core'

@Component({
  tag: 'stencila-details',
  styleUrl: 'details.css',
  shadow: true
})
export class Details {
  public static readonly elementName = 'stencila-details'

  /*
   * Determines whether the contents are visible or not
   */
  @Prop() open: boolean = false

  @State() isOpen: boolean = this.open ? this.open : false

  private clickHandler = (e: MouseEvent) => {
    e.preventDefault()
    this.isOpen = !this.isOpen
  }

  public render() {
    return (
      <Host isOpen={this.isOpen ? 'true' : 'false'} onClick={this.clickHandler}>
        <slot name="summary" />

        <div class={{ contents: true, hidden: !this.isOpen }}>
          <slot />
        </div>

        <stencila-icon
          icon="chevron-down"
          class="disclosure-toggle"
        ></stencila-icon>
      </Host>
    )
  }
}
