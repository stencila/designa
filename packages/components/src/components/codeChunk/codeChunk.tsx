import {
  Component,
  Element,
  Event,
  EventEmitter,
  h,
  Host,
  Listen,
  Method,
  Prop,
  State
} from '@stencil/core'
import { codeChunk } from '@stencila/schema'

// Workaround for Stencil build issues
export type ICodeChunk = ReturnType<typeof codeChunk>

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

  private codeEditorRef: HTMLStencilaCodeEditorElement | null

  /**
   * Programming language of the CodeChunk
   */
  @Prop({
    attribute: 'data-programmingLanguage'
  })
  public programmingLanguageProp: string

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

  @Listen('collapseAllCode', { target: 'window' })
  collapseAllListenHandlerTwo(event: CollapseEvent) {
    this.collapseAllListenHandler(event)
  }

  @State() isOutputEmpty: boolean = true

  private emptyOutputMessage = 'No output to show'

  private outputExists = () => {
    const output = this.el.querySelector(`[slot=${CodeChunk.slots.outputs}]`)

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

  @Prop() public executeHandler: (codeChunk: ICodeChunk) => Promise<ICodeChunk>

  private onExecuteHandler_ = async () => {
    const node = await this.getJSON()

    if (this.executeHandler) {
      const computed = await this.executeHandler(node)
      this.updateErrors(computed.errors)
      this.updateOutputs(computed.outputs)
      return computed
    }

    return node
  }

  @State() executeCodeState: 'INITIAL' | 'PENDING' | 'RESOLVED'

  private executeCode = () => {
    this.executeCodeState = 'PENDING'
    this.onExecuteHandler_().then(res => {
      this.executeCodeState = 'RESOLVED'
      return res
    })
  }

  protected componentDidLoad() {
    this.outputExists()
    this.codeEditorRef = this.el.querySelector('stencila-code-editor')
  }

  @State() outputs: ICodeChunk['outputs']

  @State() codeErrors: ICodeChunk['errors']

  private makeOutput = (text: string): HTMLPreElement => {
    const node = document.createElement('pre')
    const res = document.createElement('output')
    res.textContent = text
    node.appendChild(res)
    return node
  }

  private updateOutputs = (outputs: ICodeChunk['outputs'] = []) => {
    let output = this.el.querySelector(`[slot=${CodeChunk.slots.outputs}]`)

    if (!output) {
      output = document.createElement('figure')
      output.setAttribute('slot', CodeChunk.slots.outputs)
      this.el.appendChild(output)
    }

    output.innerHTML = ''

    outputs.map(o => {
      if (output) {
        if (typeof o === 'string' || typeof o === 'number') {
          output.appendChild(this.makeOutput(o.toString()))
        } else if (Array.isArray(o)) {
          output.appendChild(this.makeOutput(JSON.stringify(o)))
        } else if (o !== null && typeof o === 'object') {
          // @ts-ignore
          if (o.text) {
            // @ts-ignore
            output.appendChild(this.makeOutput(o.text))
          } else {
            output.appendChild(this.makeOutput(JSON.stringify(o, null, 2)))
          }
        }
      }
    })

    if (outputs.length === 0) {
      this.el.removeChild(output)
    }
  }

  private updateErrors = (errors: ICodeChunk['errors'] = []) => {
    this.codeErrors = errors.map(error => (
      <stencila-code-error
        kind={(error.kind as unknown) as 'error' | 'warning' | 'incapable'}
        hasStacktrace={error.trace !== undefined}
      >
        {error.message}
        <pre slot="stacktrace">{error.trace}</pre>
      </stencila-code-error>
    ))
  }

  @Method()
  public async getJSON(): Promise<ICodeChunk> {
    return this.codeEditorRef?.getJSON() || codeChunk('')
  }

  public render() {
    return (
      <Host>
        <stencila-action-menu expandable={true}>
          <stencila-button
            isSecondary={true}
            onClick={this.toggleCodeVisibility}
            icon={this.isCodeCollapsed ? 'eye' : 'eye-off'}
            size="xsmall"
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
          {this.executeHandler && (
            <stencila-button
              icon="play"
              isSecondary={true}
              size="xsmall"
              ariaLabel="Run Code"
              slot="persistentActions"
              clickHandlerProp={this.executeCode}
              isLoading={this.executeCodeState === 'PENDING'}
            >
              Run
            </stencila-button>
          )}
        </stencila-action-menu>

        <div
          class={`codeContainer ${
            this.isCodeCollapsed === true ? 'hidden' : ''
          }`}
        >
          <stencila-code-editor
            programmingLanguage={this.programmingLanguageProp}
          >
            <slot name={CodeChunk.slots.text} />
          </stencila-code-editor>
        </div>

        <slot name={CodeChunk.slots.outputs} />

        {this.codeErrors}
      </Host>
    )
  }
}
