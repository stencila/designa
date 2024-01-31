import { Components } from '../../components';
export interface ChildTab extends Components.StencilaTab {
  onClick?: (e: MouseEvent) => unknown;
}
export declare class TabList {
  /**
   * A list of string values to use as tab labels
   */
  tabs: ChildTab[];
  private activeTabIndex;
  private selectTab;
  private onKeyboardNavigateTabs;
  private clickHandler;
  render(): HTMLUListElement;
}
