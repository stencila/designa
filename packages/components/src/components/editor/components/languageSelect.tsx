import { FunctionalComponent, h } from '@stencil/core'
import { FileFormatMap, lookupFormat } from '../languageUtils'

interface Props {
  activeLanguage: string
  disabled: boolean
  languageCapabilities: FileFormatMap
  executableLanguages: FileFormatMap
  onSetLanguage: (e: Event) => void
  setRef: (el?: HTMLSelectElement) => void
}

export const LanguagePicker = (props: Props): FunctionalComponent => {
  const activeLanguageByAlias = lookupFormat(props.activeLanguage)
  const hasExecutableLanguages =
    Object.keys(props.executableLanguages).length > 0

  const filteredLanguages = hasExecutableLanguages
    ? Object.entries(props.languageCapabilities).reduce(
        (langs: FileFormatMap, [name, details]) => {
          return Object.keys(props.executableLanguages).includes(name)
            ? langs
            : { ...langs, [name]: details }
        },
        {}
      )
    : props.languageCapabilities

  return (
    <label aria-label="Programming Language">
      <stencila-icon icon="terminal"></stencila-icon>
      <select
        onChange={props.onSetLanguage}
        ref={props.setRef}
        disabled={props.disabled}
      >
        {hasExecutableLanguages &&
          Object.values(props.executableLanguages).map((language) => (
            <option
              value={language.name}
              selected={language.name === activeLanguageByAlias.name}
            >
              {language.name}
            </option>
          ))}

        <option disabled>Not executable</option>

        {Object.values(filteredLanguages).map((language) => (
          <option
            value={language.name}
            selected={language.name === activeLanguageByAlias.name}
          >
            {language.name}
          </option>
        ))}
      </select>
    </label>
  )
}
