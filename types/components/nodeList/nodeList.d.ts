import { Node } from '@stencila/schema';
export declare class OutputsList {
  private el;
  /**
   * Array of nodes to render.
   */
  nodes: Node[] | undefined;
  isEmpty: boolean;
  private checkIfEmpty;
  private emptyOutputMessage;
  componentWillLoad(): void;
  componentWillUpdate(): void;
  private renderNodes;
  private renderNode;
  render(): any;
}
