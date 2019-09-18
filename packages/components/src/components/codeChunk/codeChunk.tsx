import {
  Component,
  Event,
  EventEmitter,
  h,
  Host,
  Prop,
  State
} from '@stencil/core'

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

  /**
   * Whether the code section is visible or not
   */
  @Prop({
    attr: 'data-collapsed'
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

  protected componentWillLoad() {
    document.addEventListener('collapseAllCode', this.collapseAllListenHandler)
  }

  protected componentDidUnload() {
    document.removeEventListener(
      'collapseAllCode',
      this.collapseAllListenHandler
    )
  }

  public render() {
    const actions = [
      <stencila-button isSecondary={true} size="xsmall" disabled>
        Run
      </stencila-button>,
      <stencila-button
        isSecondary={true}
        size="xsmall"
        onClick={this.toggleCodeVisibility}
      >
        {this.isCodeCollapsed ? 'Show' : 'Hide'} Code
      </stencila-button>,
      <stencila-button
        isSecondary={true}
        size="xsmall"
        onClick={() => this.collapseAllCodeHandler(!this.isCodeCollapsed)}
      >
        {this.isCodeCollapsed ? 'Show' : 'Hide'} All Code Cells
      </stencila-button>
    ]

    return (
      <Host>
        <stencila-action-menu actions={actions} />

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
