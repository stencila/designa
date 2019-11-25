import { Component, Element, h, Prop, State, Host } from '@stencil/core'
import { isCode, isPrimitive, Node } from '@stencila/schema'
import { isEmpty } from 'fp-ts/lib/Array'

@Component({
  tag: 'stencila-node-list',
  styleUrls: {
    default: 'nodeList.css',
    material: 'nodeList.css'
  },
  scoped: true
})
export class OutputsList {
  public static readonly elementName = 'stencila-node-list'

  public static readonly slots = {
    nodes: 'outputs'
  }

  @Element() private el: HTMLElement

  /*
   * Array of nodes to render.
   */
  @Prop() nodes: Node[]

  @State() isEmpty: boolean = !(this.nodes && !isEmpty(this.nodes))

  checkIfEmpty = (): boolean => {
    /**
     * If the `nodes` prop has been passed in, we can ignore the `<slotted>` content,
     * and use the props as the most up to date output content.
     */
    const propsAreEmpty = this.nodes && isEmpty(this.nodes)

    if (propsAreEmpty === false) {
      this.isEmpty = false
      return false
    }

    /**
     * If the `outputs` slot doesn't exist, or contains no content, the output is empty.
     */
    const output = this.el.querySelector(`[slot=${OutputsList.slots.nodes}]`)
    const empty = !output ? true : output.innerHTML.trim() === '' ? true : false

    this.isEmpty = empty
    return empty
  }

  private emptyOutputMessage = 'No output to show'

  componentDidLoad() {
    this.checkIfEmpty()
  }

  componentWillUpdate() {
    this.checkIfEmpty()
  }

  private renderNodes = (nodes?: Node[]) => {
    return nodes?.map(node => this.renderNode(node))
  }

  private renderNode = (node: Node): string => {
    if (isPrimitive(node)) {
      return (
        <pre>
          <output>{JSON.stringify(node)}</output>
        </pre>
      )
    } else if (isCode(node)) {
      return (
        <pre>
          <output>{node.text}</output>
        </pre>
      )
    }

    return JSON.stringify(node)
  }

  public render() {
    return (
      <Host>
        <div class={{ hidden: !!this.nodes, slot: true }}>
          <slot name={OutputsList.slots.nodes} />
        </div>

        {this.isEmpty && (
          <em class="emptyContentMessage">{this.emptyOutputMessage}</em>
        )}

        {this.nodes && !this.isEmpty && (
          <figure>{this.renderNodes(this.nodes)}</figure>
        )}
      </Host>
    )
  }
}
