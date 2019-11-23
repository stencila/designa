import { baseKeymap, indentSelection } from '@codemirror/next/commands'
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
import { codeChunk } from '@stencila/schema'
// @ts-ignore
import { patch as selectPolyfill } from 'shadow-root-get-selection-polyfill'

// Workaround for Stencil build issues
export type ICodeChunk = ReturnType<typeof codeChunk>

@Component({
  tag: 'stencila-code-editor',
  styleUrls: {
    default: 'codeEditor.css',
    material: 'codeEditor.material.css'
  },
  shadow: true
})
export class CodeChunk {
  public static readonly elementName = 'stencila-code-editor'

  public static readonly slots = {
    default: undefined
  }

  @Element() private el: HTMLElement

  private codeEditorRef: EditorView

  /**
   * List of all supported programming languages
   */
  @Prop() public programmingLanguages: string[] = ['Python', 'JavaScript']

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
  @Prop() public programmingLanguage: string

  @State() activeProgrammingLanguage =
    this.programmingLanguage || this.programmingLanguages[0]?.toLowerCase()

  /**
   * Function to be evaluated over the contents of the CodeChunk.
   */
  @Prop() public executeHandler: (codeChunk: ICodeChunk) => Promise<ICodeChunk>

  /**
   * Wrapper around the `executeHandler` function, needed to run using CodeMirror keyboard shortcuts.
   */
  runCodeView: Command = () => {
    this.getJSON().then(codeChunk => {
      this.executeHandler(codeChunk)
    })
    return true
  }

  /**
   * Determines the visibility of line numbers
   */
  @Prop() public lineNumbers: boolean = true

  private initCodeMirror = () => {
    const textContent = this.el.textContent || ''

    let isMac = /Mac/.test(navigator.platform)

    const root = this.el?.shadowRoot
    const slot = root?.querySelector('slot')

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
        'Shift-Tab': indentSelection,
        'Mod-Enter': this.runCodeView
      }),
      keymap(baseKeymap)
    ]

    if (this.lineNumbers) {
      extensions.push(lineNumbers())
    }

    this.codeEditorRef = new EditorView({
      root: root || undefined,
      state: EditorState.create({
        doc: textContent,
        extensions
      })
    })

    slot?.replaceWith(this.codeEditorRef.dom)
  }

  protected componentWillLoad() {
    selectPolyfill()
  }

  protected componentDidLoad() {
    this.initCodeMirror()
  }

  private getCodeContent = () => this.codeEditorRef.state.toJSON().doc

  /**
   * Public method, returning the CodeChunk contents as Stencila JSON.
   */
  @Method()
  public async getJSON(): Promise<ICodeChunk> {
    return codeChunk(this.getCodeContent(), {
      programmingLanguage: this.activeProgrammingLanguage
    })
  }

  /**
   * Prevents keyboard event listeners attached to parent DOM elements from firing.
   * This is to avoid conflicts when user has focused on the editor.
   */
  private stopEventPropagation = (e: KeyboardEvent) => {
    e.stopPropagation()
  }

  public render() {
    return (
      <Host>
        <div class="codeContainer">
          <div onKeyDown={this.stopEventPropagation}>
            <slot />
          </div>

          <menu>
            <select onChange={this.setProgrammingLanguage}>
              {this.programmingLanguages.map((language, idx) => (
                <option
                  value={language.toLowerCase()}
                  selected={
                    !this.activeProgrammingLanguage
                      ? idx === 0
                      : language.toLowerCase() ===
                        this.activeProgrammingLanguage
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
