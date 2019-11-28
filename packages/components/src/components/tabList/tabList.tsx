import { Component, h, Prop, State } from '@stencil/core'
import { ord } from 'fp-ts'

export interface ChildTab {
  label: string
  onClick?: (e: MouseEvent) => unknown
}

@Component({
  tag: 'stencila-tab-list',
  styleUrls: {
    default: 'tabList.css',
    material: 'tabList.material.css'
  },
  shadow: true
})
export class TabList {
  public static readonly elementName = 'stencila-tab-list'

  /**
   * A list of string values to use as tab labels
   */
  @Prop() public tabs!: ChildTab[]

  @State() private activeTabIndex: number = 0

  private selectTab(index: number): void {
    this.activeTabIndex = index
  }

  private onKeyboardNavigateTabs = (e: KeyboardEvent): void => {
    const dir = e.key === 'ArrowRight' ? 1 : e.key === 'ArrowLeft' ? -1 : 0
    const constrain = ord.clamp(ord.ordNumber)(0, this.tabs.length - 1)
    this.selectTab(constrain(this.activeTabIndex + dir))
  }

  public render(): HTMLUListElement {
    return (
      <ul role="tablist" onKeyDown={this.onKeyboardNavigateTabs}>
        {this.tabs.map((tab, index): HTMLElement[] => (
          <stencila-tab
            isSelected={index === this.activeTabIndex}
            label={tab.label}
            onClick={e => {
              e.preventDefault()
              this.selectTab(index)
              tab.onClick && tab.onClick(e)
            }}
            tabIndex={index === this.activeTabIndex ? 0 : -1}
          />
        ))}
      </ul>
    )
  }
}
