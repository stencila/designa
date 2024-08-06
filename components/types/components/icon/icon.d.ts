import { Colors } from '../../types';
import { IconNames } from './iconNames';
export declare class Icon {
  /**
   * Name of the icon to be rendered.
   * Corresponds to icon names from the [Remix Icon set](http://remixicon.com)
   */
  readonly icon: IconNames;
  /**
   * Style with which to render the icon
   */
  readonly iconStyle: 'fill' | 'line';
  /**
   * The fill color of the icon
   */
  readonly color?: Colors | string;
  /**
   * The URL of the SVG file containing icon symbols
   */
  readonly iconUrl: string;
  private fetchIcons;
  componentWillLoad(): void;
  render(): any;
}
