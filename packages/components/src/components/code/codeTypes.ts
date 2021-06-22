import { CodeChunk, CodeExpression } from '@stencila/schema'

export type CodeVisibilityEvent = CustomEvent<{
  isVisible: boolean
}>

// Defines a set of methods and properties that all `Code` node based components
// must implement to ensure a unified public API and interactions
export abstract class CodeComponent<C extends CodeChunk | CodeExpression> {
  abstract onSetAllCodeVisibility(event: CodeVisibilityEvent): void

  executeHandler?: (code: C) => Promise<C>
  abstract execute: () => Promise<C>

  abstract getContents(): Promise<C>
}
