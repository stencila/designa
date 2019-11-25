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

  @Prop() public executeHandler: (codeChunk: ICodeChunk) => Promise<ICodeChunk>

  private onExecuteHandler_ = async () => {
    const node = await this.getJSON()

    if (this.executeHandler) {
      const computed = await this.executeHandler(node)
      this.updateErrors(computed.errors)
      this.outputs = computed.outputs
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
    this.codeEditorRef = this.el.querySelector('stencila-code-editor')
  }

  @State() outputs: ICodeChunk['outputs']

  @State() codeErrors: ICodeChunk['errors']

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

        <stencila-node-list nodes={this.outputs}>
          <slot name={CodeChunk.slots.outputs} />
        </stencila-node-list>

        {this.codeErrors}
      </Host>
    )
  }
}
