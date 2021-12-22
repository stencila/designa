import { EventEmitter } from '@stencil/core'
import {
  Code,
  CodeBlock,
  CodeChunk,
  CodeExpression,
  CodeFragment,
} from '@stencila/schema'
import { FileFormat, FileFormatMap } from '../editor/languageUtils'

export type CodeVisibilityEvent = CustomEvent<{
  isVisible: boolean
}>

export type DiscoverExecutableLanguagesEvent = CustomEvent<{
  languages: FileFormatMap
}>

// Defines a set of methods and properties that all `Code` node based components
// must implement to ensure a unified public API and interactions
abstract class SharedCodeInterface<C extends Code> {
  // Props
  executeHandler?: (code: C) => Promise<C>

  // Methods
  abstract getTextContents(): Promise<string>

  // Event Listeners
  // `stencila-discover-executable-languages`
  abstract onDiscoverExecutableLanguages(
    event: DiscoverExecutableLanguagesEvent
  ): void
}

// Ensure that Code components which have both `text` and `output` elements can toggle
// visibility of the `code` part.
abstract class ExecutableCodeComponent<C extends CodeChunk | CodeExpression> {
  // Methods
  abstract execute: () => Promise<C>

  // Event Listeners
  // `stencila-code-visibility-change`
  abstract onAllCodeVisibilityChange(event: CodeVisibilityEvent): void
}

/**
 * Components which wrap `<stencila-editor>` component do not need to implement the
 * following interfaces as they can be delegated to the editor component.
 */
export abstract class EditorCodeMethods {
  // Event Emitters
  abstract contentChange: EventEmitter<string>

  // stencila-language-change
  abstract languageChange: EventEmitter<FileFormat>
}

abstract class EditorBasedCodeComponent<
  C extends CodeChunk | CodeBlock
> extends SharedCodeInterface<C> {
  // Methods
  abstract getContents(): Promise<C>
}

/**
 * Inline code components which do not wrap `stencila-editor` components.
 */
abstract class NonEditorBasedCodeComponent<
  C extends CodeFragment | CodeExpression
> extends SharedCodeInterface<C> {
  // Event Emitters
  // `stencila-content-change`
  abstract contentChange: EventEmitter<string>

  // stencila-language-change
  abstract languageChange: C extends CodeChunk ? void : EventEmitter<FileFormat>
}

export type CodeComponent<C extends Code> = C extends CodeChunk
  ? EditorBasedCodeComponent<C> & ExecutableCodeComponent<C>
  : C extends CodeExpression
  ? NonEditorBasedCodeComponent<C> & ExecutableCodeComponent<C>
  : C extends CodeBlock
  ? EditorBasedCodeComponent<C>
  : C extends CodeFragment
  ? NonEditorBasedCodeComponent<C>
  : never
