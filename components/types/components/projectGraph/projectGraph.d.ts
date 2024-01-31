import { Graph } from './types';
export declare class ProjectGraph {
  private el?;
  /**
   * The project graph data to render
   */
  graph: Graph;
  updateGraph(nextGraph: Graph): void;
  private graphRef;
  private nodeContainer;
  private linkContainer;
  private hullContainer;
  private drawGraph;
  componentDidLoad(): void;
  render(): any;
}
