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

  @State() private hasSecondaryActions: boolean

  @State() private isCollapsed = false

  private toggleActionMenu = () => (this.isCollapsed = !this.isCollapsed)

  @State() private width = 'auto'
  @State() private isAnimating = false

  private actionContainerRef: HTMLSpanElement | undefined
  private isTransitioning = false

  private calculateWidth = () => {
    if (this.actionContainerRef && this.isTransitioning === false) {
      this.width = 'auto'

      const width = this.actionContainerRef.getBoundingClientRect().width

      this.width = `${width}px`
    }
  }

  private observer = new window.MutationObserver(this.calculateWidth)

  private checkForSecondaryActions = (): boolean => {
    this.hasSecondaryActions = Array.from(this.el.children).some((child) => {
      return child.slot === ''
    })
    return this.hasSecondaryActions
  }

  protected componentWillLoad(): void {
    this.checkForSecondaryActions()
  }

  protected componentDidLoad(): void {
    if (this.actionContainerRef) {
      window.requestAnimationFrame(() => {
        if (this.actionContainerRef && this.hasSecondaryActions) {
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
      })
    }
  }

  protected disconnectedCallback(): void {
    this.observer.disconnect()
  }

  public render() {
    if (this.el.children.length <= 0) return null

    return (
      <nav>
        <span class="persistentActions">
          <slot name={slots.persistentActions} />
        </span>

        <span
          class={{
            secondaryActions: true,
            hidden: !this.hasSecondaryActions,
          }}
        >
          <stencila-button
            onClick={this.toggleActionMenu}
            icon="more"
            color="key"
            minimal={true}
            size="xsmall"
            iconOnly={true}
            ariaLabel="Toggle Action Menu"
          ></stencila-button>

          <span
            class={{
              actionContainer: true,
              isAnimating: this.isAnimating,
              isCollapsed: this.isCollapsed,
            }}
            ref={(el) => (this.actionContainerRef = el)}
            style={{ '--max-width': this.width }}
          >
            <slot />
          </span>
        </span>
      </nav>
    )
  }
}
