export declare class ActionMenu {
  private el;
  /**
   * List of buttons to include in Action Menu.
   */
  actions: HTMLButtonElement[];
  private hasSecondaryActions;
  private isCollapsed;
  private toggleActionMenu;
  private width;
  private isAnimating;
  private actionContainerRef;
  private isTransitioning;
  private calculateWidth;
  private observer;
  private checkForSecondaryActions;
  protected componentWillLoad(): void;
  protected componentDidLoad(): void;
  protected disconnectedCallback(): void;
  render(): any;
}
