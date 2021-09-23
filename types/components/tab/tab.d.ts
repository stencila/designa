export declare class Tab {
  static readonly elementName = "stencila-tab";
  /**
   * The link the tab should navigate to
   */
  href: string;
  /**
   * The displayed text of the Tab
   */
  label: string;
  /**
   * Indicates whether the current tab is "selected"
   */
  isSelected: boolean;
  render(): any;
}
