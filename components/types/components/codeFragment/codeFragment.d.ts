import { EventEmitter } from '../../stencil-public-runtime';
import { CodeFragment } from '@stencila/schema';
import { CodeComponent, DiscoverExecutableLanguagesEvent } from '../code/codeTypes';
import { FileFormat, FileFormatMap } from '../editor/languageUtils';
/**
 * @slot text - The contents of the code fragment
 */
export declare class CodeFragmentComponent implements CodeComponent<CodeFragment> {
  private el;
  /**
   * The context of the component. In `read` mode the code content and its
   * language cannot be edited.
   */
  mode: 'read' | 'edit';
  /**
   * Programming language of the CodeFragment
   */
  programmingLanguage: string | undefined;
  /**
   * List of all supported programming languages
   */
  languageCapabilities: FileFormatMap;
  /**
   * List of programming languages that can be executed in the current context
   */
  executableLanguages: FileFormatMap;
  onDiscoverExecutableLanguages({ detail, }: DiscoverExecutableLanguagesEvent): void;
  /**
   * Event emitted when the language of the editor is changed.
   */
  languageChange: EventEmitter<FileFormat>;
  /**
   * Function to call when the user selects a new language from the language picker dropdown.
   */
  private onSelectLanguage;
  /**
   * Event emitted when the source code of the `CodeExpression` node is changed.
   */
  contentChange: EventEmitter<string>;
  private contentChangeHandler;
  private selectTextSlot;
  /**
   * Returns the text contents from the inline code editor
   */
  getTextContents(): Promise<string>;
  render(): any;
}
