import {
  Component,
  Element,
  Event,
  EventEmitter,
  h,
  Host,
  Prop,
  State
} from '@stencil/core'

import { EditorView } from '@codemirror/next/view'
import { EditorState } from '@codemirror/next/state'
import {
  history,
  redo,
  redoSelection,
  undo,
  undoSelection
} from '@codemirror/next/history'
import { bracketMatching } from '@codemirror/next/matchbrackets'
import { keymap } from '@codemirror/next/keymap'
import { baseKeymap, indentSelection } from '@codemirror/next/commands'
import { lineNumbers } from '@codemirror/next/gutter'
import { javascript } from '@codemirror/next/lang-javascript'
import { html } from '@codemirror/next/lang-html'
import { defaultHighlighter } from '@codemirror/next/highlight'
import { specialChars } from '@codemirror/next/special-chars'

interface CollapseEvent extends CustomEvent {
  detail: {
    isCollapsed: boolean
  }
}

@Component({
  tag: 'stencila-code-chunk',
  styleUrls: {
    default: 'codeChunk.css',
    material: 'codeChunk.material.css'
  },
  scoped: true
})
export class CodeChunk {
  public static readonly elementName = 'stencila-code-chunk'

  public static readonly slots = {
    text: 'text',
    outputs: 'outputs'
  }

  @Element() private el: HTMLElement

  /**
   * Whether the code section is visible or not
   */
  @Prop({
    attribute: 'data-collapsed'
  })
  public isCodeCollapsedProp: boolean = false

  @State() private isCodeCollapsed: boolean = this.isCodeCollapsedProp

  private toggleCodeVisibility = (): void => {
    this.isCodeCollapsed = !this.isCodeCollapsed
  }

  private collapseAllCodeHandler(isCollapsed: boolean) {
    this.collapseAllCode.emit({ isCollapsed })
  }

  @Event({
    eventName: 'collapseAllCode'
  })
  public collapseAllCode: EventEmitter

  private collapseAllListenHandler = (e: CollapseEvent) => {
    this.isCodeCollapsed = e.detail.isCollapsed
  }

  @State() isOutputEmpty: boolean = true

  private emptyOutputMessage = 'No output to show'

  private outputExists = () => {
    const output: HTMLElement = this.el.querySelector(
      `[slot=${CodeChunk.slots.outputs}]`
    )

    const isEmpty =
      output === null ? true : output.innerHTML.trim() === '' ? true : false

    this.isOutputEmpty = isEmpty

    if (output && isEmpty) {
      output.innerHTML = `<em class="emptyContentMessage">${this.emptyOutputMessage}</em>`
    } else if (isEmpty) {
      const child = document.createElement('figure')
      child.setAttribute('slot', CodeChunk.slots.outputs)
      this.el.appendChild(child)
      child.innerHTML = `<em class="emptyContentMessage">${this.emptyOutputMessage}</em>`
    }
  }

  protected componentWillLoad() {
    document.addEventListener('collapseAllCode', this.collapseAllListenHandler)
  }

  protected componentDidLoad() {
    const textContent: HTMLElement = this.el.querySelector(
      `[slot="${CodeChunk.slots.text}"]`
    )

    let isMac = /Mac/.test(navigator.platform)

    let myView = new EditorView({
      state: EditorState.create({
        doc: textContent.innerText,
        extensions: [
          history(),
          bracketMatching(),
          lineNumbers(),
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
            'Shift-Tab': indentSelection
          }),
          keymap(baseKeymap)
        ]
      })
    })

    // document.body.appendChild(myView.dom)
    textContent.replaceWith(myView.dom)

    this.outputExists()
  }

  protected componentDidUnload() {
    document.removeEventListener(
      'collapseAllCode',
      this.collapseAllListenHandler
    )
  }

  public render() {
    return (
      <Host>
        <stencila-action-menu expandable={true}>
          <stencila-button
            isSecondary={true}
            icon={this.isCodeCollapsed ? 'eye' : 'eye-off'}
            size="xsmall"
            onClick={this.toggleCodeVisibility}
          >
            {this.isCodeCollapsed ? 'Show' : 'Hide'} Source
          </stencila-button>
          <stencila-button
            isSecondary={true}
            icon={this.isCodeCollapsed ? 'eye' : 'eye-off'}
            size="xsmall"
            onClick={() => this.collapseAllCodeHandler(!this.isCodeCollapsed)}
          >
            {this.isCodeCollapsed ? 'Show' : 'Hide'} All Sources
          </stencila-button>
          <stencila-button
            icon="play"
            isSecondary={true}
            size="xsmall"
            ariaLabel="Run Code"
            disabled
            slot="persistentActions"
          >
            Run
          </stencila-button>
        </stencila-action-menu>

        <div
          class={`codeContainer ${
            this.isCodeCollapsed === true ? 'hidden' : ''
          }`}
        >
          <slot name={CodeChunk.slots.text} />
        </div>

        <slot name={CodeChunk.slots.outputs} />
      </Host>
    )
  }
}
