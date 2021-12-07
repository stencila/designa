import { Component, h, Host, Event, Prop, EventEmitter } from '@stencil/core'
import { FileFormatUtils } from '../..'
import { LanguagePickerInline } from '../codeExpression/languageSelect'
import { FileFormat, lookupFormat } from '../editor/languageUtils'

/**
 * @slot default - The contents of the code fragment
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
            onSetLanguage={this.onSelectLanguage}
            executableLanguages={FileFormatUtils.fileFormatMap}
            disabled={this.readOnly}
          ></LanguagePickerInline>
        </span>

        <span class="text">
          <slot />
        </span>
      </Host>
    )
  }
}
