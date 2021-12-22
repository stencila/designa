import { EditorView } from '@codemirror/view'
import { Component, h, Host, Listen, Method, Prop } from '@stencil/core'
import { CodeBlock, codeBlock } from '@stencila/schema'
import {
  CodeComponent,
  DiscoverExecutableLanguagesEvent,
} from '../code/codeTypes'
import { EditorUpdateHandlerCb } from '../editor/customizations/onUpdateHandlerExtension'
import { Keymap } from '../editor/editor'
import {
  FileFormat,
  FileFormatMap,
  lookupFormat,
} from '../editor/languageUtils'

/**
 * @slot text - The source code of the `CodeChunk`. Corresponds to the `text` field in the Stencila `CodeChunk` Schema.
 * @slot label - `label` element label of the `CodeChunk`. Corresponds to the `label` field in the Stencila `CodeChunk` Schema.
 * @slot caption - `figcaption` content of the `CodeChunk`. Corresponds to the `caption` field in the Stencila `CodeChunk` Schema.
 */
@Component({
  tag: 'stencila-code-block',
  styleUrls: {
    default: 'codeBlock.css',
    material: 'codeBlock.material.css',
  },
  scoped: true,
})
export class CodeBlockComponent implements CodeComponent<CodeBlock> {
  private static readonly slots = {
    text: 'text',
    outputs: 'outputs',
    errors: 'errors',
    caption: 'caption',
    label: 'label',
  }

  public editorRef: HTMLStencilaEditorElement | undefined

  /**
   * Source code contents of the CodeChunk.
   * Corresponds to the `text` property of the CodeBlock schema.
   */
  @Prop()
  public text?: string

  /**
   * Autofocus the editor on page load
   */
  @Prop() public autofocus = false

  /**
   * Control line wrapping of text inside the editor
   */
  @Prop()
  public lineWrapping = false

  /**
   * Determines the visibility of line numbers
   */
  @Prop()
  public lineNumbers = true

  /**
   * Enables ability to fold sections of code if the syntax package supports it
   */
  @Prop()
  public foldGutter = true

  /**
   * Programming language of the CodeChunk
   */
  @Prop({ mutable: true })
  public programmingLanguage: string | undefined

  /**
   * Disallow editing of the editor contents when set to `true`
   */
  @Prop()
  public readOnly = false

  /**
   * List of programming languages that can be executed in the current context
   */
  @Prop()
  public executableLanguages?: FileFormatMap

  @Listen('stencila-discover-executable-languages', { target: 'window' })
  onDiscoverExecutableLanguages({
    detail,
  }: DiscoverExecutableLanguagesEvent): void {
    this.executableLanguages = detail.languages
  }

  /**
   * Custom keyboard shortcuts to pass along to CodeMirror
   * @see https://codemirror.net/6/docs/ref/#keymap
   */
  @Prop() public keymap: Keymap[] = []

  /**
   * Callback function to invoke whenever the editor contents are updated.
   */
  @Prop()
  public contentChangeHandler?: EditorUpdateHandlerCb

  /**
   * Listen for the `stencila-language-change` event emitted by the language dropdown
   * provided by the child Editor component, and update the active language if necessary.
   */
  private handleLanguageChange = (e: CustomEvent<FileFormat>) => {
    if (
      this.programmingLanguage === undefined ||
      lookupFormat(this.programmingLanguage).name !== e.detail.name
    ) {
      this.programmingLanguage = e.detail.name
    }
  }

  /**
   * Returns the `CodeChunk` node with the updated `text` content from the editor.
   */
  @Method()
  public async getContents(): Promise<CodeBlock> {
    if (this.editorRef) {
      const { text, language } = await this.editorRef?.getContents()
      return codeBlock({ text, programmingLanguage: language })
    }

    throw new Error('Could not get CodeChunk contents')
  }

  /**
   * Returns the text contents from the editor
   */
  @Method()
  public async getTextContents(): Promise<string> {
    if (this.editorRef) {
      const { text } = await this.editorRef?.getContents()
      return text
    }

    throw new Error('Could not get CodeBlock contents')
  }

  /**
   * Retrieve a reference to the internal CodeMirror editor.
   * Allows for maintaining state from applications making use of this component.
   */
  @Method()
  public async getRef(): Promise<EditorView | undefined> {
    return this.editorRef?.getRef()
  }

  public render(): HTMLElement {
    return (
      <Host>
        <figure>
          <div>
            <div
              class={{
                editorContainer: true,
              }}
            >
              <stencila-editor
                activeLanguage={this.programmingLanguage}
                executableLanguages={this.executableLanguages}
                autofocus={this.autofocus}
                keymap={this.keymap}
                readOnly={this.readOnly}
                onStencila-language-change={this.handleLanguageChange}
                foldGutter={this.foldGutter}
                lineNumbers={this.lineNumbers}
                lineWrapping={this.lineWrapping}
                ref={(el) => {
                  this.editorRef = el
                }}
              >
                <slot name={CodeBlockComponent.slots.text} />
                <slot name={CodeBlockComponent.slots.errors} />
              </stencila-editor>
            </div>
          </div>

          <slot name={CodeBlockComponent.slots.label} />

          <slot name={CodeBlockComponent.slots.caption} />
        </figure>
      </Host>
    )
  }
}
