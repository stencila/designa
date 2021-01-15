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
import { python } from '@codemirror/lang-python'
import { bracketMatching } from '@codemirror/matchbrackets'
import { EditorState, Extension, Prec, tagExtension } from '@codemirror/state'
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
import { deleteToLineStart } from './commands'

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
   * List of all supported programming languages
   */
  @Prop()
  public languageCapabilities: string[] = ['Bash', 'R', 'Python']

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
      this.editorRef.dispatch({
        reconfigure: {
          [this.readOnlyTag]: EditorView.editable.of(!this.readOnly),
        },
      })
    }
  }

  // Mutable CodeMirror states need to be "tagged". @see https://codemirror.net/6/docs/ref/#state.tagExtension
  private readOnlyTag = Symbol('readOnly')

  /**
   * Event emitted when the language of the editor is changed.
   */
  @Event() setLanguage: EventEmitter<string | undefined>

  /**
   * Changes the active programming language of the editor.
   * Does not affect syntax highlighting.
   */
  private onSetLanguage = (e: Event): void => {
    const target = e.currentTarget as HTMLSelectElement
    this.activeLanguage = target.value.toLowerCase()
    this.setLanguage.emit(target.value)
  }

  /**
   * Programming language of the Editor
   */
  // eslint-disable-next-line @stencil/strict-mutable
  @Prop({ mutable: true, reflect: true })
  public activeLanguage: string =
    this.languageCapabilities[0]?.toLowerCase() ?? ''

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

  /**
   * Determines the visibility of line numbers
   */
  @Prop()
  public lineNumbers = true

  /**
   * Enables abiility to fold sections of code
   */
  @Prop()
  public foldGutter = true

  /**
   * Custom keyboard shortcuts to pass along to CodeMirror
   * @see https://codemirror.net/6/docs/ref/#keymap
   */
  @Prop()
  public keymap: Keymap[] = []

  private initCodeMirror = (): void => {
    const root = this.el
    const slot = root.querySelector('[slot]')
    const textContent =
      slot?.textContent ??
      root?.querySelector(`#${cssIds.editorTarget}`)?.textContent ??
      ''

    const extensions: Extension[] = [
      history(),
      autocompletion({ override: [completeAnyWord] }),
      bracketMatching(),
      closeBrackets(),
      Prec.fallback(defaultHighlightStyle),
      python(),
      drawSelection(),
      EditorState.allowMultipleSelections.of(true),
      highlightSpecialChars(),
      keymap.of([
        ...defaultKeymap,
        ...commentKeymap,
        ...closeBracketsKeymap,
        ...historyKeymap,
        ...foldKeymap,
        {
          key: 'Ctrl-Space',
          run: startCompletion,
        },
        {
          key: 'Mod-Backspace',
          run: deleteToLineStart,
        },
        {
          key: 'Shift-Enter',
          run: this.execute,
        },
        ...this.keymap,
      ]),
      tagExtension(this.readOnlyTag, EditorView.editable.of(!this.readOnly)),
    ]

    if (this.lineNumbers) {
      extensions.push(lineNumbers())
    }

    if (this.foldGutter) {
      extensions.push(foldGutter())
    }

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

  /**
   * Public method, to replace the contents of the Editor with a supplied string.
   */
  @Method()
  public setContents(contents: string): Promise<string> {
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
    if (this.autofocus) {
      this.focusEditor()
    }
  }

  protected disconnectedCallback() {
    this.editorRef.destroy()
  }

  public render() {
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
                    selected={language.toLowerCase() === this.activeLanguage}
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
