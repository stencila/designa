import { Component, h, Prop } from '@stencil/core'

@Component({
  tag: 'stencila-tab',
  styleUrls: {
    default: 'tab.css',
    material: 'tab.material.css'
  },
  shadow: true
})
export class Tab {
  /**
   * The link the tab should navigate to
   */
  @Prop() href: string = '#'

  /**
   * The displayed text of the Tab
   */
  @Prop() label: string

  /**
   * Indicates whether the current tab is "selected"
   */
  @Prop({ attribute: 'selected' }) isSelected: boolean = false

  render() {
    return (
      <li role="presentation" aria-selected={this.isSelected.toString()}>
        <a role="tab" tabindex="-1" href={this.label}>
          {this.label}
        </a>
      </li>
    )
  }
}
