import { CodeChunk, CodeExpression } from '@stencila/schema'

export interface CodeVisibilityEvent extends CustomEvent {
  detail: {
    isVisible: boolean
    /** @deprecated Use `isVisible` instead */
    isCodeCollapsed: boolean
  }
}

// Defines a set of methods and properties that all `Code` node based comopnents
// must implement to ensure a unified public API and interactions
export abstract class CodeComponent<C extends CodeChunk | CodeExpression> {
  abstract onSetAllCodeVisibility(event: CodeVisibilityEvent): void

  executeHandler?: (code: C) => Promise<C>
  abstract execute: () => Promise<C>

  abstract getContents(): Promise<C>
}
