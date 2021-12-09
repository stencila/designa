import { Component, Event, EventEmitter, h, Host, Prop } from '@stencil/core'
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
export class CodeFragment {
  /**
   * Disallow editing of the editor contents when set to `true`
   */
  @Prop()
  public readOnly = false

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
  @Prop()
  public executableLanguages: FileFormatMap =
    window.stencilaWebClient?.executableLanguages ?? {}

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

  public render() {
    return (
      <Host class="text">
        <span class="actionsSecondary">
          <LanguagePickerInline
            activeLanguage={this.programmingLanguage ?? ''}
            executableLanguages={this.executableLanguages}
            onSetLanguage={this.onSelectLanguage}
            languageCapabilities={this.languageCapabilities}
            disabled={this.readOnly}
          ></LanguagePickerInline>
        </span>

        <span class="text">
          <slot name="text" />
        </span>
      </Host>
    )
  }
}
