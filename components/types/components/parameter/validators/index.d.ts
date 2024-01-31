import { FunctionalComponent } from '../../../stencil-public-runtime';
import { ValidatorTypes } from '../types';
interface Props {
  onValidatorChange: (e: Event) => void;
  type?: ValidatorTypes;
  valueElRef?: Element;
}
export declare const Validator: (props: Props) => FunctionalComponent;
export {};
