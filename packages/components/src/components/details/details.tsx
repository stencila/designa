import { Component, h, Host, Prop, State } from '@stencil/core'

@Component({
  tag: 'stencila-details',
  styleUrls: {
    default: 'details.css',
    material: 'details.css',
  },
  scoped: true,
})
export class Details {
  /**
   * Determines whether the contents are visible or not.
   */
  @Prop() open?: boolean = undefined

  private clickHandler = (e: MouseEvent) => {
    e.preventDefault()
    // If we have an `open` prop, treat this is a controlled component
    if (this.open !== undefined) return

    this.isOpen = !this.isOpen
  }

  @State() isOpen: boolean = this.open ?? false

  public render() {
    const open = this.open ?? this.isOpen

    return (
      <Host isOpen={open} onClick={this.clickHandler}>
        <slot name="summary" />

        <div class={{ contents: true, hidden: !open }}>
          <slot />
        </div>

        <stencila-icon
          icon="arrow-down-s"
          class="disclosure-toggle"
        ></stencila-icon>
      </Host>
    )
  }
}
