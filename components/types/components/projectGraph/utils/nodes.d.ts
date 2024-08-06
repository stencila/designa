import { SimulationNodeDatum } from 'd3-force';
declare type NodeType = string | number | SimulationNodeDatum;
export declare const getNodeX: (node: NodeType) => number;
export declare const getNodeY: (node: NodeType) => number;
export {};
