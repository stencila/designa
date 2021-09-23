import { Colors } from '../../types';
import { IconNames } from '../icon/iconNames';
export declare class Button {
  static readonly elementName = "stencila-button";
  static slots: {
    default: undefined;
  };
  /**
   * If an `href` property is provided, button will be rendered using an `<a>` anchor tag.
   */
  href?: string;
  /**
   * Relationship of the link
   * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a#rel
   * Only applied if `href` prop is also set.
   */
  rel?: string;
  /**
   * Determines where to display the linked URL, options correspond to HTML Anchor `target` attribute.
   * Only applies if the button is an anchor link.
   * https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a#attr-target
   */
  target?: HTMLAnchorElement['target'];
  /**
   * Screen-reader accessible label to read out.
   */
  ariaLabel: string;
  /**
   * The color of the button
   */
  color: Colors;
  /**
   * The overall size of the Button.
   */
  size: 'xsmall' | 'small' | 'default' | 'large';
  /**
   * Renders the button without initial background color or border.
   */
  minimal: boolean;
  /**
   * Renders the button using a secondory, and usually less visually prominent, Button CSS stylesheet.
   */
  isSecondary: boolean;
  /**
   * The type of button to render, options correspond to HTML Button `type` attribute.
   * https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button
   * Only applies if the button is not an anchor link.
   */
  buttonType: 'button' | 'submit' | 'reset';
  /**
   * If true, prevents the user from interacting with the button.
   * Note: Not all browser prevent the click handler from firing on disabled buttons.
   */
  disabled: boolean;
  /**
   * Name of the icon to render inside the button
   * @see Icon component for possible values
   */
  icon?: HTMLElement | IconNames;
  /**
   * If true, removes extra padding from Icon inside the button
   * TODO: See if we can automatically infer removal of padding through CSS
   */
  iconOnly: boolean;
  /**
   * If true, shows a loading spinner icon and sets a `disabled` attribute on the button.
   * Note: Not all browser prevent the click handler from firing on disabled buttons.
   */
  isLoading: boolean;
  /**
   * If true, the button will take up the full width of the parent container
   */
  fill: boolean;
  /**
   * An optional help text to display for button focus and hover states.
   */
  tooltip?: string;
  /**
   * An optional data attribute set on the button element for easier targeting using JavaScript.
   */
  dataEl?: string;
  private generateButton;
  render(): any;
}
