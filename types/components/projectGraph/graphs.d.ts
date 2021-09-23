import { SimulationLinkDatum, SimulationNodeDatum } from 'd3-force';
import { FileResource, Graph, GraphNode, Relation } from './types';
export declare type GraphLink = SimulationLinkDatum<SimulationNodeDatum & GraphNode> & {
  relation: Relation;
  group: string;
};
export declare const graphEdgeToLinks: (graph: Graph) => GraphLink[];
declare type GroupedGraph = {
  nodes: GraphNode[];
  links: GraphLink[];
  groupLinks: GraphLink[];
  groups: (FileResource & SimulationNodeDatum)[];
};
export declare const graphToGroupedGraph: (graph: Graph) => GroupedGraph;
export declare const isInterGroupLink: (source: GraphLink['source'], target: GraphLink['target']) => boolean;
export {};
