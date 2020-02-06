import {
  baseKeymap,
  moveLineEnd,
  moveLineStart
} from '@codemirror/next/commands'
import { lineNumbers } from '@codemirror/next/gutter'
import { defaultHighlighter } from '@codemirror/next/highlight'
import {
  history,
  redo,
  redoSelection,
  undo,
  undoSelection
} from '@codemirror/next/history'
import { keymap } from '@codemirror/next/keymap'
import { html } from '@codemirror/next/lang-html'
import { javascript } from '@codemirror/next/lang-javascript'
import { bracketMatching } from '@codemirror/next/matchbrackets'
import { specialChars } from '@codemirror/next/special-chars'
import { EditorState } from '@codemirror/next/state'
import { Command, EditorView } from '@codemirror/next/view'
import { Component, Element, h, Host, Method, Prop, State } from '@stencil/core'
import { codeChunk, CodeChunk } from '@stencila/schema'
// eslint-disable-next-line @typescript-eslint/ban-ts-ignore
// @ts-ignore
import { patch as selectPolyfill } from 'shadow-root-get-selection-polyfill'

const slots = {
  text: 'text'
}

@Component({
  tag: 'stencila-code-editor',
  styleUrls: {
    default: 'codeEditor.css',
    material: 'codeEditor.material.css'
  },
  scoped: true
})
export class CodeEditor {
  /* private static readonly elementName = 'stencila-code-editor' */

  @Element() private el: HTMLStencilaCodeEditorElement

  private codeEditorRef: EditorView

  /**
   * List of all supported programming languages
   */
  @Prop() public programmingLanguages: string[] = [
    'Bash',
    'JavaScript',
    'R',
    'Python'
  ]

  /**
   * Changes the active programming language of the editor.
   * Does not affect syntax highlighting.
   */
  private setProgrammingLanguage = (e: Event) => {
    const target = e.currentTarget as HTMLSelectElement
    this.activeProgrammingLanguage = target.value.toLowerCase()
  }

  /**
   * Programming language of the CodeEditor
   */
  @Prop() public programmingLanguage: string | undefined

  @State() activeProgrammingLanguage =
    this.programmingLanguage ?? this.programmingLanguages[0]?.toLowerCase()

  /**
   * Function to be evaluated over the contents of the CodeChunk.
   */
  @Prop() public executeHandler: (codeChunk: CodeChunk) => Promise<unknown>

  /**
   * Wrapper around the `executeHandler` function, needed to run using CodeMirror keyboard shortcuts.
   */
  private runCodeView: Command = () => {
    this.getJSON()
      .then(codeChunk => {
        return this.executeHandler(codeChunk)
      })
      .catch(err => {
        console.error(err)
        return false
      })

    return true
  }

  /**
   * Determines the visibility of line numbers
   */
  @Prop() public lineNumbers = true

  private initCodeMirror = () => {
    const isMac = navigator.platform.includes('Mac')

    const root = this.el
    const slot = root.querySelector('[slot]')
    const textContent =
      slot?.textContent ||
      root?.querySelector('#codeEditorTarget')?.textContent ||
      ''

    const extensions = [
      history(),
      bracketMatching(),
      defaultHighlighter,
      javascript(),
      html(),
      specialChars(),
      keymap({
        'Mod-z': undo,
        'Mod-Shift-z': redo,
        'Mod-u': view => undoSelection(view) || true,
        [isMac ? 'Mod-Shift-u' : 'Alt-u']: redoSelection,
        'Ctrl-y': isMac ? undefined : redo,
        'Mod-Enter': this.runCodeView,
        'Mod-ArrowLeft': moveLineStart,
        'Mod-ArrowRight': moveLineEnd
        // FIXME: The following commands have no effect
        /* 'Mod-]': indentSelection, */
        /* 'Mod-Shift-ArrowLeft': selectDocStart, */
        /* 'Mod-Shift-ArrowRight': selectDocEnd, */
      }),
      keymap(baseKeymap)
    ]

    if (this.lineNumbers) {
      extensions.push(lineNumbers())
    }

    this.codeEditorRef = new EditorView({
      state: EditorState.create({
        doc: textContent,
        extensions
      })
    })

    return root
      ?.querySelector('#codeEditorTarget')
      ?.replaceWith(this.codeEditorRef.dom)
  }

  protected componentDidLoad() {
    this.initCodeMirror()
  }

  private getCodeContent = () => this.codeEditorRef.state.toJSON().doc

  /**
   * Public method, returning the CodeChunk contents as Stencila JSON.
   */
  @Method()
  public async getJSON(): Promise<CodeChunk> {
    return Promise.resolve(
      codeChunk({
        text: this.getCodeContent(),
        programmingLanguage: this.activeProgrammingLanguage
      })
    )
  }

  /**
   * Prevents keyboard event listeners attached to parent DOM elements from firing.
   * This is to avoid conflicts when user has focused on the editor.
   */
  private stopEventPropagation = (e: KeyboardEvent) => {
    e.stopPropagation()
  }

  /**
   * Brings DOM focus to the code editor
   */
  private focusEditor = (): void => {
    this.codeEditorRef.focus()
  }

  public render() {
    return (
      <Host>
        <div class="codeContainer">
          <div
            class="codeEditor"
            onKeyDown={this.stopEventPropagation}
            onClick={this.focusEditor}
          >
            <div class="hidden">
              <slot name={slots.text} />
            </div>
            <div id="codeEditorTarget" />
          </div>

          <menu>
            <select onChange={this.setProgrammingLanguage}>
              {this.programmingLanguages.map(language => (
                <option
                  value={language.toLowerCase()}
                  selected={
                    language.toLowerCase() === this.activeProgrammingLanguage
                  }
                >
                  {language}
                </option>
              ))}
            </select>
          </menu>
        </div>
      </Host>
    )
  }
}
