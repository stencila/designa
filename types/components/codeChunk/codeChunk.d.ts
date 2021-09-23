import { EventEmitter } from '../../stencil-public-runtime';
import { CodeChunk } from '@stencila/schema';
import { StencilaNodeUpdateEvent } from '../../globals/events';
import { CodeComponent, CodeVisibilityEvent } from '../code/codeTypes';
import { Keymap } from '../editor/editor';
export declare class CodeChunkComponent implements CodeComponent<CodeChunk> {
  private static readonly slots;
  private el;
  private editorRef;
  /**
   * Autofocus the editor on page load
   */
  autofocus: boolean;
  /**
   * Stencila CodeChunk node to render
   */
  codeChunk?: CodeChunk;
  /**
   * @deprecated
   * Legacy method for defining the programming language of the CodeChunk
   * Use `programmingLanguage` prop, or `programming-language` HTML attribute instead.
   */
  programmingLanguageDataAttribute: string | undefined;
  /**
   * Programming language of the CodeChunk
   */
  programmingLanguage: string | undefined;
  /**
   * Whether the code section is visible or not
   */
  isCodeVisible: boolean;
  /**
   * A callback function to be called with the value of the `CodeChunk` node when executing the `CodeChunk`.
   */
  executeHandler?: (codeChunk: CodeChunk) => Promise<CodeChunk>;
  /**
   * Custom keyboard shortcuts to pass along to CodeMirror
   * @see https://codemirror.net/6/docs/ref/#keymap
   */
  keymap: Keymap[];
  executeCodeState: 'INITIAL' | 'PENDING' | 'RESOLVED';
  isStacked: boolean;
  private isCodeVisibleState;
  /**
   * Trigger a global DOM event to hide or show all `CodeChunk` and `CodeExpress` component source code,
   * leaving only the results visible.
   */
  setAllCodeVisibility: EventEmitter;
  onSetAllCodeVisibility(event: CodeVisibilityEvent): void;
  private toggleCodeVisibility;
  private toggleAllCodeVisibility;
  private onExecuteHandler;
  onUpdateCodeChunk({ detail }: CustomEvent<StencilaNodeUpdateEvent>): void;
  private setEditorLayoutHandler;
  /**
   * Trigger a global DOM event to set the layout of all `CodeChunk` component.
   * Can be set to either show the editor and outputs side by side or stacked vertically.
   */
  setEditorLayout: EventEmitter;
  onSetEditorLayout(event: {
    detail: {
      isStacked: boolean;
    };
  }): void;
  private toggleEditorLayout;
  componentWillLoad(): void;
  componentDidLoad(): void;
  /**
   * Returns the `CodeChunk` node with the updated `text` content from the editor.
   */
  getContents(): Promise<CodeChunk>;
  /**
   * Run the `CodeChunk`
   */
  execute(): Promise<CodeChunk>;
  private executeRef;
  private setAllCodeVisibilityHandler;
  private setCodeVisibility;
  render(): HTMLElement;
}
