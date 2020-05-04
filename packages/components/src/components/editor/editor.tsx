import { autocomplete, startCompletion } from '@codemirror/next/autocomplete'
import { closeBrackets } from '@codemirror/next/closebrackets'
import {
  baseKeymap,
  moveLineEnd,
  moveLineStart,
} from '@codemirror/next/commands'
import { foldGutter } from '@codemirror/next/fold'
import { lineNumbers } from '@codemirror/next/gutter'
import { defaultHighlighter } from '@codemirror/next/highlight'
import {
  history,
  redo,
  redoSelection,
  undo,
  undoSelection,
} from '@codemirror/next/history'
import { keymap, Keymap as KeymapI } from '@codemirror/next/keymap'
import { javascript } from '@codemirror/next/lang-javascript'
import { bracketMatching } from '@codemirror/next/matchbrackets'
import { multipleSelections } from '@codemirror/next/multiple-selections'
import { specialChars } from '@codemirror/next/special-chars'
import { EditorState, SelectionRange } from '@codemirror/next/state'
import { Command, EditorView } from '@codemirror/next/view'
import { Component, Element, h, Host, Method, Prop } from '@stencil/core'

/** CodeMirror command to delete content till line start */
const deleteLine = (view: EditorView) => {
  const transaction = view.state.t().forEachRange((range, transaction) => {
    let { from, to } = range
    if (from === to) {
      const target = view.movePos(
        range.head,
        'backward',
        'lineboundary',
        'move'
      )
      from = Math.min(from, target)
      to = Math.max(to, target)
    }
    if (from === to) return range
    transaction.replace(from, to, '')
    return new SelectionRange(from)
  })
  if (!transaction.docChanged) return false

  view.dispatch(transaction.scrollIntoView())
  return true
}

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
  @Element() private el: HTMLStencilaEditorElement

  private editorRef: EditorView

  /**
   * List of all supported programming languages
   */
  @Prop() public languageCapabilities: string[] = [
    'Bash',
    'JavaScript',
    'R',
    'Python',
  ]

  /**
   * Disallow editing of the editor contents when set to `true`
   */
  @Prop() public readOnly = false

  /**
   * Changes the active programming language of the editor.
   * Does not affect syntax highlighting.
   */
  private setLanguage = (e: Event) => {
    const target = e.currentTarget as HTMLSelectElement
    this.activeLanguage = target.value.toLowerCase()
  }

  /**
   * Programming language of the Editor
   */
  @Prop({ mutable: true, reflect: true }) public activeLanguage: string =
    this.languageCapabilities[0]?.toLowerCase() ?? ''

  /**
   * Function to be evaluated over the contents of the editor.
   */
  @Prop() public executeHandler: (contents: EditorContents) => Promise<unknown>

  /**
   * Wrapper around the `executeHandler` function, needed to run using CodeMirror keyboard shortcuts.
   */
  private execute: Command = () => {
    this.getContents()
      .then((contents) => this.executeHandler(contents))
      .catch((err) => {
        console.error(err)
        return false
      })

    return true
  }

  /**
   * Determines the visibility of line numbers
   */
  @Prop() public lineNumbers = true

  /**
   * Enables abiility to fold sections of code
   */
  @Prop() public foldGutter = true

  /**
   * Custom keyboard shortcuts to pass along to CodeMirror
   * @see https://codemirror.net/6/docs/ref/#keymap
   */
  @Prop() public keymap: Keymap = {}

  private initCodeMirror = () => {
    const isMac = navigator.platform.includes('Mac')

    const root = this.el
    const slot = root.querySelector('[slot]')
    const textContent =
      slot?.textContent ??
      root?.querySelector(`#${cssIds.editorTarget}`)?.textContent ??
      ''

    const extensions = [
      history(),
      autocomplete(),
      bracketMatching(),
      closeBrackets,
      defaultHighlighter,
      javascript(),
      multipleSelections(),
      specialChars(),
      keymap({
        'Mod-z': undo,
        'Mod-Shift-z': redo,
        'Mod-u': (view) => undoSelection(view) || true,
        [isMac ? 'Mod-Shift-u' : 'Alt-u']: redoSelection,
        'Ctrl-y': isMac ? undefined : redo,
        'Mod-Enter': this.execute,
        'Mod-ArrowLeft': moveLineStart,
        'Mod-ArrowRight': moveLineEnd,
        'Ctrl-Space': startCompletion,
        'Mod-Backspace': deleteLine,
        // FIXME: The following commands have no effect
        /* 'Mod-Shift-ArrowLeft': selectDocStart, */
        /* 'Mod-Shift-ArrowRight': selectDocEnd, */
        ...this.keymap,
      }),
      keymap(baseKeymap),
      EditorView.editable.of(!this.readOnly),
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

  protected componentDidLoad() {
    this.initCodeMirror()
  }

  private getContent = () => this.editorRef.state.toJSON().doc

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
   * Prevents keyboard event listeners attached to parent DOM elements from firing.
   * This is to avoid conflicts when user has focused on the editor.
   */
  private stopEventPropagation = (e: KeyboardEvent) => {
    e.stopPropagation()
  }

  /**
   * Brings DOM focus to the editor
   */
  private focusEditor = (): void => {
    this.editorRef.focus()
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
              <stencila-icon icon="code"></stencila-icon>
              <select onChange={this.setLanguage}>
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
