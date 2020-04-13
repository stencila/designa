import {
  baseKeymap,
  moveLineEnd,
  moveLineStart,
} from '@codemirror/next/commands'
import { lineNumbers } from '@codemirror/next/gutter'
import { defaultHighlighter } from '@codemirror/next/highlight'
import {
  history,
  redo,
  redoSelection,
  undo,
  undoSelection,
} from '@codemirror/next/history'
import { keymap } from '@codemirror/next/keymap'
import { html } from '@codemirror/next/lang-html'
import { javascript } from '@codemirror/next/lang-javascript'
import { bracketMatching } from '@codemirror/next/matchbrackets'
import { specialChars } from '@codemirror/next/special-chars'
import { EditorState } from '@codemirror/next/state'
import { Command, EditorView } from '@codemirror/next/view'
import { Component, Element, h, Host, Method, Prop } from '@stencil/core'

export interface EditorContents {
  text: string
  language: string
}

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

  private initCodeMirror = () => {
    const isMac = navigator.platform.includes('Mac')

    const root = this.el
    const slot = root.querySelector('[slot]')
    const textContent =
      slot?.textContent ||
      root?.querySelector(`#${cssIds.editorTarget}`)?.textContent ||
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
        'Mod-u': (view) => undoSelection(view) || true,
        [isMac ? 'Mod-Shift-u' : 'Alt-u']: redoSelection,
        'Ctrl-y': isMac ? undefined : redo,
        'Mod-Enter': this.execute,
        'Mod-ArrowLeft': moveLineStart,
        'Mod-ArrowRight': moveLineEnd,
        // FIXME: The following commands have no effect
        /* 'Mod-]': indentSelection, */
        /* 'Mod-Shift-ArrowLeft': selectDocStart, */
        /* 'Mod-Shift-ArrowRight': selectDocEnd, */
      }),
      keymap(baseKeymap),
    ]

    if (this.lineNumbers) {
      extensions.push(lineNumbers())
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
          </menu>
        </div>
      </Host>
    )
  }
}
