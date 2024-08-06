import { ComponentInterface, EventEmitter } from '../../stencil-public-runtime';
import { CodeExecuteCancelEvent, CodeExecuteEvent, DiscoverExecutableLanguagesEvent, ExecuteStatus } from '../code/codeTypes';
export declare class StencilaDocumentToolbar implements ComponentInterface {
  /**
   * The URL of the document being decorated. Could be a Snapshot from Stencila Hub, a Project URL, or something else.
   */
  sourceUrl: string;
  /**
   * When `fixed` the Navbar will remain pinned to the top of the screen.
   * Note that if the Navbar component is not followed by a sibling element,
   * you will have to set `margin-top: 3rem` on the following element yourself.
   */
  position: 'fixed' | 'static';
  /**
   * The execution status of the document
   */
  executeStatus: ExecuteStatus;
  isExecutable: boolean;
  shiftIsPressed: boolean;
  altIsPressed: boolean;
  private onKeyPress;
  private addKeyListeners;
  private removeKeyListeners;
  onDiscoverExecutableLanguages({ detail, }: DiscoverExecutableLanguagesEvent): void;
  /**
   * Emitted to indicate that code node should be executed
   *
   */
  codeExecuteEvent: EventEmitter<CodeExecuteEvent['detail']>;
  /**
   * Emitted to indicate that language kernels should be restarted
   *
   */
  kernelRestart: EventEmitter<Record<string, never>>;
  /**
   * Emitted to indicate that the execution of the code node should be cancelled/interrupted.
   */
  codeExecuteCancelEvent: EventEmitter<CodeExecuteCancelEvent['detail']>;
  private runDocument;
  render(): HTMLElement;
}
