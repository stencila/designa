import { IconNames } from '../icon/iconNames';
export declare class MenuItem {
  el: HTMLStencilaMenuItemElement | undefined;
  /**
   * Name of the icon to show before the label
   * @see Icon component for possible values
   */
  icon: IconNames | undefined;
  /**
   * The overall size of the component.
   */
  size: 'xsmall' | 'small' | 'default' | 'large';
  /**
   * The overall size of the component.
   */
  role: 'menuitem' | 'menuitemradio' | 'menuitemcheckbox';
  /**
   * Determines whether the menu item is enabled/clickable or not
   */
  disabled: boolean;
  /**
   * Renders the menu item as a section divider.
   * It does not have any click or hover handlers
   */
  divider: boolean;
  render(): any;
}
