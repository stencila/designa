import { EventEmitter } from '../../stencil-public-runtime';
import { CodeExpression } from '@stencila/schema';
import { CodeComponent, CodeExecuteCancelEvent, CodeExecuteEvent, CodeExecuteOrdering, CodeVisibilityEvent, DiscoverExecutableLanguagesEvent, ExecuteRequired, ExecuteStatus } from '../code/codeTypes';
import { FileFormat, FileFormatMap } from '../editor/languageUtils';
/**
 * @slot text - The source code of the `CodeChunk`. Corresponds to the `text`
 *              field in the Stencila `CodeExpression` Schema.
 * @slot output - A single output element. Corresponds to the `output` field in
 *                the Stencila `CodeExpression` Schema.
 */
export declare class CodeExpressionComponent implements CodeComponent<CodeExpression> {
  private el;
  private hoverTimeOut;
  private hoverStartedAt;
  /**
   * A callback function to be called with the value of the `CodeExpression`
   * node when executing the `CodeExpression`.
   */
  executeHandler?: (codeExpression: CodeExpression) => Promise<CodeExpression>;
  /**
   * Disallow editing of the editor contents when set to `true`
   */
  readOnly: boolean;
  /**
   * Programming language of the CodeExpression
   */
  programmingLanguage: string;
  /**
   * List of all supported programming languages
   */
  languageCapabilities: FileFormatMap;
  /**
   * List of programming languages that can be executed in the current context
   */
  executableLanguages: FileFormatMap;
  onDiscoverExecutableLanguages({ detail, }: DiscoverExecutableLanguagesEvent): void;
  isExecutable: boolean;
  shiftIsPressed: boolean;
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
   * Event emitted when the language of the editor is changed.
   */
  languageChange: EventEmitter<FileFormat>;
  /**
   * Function to call when the user selects a new language from the language
   * picker dropdown.
   */
  private onSelectLanguage;
  /**
   * Stencila CodeExpression node to render
   */
  codeExpression?: CodeExpression;
  hover: boolean;
  /**
   * Whether the code section starts out visible or not
   */
  isCodeVisible: boolean;
  /**
   * A global event emitter to show/hide code in all `CodeChunk` or `CodeExpression` components
   */
  private allCodeVisibilityChange;
  /**
   * A global event listener to show/hide code in this component
   */
  onAllCodeVisibilityChange(event: CodeVisibilityEvent): void;
  /**
   * Toggle code visibility, either locally, or globally
   */
  private toggleCodeVisibility;
  componentWillLoad(): void;
  /**
   * Returns the text contents from the inline code editor
   */
  getTextContents(): Promise<string>;
  /**
   * Returns the `CodeExpression` node with the updated `text` contents from the
   * editor.
   */
  getContents(): Promise<CodeExpression>;
  private selectTextSlot;
  /**
   * Event emitted when the source code of the `CodeExpression` node is changed.
   */
  contentChange: EventEmitter<string>;
  private contentChangeHandler;
  private handleKeyDown;
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
   * Determine if the CodeChunk can be executed or not.
   * For a CodeChunk to be considered executable it must have a `executeHandler` function attached
   * and the current `programmingLanguage` must be in the list of `executableLanguages`.
   */
  private checkIfExecutable;
  private onExecuteHandler;
  /**
   * Run the `CodeExpression`
   */
  execute(ordering?: CodeExecuteOrdering): Promise<CodeExpression | Error>;
  private executeRef;
  private onMouseOutHandler;
  private addHoverState;
  private removeHoverState;
  private onKeyPress;
  private addKeyListeners;
  private removeKeyListeners;
  private generateContent;
  render(): HTMLElement;
}
