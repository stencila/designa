import { FileFormatMap } from './components/editor/languageUtils'

declare global {
  interface Window extends Window {
    stencilaWebClient?: {
      executableLanguages: FileFormatMap
    }
  }
}
