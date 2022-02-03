import { Component, Element, h, Host, State } from '@stencil/core'
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
  @Element() el: HTMLStencilaNodeListElement

  private emptyOutputMessage = 'No output to show'

  @State() isEmpty = true

  checkIfEmpty = () => {
    const slotted = getSlotByName(this.el)(['default', 'outputs'])

    if (slotted.length === 0) {
      this.isEmpty = true
    } else {
      this.isEmpty = slotted.every((el) => {
        const content = el.innerHTML?.trim()
        return content === '' || content === this.emptyOutputMessage
      })
    }
  }

  private childObserver = new MutationObserver(this.checkIfEmpty)

  componentWillLoad() {
    this.checkIfEmpty()

    this.childObserver.observe(this.el, {
      childList: true,
      subtree: true,
    })
  }

  disconnectedCallback(): void {
    this.childObserver?.disconnect()
  }

  public render() {
    return (
      <Host>
        <slot />

        <em class={{ hidden: !this.isEmpty, emptyContentMessage: true }}>
          {this.emptyOutputMessage}
        </em>
      </Host>
    )
  }
}
