import { Component, h, Prop, State } from '@stencil/core'
import { ord, number } from 'fp-ts'
import { Components } from '../../components'

export interface ChildTab extends Components.StencilaTab {
  onClick?: (e: MouseEvent) => unknown
}

@Component({
  tag: 'stencila-tab-list',
  styleUrls: {
    default: 'tabList.css',
    material: 'tabList.material.css',
  },
  scoped: true,
})
export class TabList {
  /**
   * A list of string values to use as tab labels
   */
  @Prop() public tabs!: ChildTab[]

  @State() private activeTabIndex = 0

  private selectTab(index: number): void {
    this.activeTabIndex = index
  }

  private onKeyboardNavigateTabs = (e: KeyboardEvent): void => {
    const dir = e.key === 'ArrowRight' ? 1 : e.key === 'ArrowLeft' ? -1 : 0
    const constrain = ord.clamp(number.Ord)(0, this.tabs.length - 1)
    this.selectTab(constrain(this.activeTabIndex + dir))
  }

  private clickHandler =
    (tab: ChildTab, index: number) =>
    (e: MouseEvent): void => {
      e.preventDefault()
      this.selectTab(index)
      tab.onClick?.(e)
    }

  public render(): HTMLUListElement {
    return (
      <ul role="tablist" onKeyDown={this.onKeyboardNavigateTabs}>
        {this.tabs.map((tab, index): HTMLElement[] => {
          return (
            <stencila-tab
              isSelected={
                tab.isSelected === true ||
                (tab.isSelected === undefined && index === this.activeTabIndex)
              }
              label={tab.label}
              onClick={this.clickHandler(tab, index)}
              tabIndex={index === this.activeTabIndex ? 0 : -1}
            />
          )
        })}
      </ul>
    )
  }
}
