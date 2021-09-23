import { Components } from '../../components';
export interface ChildTab extends Components.StencilaTab {
  onClick?: (e: MouseEvent) => unknown;
}
export declare class TabList {
  static readonly elementName = "stencila-tab-list";
  /**
   * A list of string values to use as tab labels
   */
  tabs: ChildTab[];
  private activeTabIndex;
  private selectTab;
  private onKeyboardNavigateTabs;
  render(): HTMLUListElement;
}
