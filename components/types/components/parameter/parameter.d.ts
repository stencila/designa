import { Event, EventEmitter } from '../../stencil-public-runtime';
import { ValidatorTypes } from './types';
/**
 * Stencila Parameter component
 *
 * @slot name - The name of the parameter
 * @slot value - The current value of the parameter
 */
export declare class Parameter {
  el: HTMLStencilaParameterElement;
  private labelSlotRef;
  private valueSlotRef;
  /**
   * The context of the component. In `read` mode the parameter validator and its
   * properties cannot be edited.
   */
  mode: 'read' | 'edit';
  /**
   * The Stencila `Validator` Schema with which to configure and validate the parameter.
   */
  validator?: ValidatorTypes;
  paramName: string;
  /**
   * Event emitted when either the name of value of the parameter changes.
   * You can use the `type` property of the event detail to determine the type
   * of change, it will be either `value` or `name`.
   */
  parameterChange: EventEmitter;
  private onParamChange;
  private onParamNameChange;
  /**
   * Event emitted when either the type or property of the parameter validator
   * changes.
   * You can use the `type` property of the event detail to determine the type
   * of change, it will be either `validator` or `property`.
   */
  validatorChange: EventEmitter;
  onValidatorChange: (e: Event) => void;
  private validateValue;
  private getValidatorFromMetaEl;
  componentWillLoad(): void;
  disconnectedCallback(): void;
  render(): any;
}
