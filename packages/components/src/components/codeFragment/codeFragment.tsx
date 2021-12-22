import {
  Component,
  Element,
  Event,
  EventEmitter,
  h,
  Host,
  Listen,
  Method,
  Prop,
} from '@stencil/core'
import { CodeFragment } from '@stencila/schema'
import {
  CodeComponent,
  DiscoverExecutableLanguagesEvent,
} from '../code/codeTypes'
import { LanguagePickerInline } from '../codeExpression/languageSelect'
import {
  FileFormat,
  fileFormatMap,
  FileFormatMap,
  lookupFormat,
} from '../editor/languageUtils'

/**
 * @slot text - The contents of the code fragment
 */
@Component({
  tag: 'stencila-code-fragment',
  styleUrls: {
    default: 'codeFragment.css',
    material: 'codeFragment.css',
  },
  scoped: true,
})
export class CodeFragmentComponent implements CodeComponent<CodeFragment> {
  @Element() private el: HTMLStencilaCodeExpressionElement

  /**
   * The context of the component. In `read` mode the code content and its
   * language cannot be edited.
   */
  @Prop({ reflect: true })
  mode: 'read' | 'edit' = 'read'

  /**
   * Programming language of the CodeFragment
   */
  @Prop({ mutable: true })
  public programmingLanguage: string | undefined

  /**
   * List of all supported programming languages
   */
  @Prop()
  public languageCapabilities: FileFormatMap = fileFormatMap

  /**
   * List of programming languages that can be executed in the current context
   */
  @Prop({ mutable: true })
  public executableLanguages: FileFormatMap =
    window.stencilaWebClient?.executableLanguages ?? {}

  @Listen('stencila-discover-executable-languages', { target: 'window' })
  onDiscoverExecutableLanguages({
    detail,
  }: DiscoverExecutableLanguagesEvent): void {
    this.executableLanguages = detail.languages
  }
  /**
   * Event emitted when the language of the editor is changed.
   */
  @Event({ eventName: 'stencila-language-change' })
  languageChange: EventEmitter<FileFormat>

  /**
   * Function to call when the user selects a new language from the language picker dropdown.
   */
  private onSelectLanguage = async (language: string): Promise<void> => {
    this.languageChange.emit(lookupFormat(language))
    this.programmingLanguage = language
  }

  /**
   * Event emitted when the source code of the `CodeExpression` node is changed.
   */
  @Event({ eventName: 'stencila-content-change' })
  contentChange: EventEmitter<string>

  private contentChangeHandler = (e: Event) => {
    const target = e.currentTarget as HTMLSpanElement
    this.contentChange.emit(target.textContent ?? '')
  }

  private selectTextSlot = (): HTMLElement | null =>
    this.el.querySelector(`.text`)

  /**
   * Returns the text contents from the inline code editor
   */
  @Method()
  public async getTextContents(): Promise<string> {
    const slot = this.selectTextSlot()
    return Promise.resolve(slot?.textContent ?? '')
  }

  public render() {
    return (
      <Host class="text">
        <span class="actionsSecondary">
          <LanguagePickerInline
            activeLanguage={this.programmingLanguage ?? ''}
            executableLanguages={this.executableLanguages}
            onSetLanguage={this.onSelectLanguage}
            languageCapabilities={this.languageCapabilities}
            disabled={this.mode === 'read'}
          ></LanguagePickerInline>
        </span>

        <span
          class="text"
          contentEditable={this.mode === 'edit'}
          onInput={this.contentChangeHandler}
          role="textbox"
        >
          <slot name="text" />
        </span>
      </Host>
    )
  }
}
