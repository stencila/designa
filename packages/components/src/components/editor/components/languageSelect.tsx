import { FunctionalComponent, h } from '@stencil/core'
import { languageByAlias } from '../languageUtils'

interface Props {
  activeLanguage: string
  languageCapabilities: string[]
  onSetLanguage: (e: Event) => void
}

export const LanguagePicker = (props: Props): FunctionalComponent => {
  const activeLanguageByAlias = languageByAlias(props.activeLanguage)

  return (
    <label aria-label="Programming Language">
      <stencila-icon icon="terminal"></stencila-icon>
      <select onChange={props.onSetLanguage}>
        {props.languageCapabilities.map((language) => (
          <option
            value={language.toLowerCase()}
            selected={languageByAlias(language) === activeLanguageByAlias}
          >
            {language}
          </option>
        ))}
      </select>
    </label>
  )
}
