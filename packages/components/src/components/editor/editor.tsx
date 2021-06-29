import {
  autocompletion,
  completeAnyWord,
  startCompletion,
} from '@codemirror/autocomplete'
import { closeBrackets, closeBracketsKeymap } from '@codemirror/closebrackets'
import { defaultKeymap } from '@codemirror/commands'
import { commentKeymap } from '@codemirror/comment'
import { foldGutter, foldKeymap } from '@codemirror/fold'
import { lineNumbers } from '@codemirror/gutter'
import { defaultHighlightStyle } from '@codemirror/highlight'
import { history, historyKeymap } from '@codemirror/history'
import { bracketMatching } from '@codemirror/matchbrackets'
import { searchConfig, searchKeymap } from '@codemirror/search'
import {
  Compartment,
  EditorSelection,
  EditorState,
  Extension,
  Prec,
  StateEffect,
} from '@codemirror/state'
import {
  Command,
  drawSelection,
  EditorView,
  highlightSpecialChars,
  KeyBinding as KeymapI,
  keymap,
} from '@codemirror/view'
import {
  Component,
  Element,
  Event,
  EventEmitter,
  h,
  Host,
  Method,
  Prop,
  Watch,
} from '@stencil/core'
import { CodeError } from '@stencila/schema'
import { findSlotByName } from '../utls/slotSelectors'
import { LanguagePicker } from './components/languageSelect'
import { codeErrors, updateErrors } from './customizations/errorPanel'
import { defaultLanguageCapabilities, languageByAlias } from './languageUtils'

export interface EditorContents {
  text: string
  language: string
}

export type Keymap = KeymapI

const slots = {
  text: 'text',
}

const cssClasses = {
  container: 'editorContainer',
  editor: 'editor',
}

const cssIds = {
  editorTarget: 'editorTarget',
}

type EditorConfig = {
  language?: string
  foldGutterEnabled?: boolean
  lineNumbersEnabled?: boolean
  lineWrappingEnabled?: boolean
}

@Component({
  tag: 'stencila-editor',
  styleUrls: {
    default: 'editor.css',
    material: 'editor.material.css',
  },
  scoped: true,
})
export class Editor {
  @Element()
  private el: HTMLStencilaEditorElement

  private editorRef: EditorView | undefined

  private isReady = false

  /**
   * Text contents of the editor
   */
  @Prop()
  public contents?: string

  /**
   * Disable language and other editor configuration management, deferring control to consuming applications
   */
  @Prop()
  public isControlled = false

  @Watch('contents')
  contentsChanged(nextValue: string, prevValue: string): void {
    if (!this.isControlled && nextValue !== prevValue) {
      this.setContentsHandler(nextValue)
    }
  }

  /**
   * List of all supported programming languages
   */
  @Prop()
  public languageCapabilities: string[] = defaultLanguageCapabilities

  /**
   * Disallow editing of the editor contents when set to `true`
   */
  @Prop()
  public readOnly = false

  /**
   * Update the CodeMirror internal state when the `readOnly` prop changes
   */
  @Watch('readOnly')
  readOnlyChanged(nextReadOnly: boolean, prevReadOnly: boolean): void {
    if (nextReadOnly !== prevReadOnly) {
      this.dispatchEffect(
        this.readOnlyConf.reconfigure(EditorView.editable.of(!this.readOnly))
      )
    }
  }

  // Dynamic CodeMirror states need to be "compartmentalized". @see https://codemirror.net/6/docs/ref/#state.Compartment
  private readOnlyConf = new Compartment()

  /**
   * Programming language of the Editor
   */
  // eslint-disable-next-line @stencil/strict-mutable
  @Prop({ mutable: true, reflect: true })
  public activeLanguage: string =
    this.languageCapabilities[0]?.toLowerCase() ?? ''

  private dispatchEffect = (effect: StateEffect<unknown>) => {
    const docState = this.editorRef?.state

    const transaction =
      docState?.update({
        effects: [effect],
      }) ?? {}

    this.editorRef?.dispatch(transaction)
  }

  /**
   * Event emitted when the language of the editor is changed.
   */
  @Event() setLanguage: EventEmitter<string | undefined>

  private getLang = async (language: string) => {
    switch (language.toLowerCase()) {
      case 'r': {
        const { StreamLanguage } = await import('@codemirror/stream-parser')
        const { r } = await import('@codemirror/legacy-modes/mode/r')
        return StreamLanguage.define(r)
      }
      case 'bash':
      case 'shell':
      case 'sh': {
        const { StreamLanguage } = await import('@codemirror/stream-parser')
        const { shell } = await import('@codemirror/legacy-modes/mode/shell')
        return StreamLanguage.define(shell)
      }
      case 'latex':
      case 'stex':
      case 'tex': {
        const { StreamLanguage } = await import('@codemirror/stream-parser')
        const { stexMath } = await import('@codemirror/legacy-modes/mode/stex')
        return StreamLanguage.define(stexMath)
      }
      case 'toml': {
        const { StreamLanguage } = await import('@codemirror/stream-parser')
        const { toml } = await import('@codemirror/legacy-modes/mode/toml')
        return StreamLanguage.define(toml)
      }
      case 'yaml': {
        const { StreamLanguage } = await import('@codemirror/stream-parser')
        const { yaml } = await import('@codemirror/legacy-modes/mode/yaml')
        return StreamLanguage.define(yaml)
      }
      case 'dockerfile': {
        const { StreamLanguage } = await import('@codemirror/stream-parser')
        const { dockerFile } = await import(
          '@codemirror/legacy-modes/mode/dockerfile'
        )
        return StreamLanguage.define(dockerFile)
      }
      case 'javascript': {
        const { javascript } = await import('@codemirror/lang-javascript')
        return javascript()
      }
      case 'json': {
        const { json } = await import('@codemirror/lang-json')
        return json()
      }
      case 'xml': {
        const { xml } = await import('@codemirror/lang-xml')
        return xml()
      }
      case 'python': {
        const { python } = await import('@codemirror/lang-python')
        return python()
      }
      case 'rmd': {
        const { markdown } = await import('@codemirror/lang-markdown')
        const { StreamLanguage } = await import('@codemirror/stream-parser')
        const { r } = await import('@codemirror/legacy-modes/mode/r')
        return markdown({ defaultCodeLanguage: StreamLanguage.define(r) })
      }
      case 'md':
      case 'markdown':
      default: {
        const { markdown } = await import('@codemirror/lang-markdown')
        return markdown()
      }
    }
  }

  // Dynamic CodeMirror states need to be "compartmentalized". @see https://codemirror.net/6/docs/ref/#state.Compartment
  private languageConf = new Compartment()

  /**
   * Handle logic for updated internal and external representation/state of the
   * active language prop.
   */
  private setLanguageHandler = async (language: string) => {
    this.setLanguage.emit(language)

    const lang = await this.getLang(language)
    this.activeLanguage = language

    this.dispatchEffect(this.languageConf.reconfigure(lang))
  }

  /**
   * Changes the active programming language of the editor.
   */
  private onSetLanguage = async (e: Event): Promise<void> => {
    const target = e.currentTarget as HTMLSelectElement
    const language = languageByAlias(target.value)
    return this.setLanguageHandler(language)
  }

  /**
   * Update the internal state, for both the component and CodeMirror, when the
   * `activeLanguage` prop changes
   */
  @Watch('activeLanguage')
  activeLanguageOnlyChanged(nextLanguage: string, prevLanguage: string): void {
    if (!this.isControlled && nextLanguage !== prevLanguage) {
      this.setLanguageHandler(nextLanguage).catch((err) => {
        console.log(err)
      })
    }
  }

  /**
   * Function to be evaluated over the contents of the editor.
   */
  @Prop()
  public executeHandler?: (contents: EditorContents) => Promise<unknown>

  /**
   * Wrapper around the `executeHandler` function, needed to run using CodeMirror keyboard shortcuts.
   */
  private execute: Command = () => {
    this.getContents()
      .then((contents) => {
        return this.executeHandler ? this.executeHandler(contents) : contents
      })
      .catch((err) => {
        console.error(err)
        return false
      })

    return true
  }

  /**
   * Autofocus the editor on page load
   */
  @Prop()
  public autofocus = false

  // Dynamic CodeMirror states need to be "compartmentalized". @see https://codemirror.net/6/docs/ref/#state.Compartment
  private lineNumbersConf = new Compartment()

  /**
   * Determines the visibility of line numbers
   */
  @Prop()
  public lineNumbers = true

  @Watch('lineNumbers')
  onSetLineNumbers(nextValue: boolean, prevValue: boolean): void {
    if (!this.isControlled && nextValue !== prevValue) {
      this.dispatchEffect(
        this.lineNumbersConf.reconfigure(nextValue ? lineNumbers() : [])
      )
    }
  }

  // Dynamic CodeMirror states need to be "compartmentalized". @see https://codemirror.net/6/docs/ref/#state.Compartment
  private lineWrappingConf = new Compartment()

  /**
   * Control line wrapping of text inside the editor
   */
  @Prop()
  public lineWrapping = false

  @Watch('lineWrapping')
  onSetLineWrapping(nextValue: boolean, prevValue: boolean): void {
    if (!this.isControlled && nextValue !== prevValue) {
      this.dispatchEffect(
        this.lineWrappingConf.reconfigure(
          nextValue ? EditorView.lineWrapping : []
        )
      )
    }
  }

  // Dynamic CodeMirror states need to be "compartmentalized". @see https://codemirror.net/6/docs/ref/#state.Compartment
  private foldGutterConf = new Compartment()

  /**
   * Enables ability to fold sections of code if the syntax package supports it
   */
  @Prop()
  public foldGutter = true

  @Watch('foldGutter')
  onSetfoldGutter(nextValue: boolean, prevValue: boolean): void {
    if (!this.isControlled && nextValue !== prevValue) {
      this.dispatchEffect(
        this.foldGutterConf.reconfigure(nextValue ? foldGutter() : [])
      )
    }
  }

  /**
   * Custom keyboard shortcuts to pass along to CodeMirror
   * @see https://codemirror.net/6/docs/ref/#keymap
   */
  @Prop()
  public keymap: Keymap[] = []

  /**
   * List of errors to display at the bottom of the code editor section.
   * If the error is a `string`, then it will be rendered as a warning.
   */
  @Prop()
  public errors?: CodeError[] | string[]

  @Watch('errors')
  errorsChanged(nextErrors: (CodeError | string)[]): void {
    this.editorRef?.dispatch({
      effects: updateErrors.of(nextErrors),
    })
  }

  private getCodeMirrorConfig = async (config: EditorConfig = {}) => {
    const {
      language,
      foldGutterEnabled,
      lineNumbersEnabled,
      lineWrappingEnabled,
    } = {
      language: this.activeLanguage,
      foldGutterEnabled: this.foldGutter,
      lineNumbersEnabled: this.lineNumbers,
      lineWrappingEnabled: this.lineWrapping,
      ...config,
    }

    const languageSyntax = await this.getLang(language)

    const extensions: Extension[] = [
      history(),
      autocompletion(),
      EditorState.languageData.of(() => [{ autocomplete: completeAnyWord }]),
      bracketMatching(),
      closeBrackets(),
      Prec.fallback(defaultHighlightStyle),
      this.languageConf.of(languageSyntax),
      this.lineWrappingConf.of(
        lineWrappingEnabled ? EditorView.lineWrapping : []
      ),
      this.lineNumbersConf.of(lineNumbersEnabled ? lineNumbers() : []),
      this.foldGutterConf.of(foldGutterEnabled ? foldGutter() : []),
      drawSelection(),
      EditorState.allowMultipleSelections.of(true),
      searchConfig({ top: true }),
      highlightSpecialChars(),
      keymap.of([
        ...defaultKeymap,
        ...commentKeymap,
        ...closeBracketsKeymap,
        ...historyKeymap,
        ...foldKeymap,
        ...searchKeymap,
        {
          key: 'Ctrl-Space',
          run: startCompletion,
        },
        {
          key: 'Shift-Enter',
          run: this.execute,
        },
        ...this.keymap,
      ]),
      this.readOnlyConf.of(EditorView.editable.of(!this.readOnly)),
      codeErrors(),
    ]

    return extensions
  }

  private initCodeMirror = async (): Promise<void> => {
    const root = this.el
    const slotEl: Element | undefined = findSlotByName(root)(slots.text)

    const textContent = this.contents ?? slotEl?.textContent ?? ''

    this.editorRef = new EditorView({
      state: EditorState.create({
        doc: textContent,
        extensions: await this.getCodeMirrorConfig(),
      }),
    })

    this.isReady = true
  }

  private attachEditorToDom = () => {
    const editorDom = this.editorRef?.dom
    if (editorDom) {
      this.el?.querySelector(`#${cssIds.editorTarget}`)?.replaceWith(editorDom)
    }
  }

  /**
   * Public method, returning the Editor contents and active language.
   */
  @Method()
  public async getContents(): Promise<EditorContents> {
    return {
      text: this.editorRef?.state.doc.toString() ?? '',
      language: this.activeLanguage,
    }
  }

  private setContentsHandler = (contents: string) => {
    const docState = this.editorRef?.state
    const transaction =
      docState?.update({
        changes: {
          from: 0,
          to: docState.doc.length,
          insert: contents,
        },
        scrollIntoView: true,
      }) ?? {}

    this.editorRef?.dispatch(transaction)
  }

  /**
   * Public method, to replace the contents of the Editor with a supplied string.
   */
  @Method()
  public setContents(contents: string): Promise<string> {
    this.setContentsHandler(contents)
    return Promise.resolve(contents)
  }

  /**
   * Public method, to completely replace the editor state with the given state.
   * This replaces the editor configuration, edit history, language, etc.
   */
  @Method()
  public async setState(
    contents: string,
    config?: EditorConfig,
    extensions?: Extension[],
    selection?: EditorSelection
  ): Promise<string> {
    this.editorRef?.setState(
      EditorState.create({
        doc: contents,
        extensions: extensions ?? (await this.getCodeMirrorConfig(config)),
        selection,
      })
    )
    return Promise.resolve(contents)
  }

  /**
   * Public method, returning a reference to the internal CodeMirror editor.
   * Allows for maintaining state from applications making use of this component.
   */
  @Method()
  public async getRef(): Promise<EditorView> {
    if (this.editorRef) {
      return this.editorRef
    }

    return new Promise((resolve, reject) => {
      let isChecking = true
      const timeout = 3_000

      const wait = setTimeout(() => {
        isChecking = false
      }, timeout)

      const check = () => {
        setInterval(() => {
          if (this.editorRef && this.isReady) {
            clearTimeout(wait)
            resolve(this.editorRef)
          } else if (!isChecking) {
            reject(
              new Error(
                `Editor wasn’t instantiated in time (${timeout}ms), please try again.`
              )
            )
          } else {
            check()
          }
        }, 100)
      }

      check()
    })
  }

  /**
   * Prevents keyboard event listeners attached to parent DOM elements from firing.
   * This is to avoid conflicts when user has focused on the editor.
   */
  private stopEventPropagation = (e: KeyboardEvent): void => {
    e.stopPropagation()
  }

  /**
   * Brings DOM focus to the editor
   */
  private focus = (): void => {
    this.editorRef?.focus()
  }

  protected async componentWillLoad(): Promise<void> {
    try {
      return this.initCodeMirror()
    } catch (err) {
      console.log('Encountered error while initializing code editor\n', err)
    }
  }

  protected componentDidLoad() {
    this.attachEditorToDom()
    if (this.autofocus) {
      this.focus()
    }
  }

  protected disconnectedCallback() {
    this.editorRef?.destroy()
  }

  public render() {
    return (
      <Host>
        <div class={cssClasses.container}>
          <div
            class={cssClasses.editor}
            onKeyDown={this.stopEventPropagation}
            onClick={this.focus}
          >
            <div class="hidden">
              <slot name={slots.text} />
            </div>
            <div id={cssIds.editorTarget} />
          </div>

          <menu>
            <LanguagePicker
              activeLanguage={this.activeLanguage}
              onSetLanguage={this.onSetLanguage}
              languageCapabilities={this.languageCapabilities}
            ></LanguagePicker>
          </menu>
        </div>
      </Host>
    )
  }
}
