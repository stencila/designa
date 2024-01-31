/**
 * @slot default - A list or collection of elements to render. If empty, a message stating "No output to show" will be rendered instead.
 */
export declare class OutputsList {
  el: HTMLStencilaNodeListElement;
  private emptyOutputMessage;
  isEmpty: boolean;
  checkIfEmpty: () => void;
  private childObserver;
  componentWillLoad(): void;
  disconnectedCallback(): void;
  render(): any;
}
