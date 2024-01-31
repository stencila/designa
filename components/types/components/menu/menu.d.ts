import { Placement } from '@popperjs/core';
export declare class Menu {
  private el;
  private menuEl;
  private popperRef;
  /**
   * Determines whether the Menu is shown or not
   */
  isOpen: boolean;
  /**
   * Close the menu when losing focus
   */
  autoClose: boolean;
  /**
   * Open the menu on hover or when gaining focus
   */
  autoOpen: boolean;
  /**
   * The position relative to the toggle button where the menu should appear.
   */
  menuPosition: Placement;
  initMenu: () => void;
  private computeMenuLocation;
  private toggleMenu;
  private openMenu;
  private closeMenu;
  private autoCloseTimeoutRef;
  private closeOnBlur;
  private clearTimeout;
  private menuId;
  componentWillLoad(): void;
  disconnectedCallback(): void;
  render(): any;
}
