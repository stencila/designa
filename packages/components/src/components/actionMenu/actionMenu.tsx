import { Component, Element, h, Prop, State } from '@stencil/core'

const slots = {
  default: '',
  persistentActions: 'persistentActions',
}

@Component({
  tag: 'stencila-action-menu',
  styleUrls: {
    default: 'actionMenu.css',
    material: 'actionMenu.css',
  },
  scoped: true,
})
export class ActionMenu {
  @Element() private el: HTMLStencilaActionMenuElement

  /**
   * List of buttons to include in Action Menu.
   */
  @Prop()
  public actions: HTMLButtonElement[]

  /**
   * Defines whether the Action Menu can be collapsed and expanded
   */
  @Prop()
  public expandable = false

  @State() private hasSecondaryActions: boolean

  @State() private isCollapsed = false

  private toggleActionMenu = () => (this.isCollapsed = !this.isCollapsed)

  @State() private width = 'auto'
  @State() private isAnimating = false

  private actionContainerRef: HTMLSpanElement | null
  private isTransitioning = false

  private calculateWidth = () => {
    if (this.actionContainerRef !== null && this.isTransitioning === false) {
      this.width = 'auto'
      const width = this.actionContainerRef.getBoundingClientRect().width
      this.width = `${width}px`
    }
  }

  private observer = new window.MutationObserver(this.calculateWidth)

  private checkForSecondaryActions = (): boolean => {
    const hasSecondaryActions =
      this.el
        .querySelector('.secondaryActions .actionContainer')
        ?.innerHTML.trim() === ''
    this.hasSecondaryActions = hasSecondaryActions
    return hasSecondaryActions
  }

  protected componentDidLoad(): void {
    this.checkForSecondaryActions()

    if (this.expandable) {
      this.actionContainerRef = this.el.querySelector('.actionContainer')

      if (this.actionContainerRef !== null) {
        this.actionContainerRef.addEventListener(
          'transitionstart',
          () => (this.isTransitioning = true)
        )
        this.actionContainerRef.addEventListener(
          'transitionend',
          () => (this.isTransitioning = false)
        )
        this.observer.observe(this.el, {
          characterData: true,
          subtree: true,
        })
        this.calculateWidth()
        this.isCollapsed = true
      }
    }
  }

  protected componentDidUnload(): void {
    this.observer.disconnect()
  }

  public render() {
    return (
      <nav>
        <span
          class={{
            secondaryActions: true,
            hidden: this.hasSecondaryActions,
          }}
        >
          <span
            class={{
              actionContainer: true,
              isAnimating: this.isAnimating,
              isCollapsed: this.isCollapsed,
            }}
            style={{ '--max-width': this.width }}
          >
            <slot />
          </span>

          <stencila-button
            onClick={this.toggleActionMenu}
            icon="more"
            color="key"
            minimal={true}
            size="xsmall"
            iconOnly={true}
            ariaLabel="Toggle Action Menu"
          ></stencila-button>
        </span>

        <span class="persistentActions">
          <slot name={slots.persistentActions} />
        </span>
      </nav>
    )
  }
}
