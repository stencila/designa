import { CodeChunk, CodeExpression } from '@stencila/schema';
export declare type CodeVisibilityEvent = CustomEvent<{
  isVisible: boolean;
}>;
export declare abstract class CodeComponent<C extends CodeChunk | CodeExpression> {
  abstract onSetAllCodeVisibility(event: CodeVisibilityEvent): void;
  executeHandler?: (code: C) => Promise<C>;
  abstract execute: () => Promise<C>;
  abstract getContents(): Promise<C>;
}
