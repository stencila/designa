import { FunctionalComponent, h } from '@stencil/core'
import { FileFormatMap, lookupFormat } from '../editor/languageUtils'

interface Props {
  activeLanguage: string
  disabled: boolean
  languageCapabilities?: FileFormatMap
  executableLanguages?: FileFormatMap
  onSetLanguage?: (language: string) => void
  setRef?: (el?: HTMLSelectElement) => void
}

export const LanguagePickerInline = (props: Props): FunctionalComponent => {
  const activeLanguageByAlias = lookupFormat(props.activeLanguage)

  const hasExecutableLanguages =
    Object.keys(props.executableLanguages ?? {}).length > 0

  const filteredLanguages = hasExecutableLanguages
    ? Object.entries(props.languageCapabilities ?? {}).reduce(
        (langs: FileFormatMap, [name, details]) => {
          return Object.keys(props.executableLanguages ?? {}).includes(name)
            ? langs
            : { ...langs, [name]: details }
        },
        {}
      )
    : props.languageCapabilities ?? {}

  return (
    <stencila-menu aria-label="Programming Language" autoClose={true}>
      <stencila-button
        iconOnly={true}
        icon="terminal"
        size="xsmall"
        slot="toggle"
        aria-label="Toggle menu"
        color="key"
        minimal={true}
        tooltip={`${activeLanguageByAlias.name}`}
        disabled={props.disabled}
      ></stencila-button>

      {hasExecutableLanguages &&
        Object.values(props.executableLanguages ?? {}).map((language) => (
          <stencila-menu-item
            size="xsmall"
            onClick={() => props.onSetLanguage?.(language.name)}
            icon={
              language.name === activeLanguageByAlias.name ? 'check' : undefined
            }
          >
            {language.name}
          </stencila-menu-item>
        ))}

      <option disabled>Non-executable</option>

      {Object.values(filteredLanguages).map((language) => (
        <stencila-menu-item
          size="xsmall"
          onClick={() => props.onSetLanguage?.(language.name)}
        >
          {language.name}
        </stencila-menu-item>
      ))}
    </stencila-menu>
  )
}
