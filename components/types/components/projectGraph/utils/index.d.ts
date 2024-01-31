import { SimulationNodeDatum } from 'd3-force';
import { Resource } from '../types';
export declare type GraphDatum = SimulationNodeDatum & Resource;
export declare const initGraph: (el: HTMLDivElement) => {
  height: number;
  width: number;
  svg: import("d3-selection").Selection<SVGGElement, unknown, null, undefined>;
};
