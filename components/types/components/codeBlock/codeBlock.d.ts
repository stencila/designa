import { EditorView } from '@codemirror/view';
import { CodeBlock } from '@stencila/schema';
import { CodeComponent, DiscoverExecutableLanguagesEvent } from '../code/codeTypes';
import { EditorUpdateHandlerCb } from '../editor/customizations/onUpdateHandlerExtension';
import { Keymap } from '../editor/editor';
import { FileFormatMap } from '../editor/languageUtils';
/**
 * @slot text - The source code of the `CodeChunk`. Corresponds to the `text` field in the Stencila `CodeChunk` Schema.
 * @slot label - `label` element label of the `CodeChunk`. Corresponds to the `label` field in the Stencila `CodeChunk` Schema.
 * @slot caption - `figcaption` content of the `CodeChunk`. Corresponds to the `caption` field in the Stencila `CodeChunk` Schema.
 */
export declare class CodeBlockComponent implements CodeComponent<CodeBlock> {
  private static readonly slots;
  editorRef: HTMLStencilaEditorElement | undefined;
  /**
   * Source code contents of the CodeChunk.
   * Corresponds to the `text` property of the CodeBlock schema.
   */
  text?: string;
  /**
   * Autofocus the editor on page load
   */
  autofocus: boolean;
  /**
   * Control line wrapping of text inside the editor
   */
  lineWrapping: boolean;
  /**
   * Determines the visibility of line numbers
   */
  lineNumbers: boolean;
  /**
   * Enables ability to fold sections of code if the syntax package supports it
   */
  foldGutter: boolean;
  /**
   * Programming language of the CodeChunk
   */
  programmingLanguage: string | undefined;
  /**
   * Disallow editing of the editor contents when set to `true`
   */
  readOnly: boolean;
  /**
   * List of programming languages that can be executed in the current context
   */
  executableLanguages?: FileFormatMap;
  onDiscoverExecutableLanguages({ detail, }: DiscoverExecutableLanguagesEvent): void;
  /**
   * Custom keyboard shortcuts to pass along to CodeMirror
   * @see https://codemirror.net/6/docs/ref/#keymap
   */
  keymap: Keymap[];
  /**
   * Callback function to invoke whenever the editor contents are updated.
   */
  contentChangeHandler?: EditorUpdateHandlerCb;
  /**
   * Listen for the `stencila-language-change` event emitted by the language dropdown
   * provided by the child Editor component, and update the active language if necessary.
   */
  private handleLanguageChange;
  /**
   * Returns the `CodeChunk` node with the updated `text` content from the editor.
   */
  getContents(): Promise<CodeBlock>;
  /**
   * Returns the text contents from the editor
   */
  getTextContents(): Promise<string>;
  /**
   * Retrieve a reference to the internal CodeMirror editor.
   * Allows for maintaining state from applications making use of this component.
   */
  getRef(): Promise<EditorView | undefined>;
  render(): HTMLElement;
}
