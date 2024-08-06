import { FunctionalComponent } from '../../../stencil-public-runtime';
import { FileFormatMap } from '../languageUtils';
interface Props {
  activeLanguage: string;
  disabled: boolean;
  languageCapabilities: FileFormatMap;
  executableLanguages: FileFormatMap;
  onSetLanguage: (e: Event) => void;
  setRef: (el?: HTMLSelectElement) => void;
}
export declare const LanguagePicker: (props: Props) => FunctionalComponent;
export {};
