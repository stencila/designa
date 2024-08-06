import { MediaObject, Node } from '@stencila/schema';
import { Data, Layout, Config } from 'plotly.js';
export declare const plotlyMediaType = "application/vnd.plotly.v1+json";
export interface PlotlyObject {
  data: Data[];
  config?: Partial<Config>;
  layout?: Partial<Layout>;
}
export interface PlotlyNode extends PlotlyObject, MediaObject, Record<string, unknown> {
  mediaType: string;
}
export declare const isPlotlyObject: (node: Node) => node is PlotlyNode;
