import { Colors } from '../../types';
export declare class Toolbar {
  /**
   * When `fixed` the Navbar will remain pinned to the top of the screen.
   * Note that if the Navbar component is not followed by a sibling element,
   * you will have to set `margin-top: 3rem` on the following element yourself.
   */
  position: 'static' | 'fixed';
  /**
   * The background fill color of the Navbar
   */
  color: Colors | string;
  render(): any;
}
