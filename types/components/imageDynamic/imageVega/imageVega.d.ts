import { EventEmitter } from '../../../stencil-public-runtime';
import { VisualizationSpec } from 'vega-embed';
import { VegaLoadEvent } from './imageVegaUtils';
export declare class ImageVegaComponent {
  private el;
  private plotContainer;
  private vegaDependency;
  private detectVegaDependency;
  /**
   * The Vega or Vega-Lite spec
   * @see https://vega.github.io/vega/docs/specification/
   */
  spec?: VisualizationSpec | string;
  /**
   * A JavaScript object containing options for embedding
   * @see https://github.com/vega/vega-embed#options
   */
  options?: Record<string, unknown>;
  private plotIsRendered;
  private getPlotContent;
  /** Custom event emitter to indicate that the loading of the Vega JS script has finished */
  vegaLoaded: EventEmitter<VegaLoadEvent>;
  /** When detecting that the Vega JS has loaded, render the data if it hasn’t been rendered already */
  onVegaLoaded(e: CustomEvent<VegaLoadEvent>): void;
  private renderPlot;
  componentWillLoad(): Promise<unknown> | void;
  componentShouldUpdate(nexValue: unknown, oldValue: unknown, varName: string): boolean;
  componentWillUpdate(): void;
  render(): HTMLStencilaImageVegaElement;
}
