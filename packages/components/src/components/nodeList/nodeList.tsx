import { Component, Element, h, Host, Prop, State } from '@stencil/core'
import { isA, isCode, isPrimitive, Node } from '@stencila/schema'
import { isEmpty } from 'fp-ts/lib/Array'
import { preferredImageObjectComponent } from '../imageObject/imageObjectUtils'

const slots = {
  nodes: 'outputs',
  errors: 'errors',
}

@Component({
  tag: 'stencila-node-list',
  styleUrls: {
    default: 'nodeList.css',
    material: 'nodeList.css',
  },
  scoped: true,
})
export class OutputsList {
  @Element() private el: HTMLStencilaNodeListElement

  /**
   * Array of nodes to render.
   */
  @Prop() nodes: Node[] | undefined = undefined

  @State() isEmpty =
    this.nodes === undefined ||
    (this.nodes !== undefined && isEmpty(this.nodes))

  private checkIfEmpty = (): boolean => {
    let empty: boolean

    /**
     * If the `nodes` prop has been passed in, we can ignore the `<slotted>` content,
     * and use the props as the most up to date output content.
     */
    if (this.nodes !== undefined) {
      empty = isEmpty(this.nodes)
      this.isEmpty = empty
      return empty
    }

    /**
     * If the `outputs` slot doesn't exist, or contains no content, the output is empty.
     */
    const output = this.el.querySelector(`[slot=${slots.nodes}]`)
    empty = output === null ? true : output.innerHTML.trim() === ''

    this.isEmpty = empty
    return empty
  }

  private emptyOutputMessage = 'No output to show'

  componentDidLoad(): void {
    this.checkIfEmpty()
  }

  componentWillUpdate(): void {
    this.checkIfEmpty()
  }

  private renderNodes = (nodes?: Node[]) => {
    return nodes?.map((node) => this.renderNode(node))
  }

  private renderNode = (node: Node): string | HTMLElement => {
    if (isPrimitive(node)) {
      const text =
        typeof node === 'string' || typeof node === 'number'
          ? node
          : JSON.stringify(node)

      return (
        <pre>
          <output>{text}</output>
        </pre>
      )
    } else if (isCode(node)) {
      return (
        <pre>
          <output>{node.text}</output>
        </pre>
      )
    } else if (isA('ImageObject', node)) {
      return preferredImageObjectComponent(node)
    } else if (isA('Datatable', node)) {
      return <stencila-data-table table={node}></stencila-data-table>
    }

    return JSON.stringify(node)
  }

  public render() {
    return (
      <Host>
        <div class={{ hidden: this.nodes !== undefined, slot: true }}>
          <slot name={slots.nodes} />
        </div>

        {this.isEmpty && (
          <em class="emptyContentMessage">{this.emptyOutputMessage}</em>
        )}

        {!this.isEmpty && <figure>{this.renderNodes(this.nodes)}</figure>}

        <slot />
      </Host>
    )
  }
}
