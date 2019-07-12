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

  public render(): HTMLLIElement {
    return (
      <li role="presentation" aria-selected={this.isSelected.toString()}>
        <a href={this.label} role="tab">
          {this.label}
        </a>
      </li>
    )
  }
}
