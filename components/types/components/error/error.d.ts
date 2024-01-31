import { CodeError } from '@stencila/schema';
export declare type Level = 'info' | 'warn' | 'error';
export declare class CodeErrorComponent {
  /**
   * The `CodeError` node
   */
  error?: CodeError;
  /**
   * The severity of the error message
   */
  level?: Level;
  /**
   * Update the level, if not defined, based on the content of the `type` slot
   *
   * In the future, `CodeError` is likely to be replace with `CodeNotification` (or similar)
   * and `level` will be a property (so it does not need to be derived here)
   */
  private updateLevel;
  /**
   * Flag for whether there is a stack trace
   */
  private hasStackTrace;
  /**
   * Determine if the `stacktrace` slot has content
   */
  private updateHasStackTrace;
  /**
   * Toggle for visibility of the stack trace
   */
  private stackTraceIsOpen;
  private toggleStackTraceIsOpen;
  private el;
  componentWillLoad(): void;
  render(): any;
}
