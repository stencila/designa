import { EventEmitter } from '../../stencil-public-runtime';
import { Code, CodeBlock, CodeChunk, CodeExpression, CodeFragment } from '@stencila/schema';
import { FileFormat, FileFormatMap } from '../editor/languageUtils';
export declare type CodeVisibilityEvent = CustomEvent<{
  isVisible: boolean;
}>;
export declare type CodeExecuteOrdering = 'Single' | 'Appearance' | 'Topological';
export declare type CodeExecuteCancelOrdering = 'Single' | 'Appearance' | 'Topological';
export declare type CodeExecuteEvent = CustomEvent<{
  nodeId: string | null;
  ordering: CodeExecuteOrdering;
}>;
export declare type CodeExecuteCancelEvent = CustomEvent<{
  nodeId: string | null;
  scope: 'Single' | 'All';
}>;
export declare type ExecuteStatus = undefined | 'Scheduled' | 'ScheduledPreviouslyFailed' | 'Running' | 'RunningPreviouslyFailed' | 'Succeeded' | 'Failed' | 'Cancelled';
export declare type ExecuteRequired = undefined | 'NeverExecuted' | 'SemanticsChanged' | 'DependenciesChanged' | 'DependenciesFailed' | 'Failed' | 'No';
export declare type DiscoverExecutableLanguagesEvent = CustomEvent<{
  languages: FileFormatMap;
}>;
declare abstract class SharedCodeInterface<C extends Code> {
  executeHandler?: (code: C) => Promise<C>;
  abstract getTextContents(): Promise<string>;
  abstract onDiscoverExecutableLanguages(event: DiscoverExecutableLanguagesEvent): void;
}
declare abstract class ExecutableCodeComponent<C extends CodeChunk | CodeExpression> {
  abstract execute: (ordering?: CodeExecuteOrdering) => Promise<C | Error>;
  abstract codeExecuteEvent: EventEmitter<CodeExecuteEvent['detail']>;
  abstract codeExecuteCancelEvent: EventEmitter<CodeExecuteCancelEvent['detail']>;
  abstract onAllCodeVisibilityChange(event: CodeVisibilityEvent): void;
  abstract executeStatus: ExecuteStatus;
  abstract executeRequired: ExecuteRequired;
  abstract compileDigest: string;
  abstract executeDigest: string;
  abstract executeEnded: string;
  abstract executeDuration: string;
}
/**
 * Components which wrap `<stencila-editor>` component do not need to implement the
 * following interfaces as they can be delegated to the editor component.
 */
export declare abstract class EditorCodeMethods {
  abstract contentChange: EventEmitter<string>;
  abstract languageChange: EventEmitter<FileFormat>;
}
declare abstract class EditorBasedCodeComponent<C extends CodeChunk | CodeBlock> extends SharedCodeInterface<C> {
  abstract getContents(): Promise<C>;
}
/**
 * Inline code components which do not wrap `stencila-editor` components.
 */
declare abstract class NonEditorBasedCodeComponent<C extends CodeFragment | CodeExpression> extends SharedCodeInterface<C> {
  abstract contentChange: EventEmitter<string>;
  abstract languageChange: C extends CodeChunk ? void : EventEmitter<FileFormat>;
}
export declare type CodeComponent<C extends Code> = C extends CodeChunk ? EditorBasedCodeComponent<C> & ExecutableCodeComponent<C> : C extends CodeExpression ? NonEditorBasedCodeComponent<C> & ExecutableCodeComponent<C> : C extends CodeBlock ? EditorBasedCodeComponent<C> : C extends CodeFragment ? NonEditorBasedCodeComponent<C> : never;
export {};
