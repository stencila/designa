import { EditorView, KeyBinding as KeymapI } from '@codemirror/view';
import { EventEmitter } from '../../stencil-public-runtime';
import { CodeError } from '@stencila/schema';
import { EditorUpdateHandlerCb } from './customizations/onUpdateHandlerExtension';
import { FileFormat, FileFormatMap } from './languageUtils';
export interface EditorContents {
  text: string;
  language: string;
}
export declare type Keymap = KeymapI;
declare type EditorStateJSON = Record<string, unknown>;
export declare class Editor {
  private el;
  private editorRef;
  private languagePickerRef;
  private isReady;
  /**
   * Text contents of the editor
   */
  contents?: string;
  contentsChanged(nextValue: string, prevValue: string): void;
  /**
   * List of all supported programming languages
   */
  languageCapabilities: FileFormatMap;
  /**
   * Disallow editing of the editor contents when set to `true`
   */
  readOnly: boolean;
  /**
   * Update the CodeMirror internal state when the `readOnly` prop changes
   */
  readOnlyChanged(nextReadOnly: boolean, prevReadOnly: boolean): void;
  private readOnlyConf;
  /**
   * Programming language of the Editor
   */
  activeLanguage: string;
  private dispatchEffect;
  /**
   * Event emitted when the language of the editor is changed.
   */
  setLanguage: EventEmitter<FileFormat>;
  private getLang;
  private languageConf;
  /**
   * Resolve and set a new active CodeMirror syntax
   */
  private setEditorSyntax;
  private setLanguagePickerRef;
  /**
   * Function to call when the user selects a new language from the language picker dropdown.
   */
  private onSelectLanguage;
  /**
   * Update the internal state, for both the component and CodeMirror, when the
   * `activeLanguage` prop changes
   */
  activeLanguageChanged(nextLanguage: string, prevLanguage: string): void;
  /**
   * Function to be evaluated over the contents of the editor.
   */
  executeHandler?: (contents: EditorContents) => Promise<unknown>;
  /**
   * Wrapper around the `executeHandler` function, needed to run using CodeMirror keyboard shortcuts.
   */
  private execute;
  /**
   * Callback function to invoke whenever the editor contents are updated.
   */
  contentChangeHandler?: EditorUpdateHandlerCb;
  /**
   * Autofocus the editor on page load
   */
  autofocus: boolean;
  private lineNumbersConf;
  /**
   * Determines the visibility of line numbers
   */
  lineNumbers: boolean;
  onSetLineNumbers(nextValue: boolean, prevValue: boolean): void;
  private lineWrappingConf;
  /**
   * Control line wrapping of text inside the editor
   */
  lineWrapping: boolean;
  onSetLineWrapping(nextValue: boolean, prevValue: boolean): void;
  private foldGutterConf;
  /**
   * Enables ability to fold sections of code if the syntax package supports it
   */
  foldGutter: boolean;
  onSetfoldGutter(nextValue: boolean, prevValue: boolean): void;
  /**
   * Custom keyboard shortcuts to pass along to CodeMirror
   * @see https://codemirror.net/6/docs/ref/#keymap
   */
  keymap: Keymap[];
  /**
   * List of errors to display at the bottom of the code editor section.
   * If the error is a `string`, then it will be rendered as a warning.
   */
  errors?: CodeError[] | string[];
  errorsChanged(nextErrors: (CodeError | string)[]): void;
  private getCodeMirrorConfig;
  private initCodeMirror;
  private attachEditorToDom;
  /**
   * Retrieve the Editor contents and active language.
   */
  getContents(): Promise<EditorContents>;
  private setContentsHandler;
  /**
   * Replace the contents of the Editor with a supplied string.
   */
  setContents(contents: string): Promise<string>;
  /**
   * Retrieve a JSON representation of the the internal editor state.
   */
  getState(): Promise<EditorStateJSON>;
  /**
   * Update the internal editor state with the given JSON object.
   */
  setState(state: EditorStateJSON): Promise<void>;
  /**
   * Create a new editor state from a given string.
   * The string will be used as the initial contents of the editor.
   */
  setStateFromString(content: string): Promise<void>;
  /**
   * Retrieve a reference to the internal CodeMirror editor.
   * Allows for maintaining state from applications making use of this component.
   */
  getRef(): Promise<EditorView>;
  /**
   * Prevents keyboard event listeners attached to parent DOM elements from firing.
   * This is to avoid conflicts when user has focused on the editor.
   */
  private stopEventPropagation;
  /**
   * Brings DOM focus to the editor
   */
  private focus;
  protected componentWillLoad(): Promise<void>;
  protected componentDidLoad(): void;
  protected disconnectedCallback(): void;
  render(): any;
}
export {};
