import { EventEmitter } from '../../../stencil-public-runtime';
import { Config, Data, Layout } from 'plotly.js';
export declare class ImagePlotlyComponent {
  private el;
  private plotContainer;
  /**
   * The Plotly data to render as an interactive visualization.
   */
  data?: Data[];
  /**
   * The Plotly layout settings object
   */
  layout?: Partial<Layout>;
  /**
   * The Plotly configuration object
   */
  config?: Partial<Config>;
  private plotIsRendered;
  /** Custom event emitter to indicate that the loading of the Plotly.js script has finished */
  plotlyLoaded: EventEmitter;
  /** When detecting that the Plotly.js has loaded, render the data if it hasn’t been rendered already */
  onPlotlyLoaded(): void;
  private renderPlot;
  private getPlotContent;
  componentWillLoad(): Promise<unknown> | void;
  componentShouldUpdate(nexValue: unknown, oldValue: unknown, varName: string): boolean;
  componentWillUpdate(): void;
  render(): HTMLStencilaImagePlotlyElement;
}
