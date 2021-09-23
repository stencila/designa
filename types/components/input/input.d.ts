import { IconNames } from '../icon/iconNames';
export declare class Input {
  /**
   * Automatically bring cursor focus to the input field on render.
   */
  autoFocus: boolean;
  /**
   * A hint to the browser for which keyboard to display.
   */
  inputmode?: 'text' | 'tel' | 'url' | 'email' | 'numeric' | 'decimal' | 'search';
  /**
   * Type of input field.
   */
  type: 'text' | 'password' | 'number' | 'search';
  /**
   * The name of the input, submitted as the value's label inside the form data.
   */
  name: string;
  /**
   * Accessible text label for the input field. Defaults to the input's `name` prop.
   */
  label?: string;
  /**
   * Visually conceal the input label.
   * Use sparingly for simple forms only with a descriptive action button.
   */
  hideLabel: boolean;
  /**
   * Render the label and input field as inline elements.
   */
  inline: boolean;
  /**
   * Short hint demonstrating expected input value. Shown when the input is empty.
   */
  placeholder?: string;
  /**
   * Icon to show at the start of the input field.
   */
  iconStart?: IconNames;
  /**
   * When `true` value must be provided before submitting.
   */
  required: boolean;
  /**
   * Text value of the input.
   */
  value?: number | string;
  render(): any;
}
