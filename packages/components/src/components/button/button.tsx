import { Component, h, Prop } from '@stencil/core'

@Component({
  tag: 'stencila-button',
  styleUrls: {
    default: 'button.css',
    material: 'button.material.css'
  },
  shadow: true
})
export class Tab {
  public static slots = {
    default: undefined,
    icon: 'icon'
  }

  /**
   * The link the button should navigate to
   */
  @Prop() public href?: string

  /**
   * The displayed text of the Tab
   */
  @Prop() public label: string

  /**
   * The displayed text of the Tab
   */
  @Prop() public isSecondary: boolean = false

  public render() {
    const TagType = this.href != null ? 'a' : 'button' // eslint-disable-line @typescript-eslint/no-unused-vars

    return (
      <TagType href={this.href} class={{ secondary: this.isSecondary }}>
        <slot name={Tab.slots.icon} />
        <slot name={Tab.slots.default} />
      </TagType>
    )
  }
}
