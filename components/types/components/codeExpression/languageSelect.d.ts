import { FunctionalComponent } from '../../stencil-public-runtime';
import { FileFormatMap } from '../editor/languageUtils';
interface Props {
  activeLanguage: string;
  disabled: boolean;
  languageCapabilities: FileFormatMap;
  executableLanguages: FileFormatMap;
  onSetLanguage?: (language: string) => void;
  setRef?: (el?: HTMLSelectElement) => void;
}
export declare const LanguagePickerInline: (props: Props) => FunctionalComponent;
export {};
