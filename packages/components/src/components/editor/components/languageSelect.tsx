import { FunctionalComponent, h } from '@stencil/core'
import { lookupFormat, FileFormatMap } from '../languageUtils'

interface Props {
  activeLanguage: string
  languageCapabilities: FileFormatMap
  onSetLanguage: (e: Event) => void
  setRef: (el?: HTMLSelectElement) => void
}

export const LanguagePicker = (props: Props): FunctionalComponent => {
  const activeLanguageByAlias = lookupFormat(props.activeLanguage)

  return (
    <label aria-label="Programming Language">
      <stencila-icon icon="terminal"></stencila-icon>
      <select onChange={props.onSetLanguage} ref={props.setRef}>
        {Object.values(props.languageCapabilities).map((language) => (
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
