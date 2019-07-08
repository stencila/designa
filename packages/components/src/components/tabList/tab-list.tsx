import { Component, h, Prop, State } from '@stencil/core'
import { ord } from 'fp-ts'

const tabs = ['Tab 1', 'Tab 2', 'Tab 3']

@Component({
  tag: 'stencila-tab-list',
  styleUrls: {
    default: 'tab-list.css',
    material: 'tab-list.material.css'
  },
  shadow: true
})
export class TabList {
  /**
   * The displayed text of the Tab
   */
  @Prop() label: string

  /**
   * The link the tab should navigate to
   */
  @Prop() href: string = '#'

  @State() activeTabIndex: number = 0

  private selectTab(index: number) {
    this.activeTabIndex = index
  }

  private onTabClick = (index: number) => (e: MouseEvent) => {
    e.preventDefault()
    this.selectTab(index)
  }

  private onKeyboardNavigateTabs = (e: KeyboardEvent) => {
    let dir = e.key === 'ArrowRight' ? 1 : e.key === 'ArrowLeft' ? -1 : 0
    const constrain = ord.clamp(ord.ordNumber)(0, tabs.length - 1)
    this.selectTab(constrain(this.activeTabIndex + dir))
  }

  render() {
    return (
      <ul role="tablist" onKeyDown={this.onKeyboardNavigateTabs}>
        {tabs.map((tab, index) => (
          <stencila-tab
            label={tab}
            tabIndex={index === this.activeTabIndex ? 0 : -1}
            isSelected={index === this.activeTabIndex}
            onClick={this.onTabClick(index)}
          />
        ))}
      </ul>
    )
  }
}
