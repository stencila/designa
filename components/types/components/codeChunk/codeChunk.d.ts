import { EditorView } from '@codemirror/view';
import { EventEmitter } from '../../stencil-public-runtime';
import { CodeChunk } from '@stencila/schema';
import { CodeComponent, CodeExecuteCancelEvent, CodeExecuteEvent, CodeExecuteOrdering, CodeVisibilityEvent, DiscoverExecutableLanguagesEvent, ExecuteRequired, ExecuteStatus } from '../code/codeTypes';
import { EditorUpdateHandlerCb } from '../editor/customizations/onUpdateHandlerExtension';
import { Keymap } from '../editor/editor';
import { FileFormatMap } from '../editor/languageUtils';
/**
 * @slot text - The source code of the `CodeChunk`. Corresponds to the `text` field in the Stencila `CodeChunk` Schema.
 * @slot outputs - The resulting output when evaluating the CodeChunk. Corresponds to the `outputs` field in the Stencila `CodeChunk` Schema.
 * @slot errors - List of any errors encountered when compiling (e.g. syntax errors) or executing the CodeChunk.
 * @slot label - `label` element label of the `CodeChunk`. Corresponds to the `label` field in the Stencila `CodeChunk` Schema.
 * @slot caption - `figcaption` content of the `CodeChunk`. Corresponds to the `caption` field in the Stencila `CodeChunk` Schema.
 */
export declare class CodeChunkComponent implements CodeComponent<CodeChunk> {
  private static readonly slots;
  private el;
  editorRef: HTMLStencilaEditorElement | undefined;
  /**
   * Source code contents of the CodeChunk.
   * Corresponds to the `text` property of the CodeChunk schema.
   */
  text?: string;
  /**
   * Autofocus the editor on page load
   */
  autofocus: boolean;
  /**
   * Programming language of the CodeChunk
   */
  programmingLanguage: string | undefined;
  /**
   * List of all supported programming languages
   */
  languageCapabilities: FileFormatMap;
  /**
   * List of programming languages that can be executed in the current context
   */
  executableLanguages?: FileFormatMap;
  onDiscoverExecutableLanguages({ detail, }: DiscoverExecutableLanguagesEvent): void;
  isExecutable: boolean;
  /**
   * Whether the code section is visible or not
   */
  isCodeVisible: boolean;
  /**
   * A callback function to be called with the value of the `CodeChunk` node when executing the `CodeChunk`.
   */
  executeHandler?: (codeChunk: CodeChunk) => Promise<CodeChunk>;
  shiftIsPressed: boolean;
  /**
   * Emitted to indicate that code node should be executed
   *
   */
  codeExecuteEvent: EventEmitter<CodeExecuteEvent['detail']>;
  /**
   * Emitted to indicate that the execution of the code node should be cancelled/interrupted.
   */
  codeExecuteCancelEvent: EventEmitter<CodeExecuteCancelEvent['detail']>;
  /**
   * Callback function to invoke whenever the editor contents are updated.
   */
  contentChangeHandler?: EditorUpdateHandlerCb;
  /**
   * The execution status of the code node
   */
  executeStatus: ExecuteStatus;
  /**
   * A digest representing the state of a [`Resource`] and its dependencies at
   * compile time.
   */
  compileDigest: string;
  /**
   * Status of upstream dependencies, and whether the node needs to be
   * re-executed
   */
  executeRequired: ExecuteRequired;
  /**
   * A digest representing the state of a [`Resource`] and its dependencies from
   * the latest execution.
   */
  executeDigest: string;
  /**
   * Time when the latest code execution ended
   */
  executeEnded: string;
  /**
   * Duration of the latest code execition
   */
  executeDuration: string;
  /**
   * Custom keyboard shortcuts to pass along to CodeMirror
   * @see https://codemirror.net/6/docs/ref/#keymap
   */
  keymap: Keymap[];
  isStacked: boolean;
  /**
   * A global event emitter to show/hide code in all `CodeChunk` or `CodeExpression` components
   */
  allCodeVisibilityChange: EventEmitter;
  /**
   * A global event listener to show/hide code in this component
   */
  onAllCodeVisibilityChange(event: CodeVisibilityEvent): void;
  /**
   * Toggle code visibility, either locally, or globally
   */
  private toggleCodeVisibility;
  /**
   * Determine if the CodeChunk can be executed or not.
   * For a CodeChunk to be considered executable it must have a `executeHandler` function attached
   * and the current `programmingLanguage` must be in the list of `executableLanguages`.
   */
  private checkIfExecutable;
  /**
   * Listen for the `stencila-language-change` event emitted by the language dropdown
   * provided by the child Editor component, and update the active language if necessary.
   */
  private handleLanguageChange;
  private editorLayoutChangeHandler;
  /**
   * Trigger a global DOM event to set the layout of all `CodeChunk` component.
   * Can be set to either show the editor and outputs side by side or stacked vertically.
   */
  editorLayoutChange: EventEmitter;
  onSetEditorLayout(event: {
    detail: {
      isStacked: boolean;
    };
  }): void;
  private toggleEditorLayout;
  /**
   * Returns the `CodeChunk` node with the updated `text` content from the editor.
   */
  getContents(): Promise<CodeChunk>;
  /**
   * Returns the text contents from the editor
   */
  getTextContents(): Promise<string>;
  private onExecuteHandler;
  /**
   * Run the `CodeChunk`
   */
  execute(ordering?: CodeExecuteOrdering): Promise<CodeChunk | Error>;
  /**
   * Retrieve a reference to the internal CodeMirror editor.
   * Allows for maintaining state from applications making use of this component.
   */
  getRef(): Promise<EditorView | undefined>;
  private onKeyPress;
  private addKeyListeners;
  private removeKeyListeners;
  componentWillLoad(): void;
  render(): HTMLElement;
}
