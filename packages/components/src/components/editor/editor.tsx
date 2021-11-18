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
import { history, historyField, historyKeymap } from '@codemirror/history'
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
  ViewUpdate,
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
import { getSlotByName } from '../utils/slotSelectors'
import { LanguagePicker } from './components/languageSelect'
import { codeErrors, updateErrors } from './customizations/errorPanel'
import {
  EditorUpdateHandlerCb,
  updateListenerExtension,
} from './customizations/onUpdateHandlerExtension'
import {
  FileFormat,
  FileFormatMap,
  fileFormatMap,
  lookupFormat,
} from './languageUtils'

export interface EditorContents {
  text: string
  language: string
}

export type Keymap = KeymapI

type EditorStateJSON = Record<string, unknown>

const slots = {
  text: 'text',
  errors: 'errors',
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

/**
 * @slot text - The contents of the editor.
 * @slot errors - List of any `stencila-code-error` elements to render in the Errors panel.
 */
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

  private textSlot: HTMLDivElement | undefined
  private errorsSlot: HTMLDivElement | undefined

  private editorRef: EditorView | undefined
  private languagePickerRef: HTMLSelectElement | undefined

  private isReady = false
  private isUpdatingContent = false

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
  public languageCapabilities: FileFormatMap = fileFormatMap

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
  @Prop()
  public activeLanguage: string = this.languageCapabilities.R?.name ?? ''

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
  @Event({ eventName: 'stencila-language-change' })
  languageChange: EventEmitter<FileFormat>

  /**
   * Event emitted when the content of the editor is changed.
   */
  @Event({ eventName: 'stencila-content-change' })
  contentChange: EventEmitter<ViewUpdate>

  private getLang = async (language: string) => {
    switch (lookupFormat(language).name.toLowerCase()) {
      case 'r': {
        const { StreamLanguage } = await import('@codemirror/stream-parser')
        const { r } = await import('@codemirror/legacy-modes/mode/r')
        return StreamLanguage.define(r)
      }
      case 'bash': {
        const { StreamLanguage } = await import('@codemirror/stream-parser')
        const { shell } = await import('@codemirror/legacy-modes/mode/shell')
        return StreamLanguage.define(shell)
      }
      case 'latex': {
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
      case 'html': {
        const { html } = await import('@codemirror/lang-html')
        return html()
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
      case 'r':
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
   * Resolve and set a new active CodeMirror syntax
   */
  private setEditorSyntax = async (language: string) => {
    const lang = await this.getLang(language)
    this.dispatchEffect(this.languageConf.reconfigure(lang))
  }

  private setLanguagePickerRef = (el?: HTMLSelectElement) =>
    (this.languagePickerRef = el)

  /**
   * Function to call when the user selects a new language from the language picker dropdown.
   */
  private onSelectLanguage = async (e: Event): Promise<void> => {
    const target = e.currentTarget as HTMLSelectElement
    const language = lookupFormat(target.value)
    this.languageChange.emit(language)
    return this.setEditorSyntax(language.name)
  }

  /**
   * Update the internal state, for both the component and CodeMirror, when the
   * `activeLanguage` prop changes
   */
  @Watch('activeLanguage')
  activeLanguageChanged(nextLanguage: string, prevLanguage: string): void {
    if (nextLanguage !== prevLanguage) {
      this.setEditorSyntax(nextLanguage).catch((err) => {
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
   * Callback function to invoke whenever the editor contents are updated.
   */
  @Prop()
  public contentChangeHandler?: EditorUpdateHandlerCb

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
   * Enables ability to fold sections of code if the syntax package supports it
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

  private setErrors = () => {
    this.editorRef?.dispatch({
      effects: updateErrors.of({
        slotRef: this.errorsSlot,
      }),
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
          key: 'Ctrl-Enter',
          run: this.execute,
        },
        ...this.keymap,
      ]),
      this.readOnlyConf.of(EditorView.editable.of(!this.readOnly)),
      codeErrors(),
      updateListenerExtension((e) => {
        this.contentChangeHandler?.(e)
        if (!this.isUpdatingContent) {
          this.contentChange.emit(e)
        }
      }),
    ]

    return extensions
  }

  private initCodeMirror = async (): Promise<void> => {
    const root = this.el
    const slotEl: Element | undefined = getSlotByName(root)(slots.text)

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
   * Retrieve the Editor contents and active language.
   */
  @Method()
  public getContents(): Promise<EditorContents> {
    return Promise.resolve({
      text: this.editorRef?.state.doc.toString() ?? '',
      language: lookupFormat(
        this.languagePickerRef?.value ?? this.activeLanguage
      ).name.toLowerCase(),
    })
  }

  private setContentsHandler = (contents: string) => {
    this.isUpdatingContent = true

    const docState = this.editorRef?.state
    const transaction =
      docState?.update({
        changes: {
          from: 0,
          to: docState.doc.length,
          insert: contents,
        },
      }) ?? {}

    this.editorRef?.dispatch(transaction)

    this.isUpdatingContent = false
  }

  /**
   * Replace the contents of the Editor with a supplied string.
   */
  @Method()
  public setContents(contents: string): Promise<string> {
    this.setContentsHandler(contents)
    return Promise.resolve(contents)
  }

  private textSlotObserver = new MutationObserver(() => {
    const updatedText = this.textSlot?.textContent ?? ''
    this.setContentsHandler(updatedText)
  })

  /**
   * Retrieve a JSON representation of the the internal editor state.
   */
  @Method()
  public getState(): Promise<EditorStateJSON> {
    return Promise.resolve(
      this.editorRef?.state.toJSON({
        history: historyField,
      })
    )
  }

  /**
   * Update the internal editor state with the given JSON object.
   */
  @Method()
  public async setState(state: EditorStateJSON): Promise<void> {
    this.editorRef?.setState(
      EditorState.fromJSON(
        state,
        { extensions: await this.getCodeMirrorConfig() },
        {
          history: historyField,
        }
      )
    )
  }

  /**
   * Create a new editor state from a given string.
   * The string will be used as the initial contents of the editor.
   */
  @Method()
  public async setStateFromString(content: string): Promise<void> {
    this.editorRef?.setState(
      EditorState.create({
        doc: content,
        extensions: await this.getCodeMirrorConfig(),
      })
    )
  }

  /**
   * Retrieve a reference to the internal CodeMirror editor.
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

  protected componentDidLoad(): void {
    this.attachEditorToDom()
    if (this.autofocus) {
      this.focus()
    }

    if (this.textSlot) {
      this.textSlotObserver.observe(this.textSlot, {
        childList: true,
        characterData: true,
        subtree: true,
      })
    }

    if (this.errorsSlot) {
      this.setErrors()
    }
  }

  protected disconnectedCallback(): void {
    this.editorRef?.destroy()
  }

  public render() {
    return (
      <Host>
        <div class={cssClasses.container}>
          <div
            // eslint-disable-next-line jsx-a11y/no-noninteractive-tabindex
            class={cssClasses.editor}
            onKeyDown={this.stopEventPropagation}
            onClick={this.focus}
          >
            <div class="hidden" ref={(el) => (this.textSlot = el)}>
              <slot name={slots.text} />
            </div>

            <div ref={(el) => (this.errorsSlot = el)}>
              <slot name={slots.errors} />
            </div>

            <div id={cssIds.editorTarget} />
          </div>

          <menu>
            <LanguagePicker
              activeLanguage={this.activeLanguage}
              onSetLanguage={this.onSelectLanguage}
              languageCapabilities={this.languageCapabilities}
              setRef={this.setLanguagePickerRef}
            ></LanguagePicker>
          </menu>
        </div>
      </Host>
    )
  }
}
