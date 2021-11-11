import { Component, Element, h, Host, Prop, State } from '@stencil/core'
import { Node } from '@stencila/schema'
import { getSlotByName } from '../utils/slotSelectors'

/**
 * @slot default - A list or collection of elements to render. If empty, a message stating "No output to show" will be rendered instead.
 */
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

  private outputSlot: Element | undefined

  /**
   * Array of nodes to render.
   */
  @Prop() nodes: Node[] | undefined = undefined

  private checkIfEmpty = (): boolean => {
    /**
     * If the `outputs` slot doesn't exist, or contains no content, the output is empty.
     */
    const empty: boolean =
      this.outputSlot?.children.length === 0 ||
      Array.from(this.outputSlot?.children ?? []).reduce(
        (text: string, el) => text + el.innerHTML.trim(),
        ''
      ) === ''

    this.isEmpty = empty
    return empty
  }

  @State() isEmpty = true

  private outputSlotObserver = new MutationObserver(this.checkIfEmpty)

  private emptyOutputMessage = 'No output to show'

  componentWillLoad(): void {
    this.outputSlot = getSlotByName(this.el)('outputs')
    this.checkIfEmpty()
  }

  componentDidLoad(): void {
    if (this.outputSlot) {
      this.outputSlotObserver.observe(this.outputSlot, {
        subtree: true,
        childList: true,
        characterData: true,
      })
    }
  }

  public render() {
    return (
      <Host>
        {this.isEmpty && (
          <em class="emptyContentMessage">{this.emptyOutputMessage}</em>
        )}

        <div ref={(el) => (this.outputSlot = el)}>
          <slot />
        </div>
      </Host>
    )
  }
}
