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

  private editorRef: EditorView

  /**
   * Text contents of the editor
   */
  @Prop()
  public contents?: string

  @Watch('contents')
  contentsChanged(nextValue: string, prevValue: string): void {
    if (nextValue !== prevValue) {
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
    const docState = this.editorRef.state

    const transaction = docState.update({
      effects: [effect],
    })

    this.editorRef.dispatch(transaction)
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
    if (nextLanguage !== prevLanguage) {
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
    if (nextValue !== prevValue) {
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
    if (nextValue !== prevValue) {
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
   * Enables abiility to fold sections of code
   */
  @Prop()
  public foldGutter = true

  @Watch('foldGutter')
  onSetfoldGutter(nextValue: boolean, prevValue: boolean): void {
    if (nextValue !== prevValue) {
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
    this.editorRef.dispatch({
      effects: updateErrors.of(nextErrors),
    })
  }

  private initCodeMirror = async (): Promise<void> => {
    const root = this.el
    const slot = root.querySelector('[slot]')
    const textContent =
      this.contents ??
      slot?.textContent ??
      root?.querySelector(`#${cssIds.editorTarget}`)?.textContent ??
      ''

    const lang = await this.getLang(this.activeLanguage)

    const extensions: Extension[] = [
      history(),
      autocompletion(),
      EditorState.languageData.of(() => [{ autocomplete: completeAnyWord }]),
      bracketMatching(),
      closeBrackets(),
      Prec.fallback(defaultHighlightStyle),
      this.languageConf.of(lang),
      this.lineWrappingConf.of(
        this.lineWrapping ? EditorView.lineWrapping : []
      ),
      this.lineNumbersConf.of(this.lineNumbers ? lineNumbers() : []),
      this.foldGutterConf.of(this.foldGutter ? foldGutter() : []),
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

    this.editorRef = new EditorView({
      state: EditorState.create({
        doc: textContent,
        extensions,
      }),
    })

    return root
      ?.querySelector(`#${cssIds.editorTarget}`)
      ?.replaceWith(this.editorRef.dom)
  }

  private getContent = (): string => this.editorRef.state.doc.toString()

  /**
   * Public method, returning the Editor contents and active language.
   */
  @Method()
  public async getContents(): Promise<EditorContents> {
    return Promise.resolve({
      text: this.getContent(),
      language: this.activeLanguage,
    })
  }

  private setContentsHandler = (contents: string) => {
    const docState = this.editorRef.state
    const transaction = docState.update({
      changes: {
        from: 0,
        to: docState.doc.length,
        insert: contents,
      },
      scrollIntoView: true,
    })

    this.editorRef.dispatch(transaction)
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
   * Prevents keyboard event listeners attached to parent DOM elements from firing.
   * This is to avoid conflicts when user has focused on the editor.
   */
  private stopEventPropagation = (e: KeyboardEvent): void => {
    e.stopPropagation()
  }

  /**
   * Brings DOM focus to the editor
   */
  private focusEditor = (): void => {
    this.editorRef.focus()
  }

  protected componentDidLoad() {
    this.initCodeMirror()
      .then(() => {
        if (this.autofocus) {
          this.focusEditor()
        }
      })
      .catch((err) => {
        console.log('Encountered error while initializing code editor\n', err)
      })
  }

  protected disconnectedCallback() {
    this.editorRef.destroy()
  }

  public render() {
    const activeLanguageByAlias = languageByAlias(this.activeLanguage)

    return (
      <Host>
        <div class={cssClasses.container}>
          <div
            class={cssClasses.editor}
            onKeyDown={this.stopEventPropagation}
            onClick={this.focusEditor}
          >
            <div class="hidden">
              <slot name={slots.text} />
            </div>
            <div id={cssIds.editorTarget} />
          </div>

          <menu>
            <label aria-label="Programming Language">
              <stencila-icon icon="terminal"></stencila-icon>
              <select onChange={this.onSetLanguage}>
                {this.languageCapabilities.map((language) => (
                  <option
                    value={language.toLowerCase()}
                    selected={
                      languageByAlias(language) === activeLanguageByAlias
                    }
                  >
                    {language}
                  </option>
                ))}
              </select>
            </label>
          </menu>
        </div>
      </Host>
    )
  }
}
