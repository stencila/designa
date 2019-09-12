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
  @Prop() public href: string = '#'

  /**
   * The displayed text of the Tab
   */
  @Prop() public label: string

  /**
   * Indicates whether the current tab is "selected"
   */
  @Prop({ attribute: 'selected' }) public isSelected: boolean = false

  public render() {
    return (
      <li role="presentation">
        <a
          aria-selected={this.isSelected.toString()}
          href={this.label}
          role="tab"
        >
          {this.label}
        </a>
      </li>
    )
  }
}
