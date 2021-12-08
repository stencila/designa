import { Component, Element, h, Host, Method, Prop } from '@stencil/core'
import { CodeBlock, codeBlock } from '@stencila/schema'
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
export class CodeBlockComponent {
  private static readonly slots = {
    text: 'text',
    outputs: 'outputs',
    errors: 'errors',
    caption: 'caption',
    label: 'label',
  }

  @Element() private el: HTMLStencilaCodeBlockElement

  private editorRef: HTMLStencilaEditorElement | null

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
  public executableLanguages: FileFormatMap = {}

  /**
   * Custom keyboard shortcuts to pass along to CodeMirror
   * @see https://codemirror.net/6/docs/ref/#keymap
   */
  @Prop() public keymap: Keymap[] = []

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

  componentDidLoad(): void {
    this.editorRef = this.el.querySelector('stencila-editor')
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