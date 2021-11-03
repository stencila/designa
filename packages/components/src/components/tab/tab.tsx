import { Component, h, Prop } from '@stencil/core'

@Component({
  tag: 'stencila-tab',
  styleUrls: {
    default: 'tab.css',
    material: 'tab.material.css',
  },
  scoped: true,
})
export class Tab {
  /**
   * The link the tab should navigate to
   */
  @Prop() public href = '#'

  /**
   * The displayed text of the Tab
   */
  @Prop() public label: string

  /**
   * Indicates whether the current tab is "selected"
   */
  @Prop({ attribute: 'selected' }) public isSelected = false

  public render() {
    return (
      <li role="presentation">
        <a
          aria-selected={this.isSelected.toString()}
          href={this.href}
          role="tab"
        >
          {this.label}
        </a>
      </li>
    )
  }
}
