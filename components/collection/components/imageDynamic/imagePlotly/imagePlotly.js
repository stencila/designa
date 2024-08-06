import { Component, Element, Event, h, Host, Listen, Prop, State, } from '@stencil/core';
import { injectScriptSrc } from '../../utils/jsDeps';
import { createPlotContainer } from '../imageDynamicUtils';
import { plotlyMediaType } from './imagePlotlyUtils';
const plotlySrc = 'https://cdn.plot.ly/plotly-latest.min.js';
let plotlyIsLoaded;
export class ImagePlotlyComponent {
  constructor() {
    this.plotIsRendered = false;
    this.renderPlot = () => {
      var _a, _b, _c;
      const { data, layout = this.layout, config = this.config, } = (_a = this.getPlotContent()) !== null && _a !== void 0 ? _a : {};
      if (!data)
        return;
      this.plotContainer = (_b = this.plotContainer) !== null && _b !== void 0 ? _b : createPlotContainer(this.el);
      (_c = window.Plotly) === null || _c === void 0 ? void 0 : _c.react(this.plotContainer, data, layout, config).then(() => {
        if (!this.plotIsRendered) {
          this.plotIsRendered = true;
        }
      }).catch((err) => {
        console.error('Failed to render plot', err);
      });
    };
    this.getPlotContent = () => {
      if (this.data) {
        return { data: this.data, layout: this.layout, config: this.config };
      }
      const plotEl = this.el.querySelector(`[type="${plotlyMediaType}"]`);
      if (plotEl) {
        try {
          const content = plotEl.textContent;
          const contentParsed = JSON.parse(content !== null && content !== void 0 ? content : '');
          return Array.isArray(contentParsed)
            ? { data: contentParsed }
            : contentParsed;
        }
        catch (err) {
          console.error('Could not parse plot data');
        }
      }
      return undefined;
    };
  }
  /** When detecting that the Plotly.js has loaded, render the data if it hasn’t been rendered already */
  onPlotlyLoad() {
    if (!this.plotIsRendered) {
      this.renderPlot();
    }
  }
  componentWillLoad() {
    if (!this.plotIsRendered && plotlyIsLoaded) {
      this.renderPlot();
    }
    else {
      injectScriptSrc({
        src: plotlySrc,
        onLoad: () => {
          plotlyIsLoaded = true;
          this.plotlyLoad.emit();
        },
      });
    }
  }
  componentShouldUpdate(nexValue, oldValue, varName) {
    if (varName === 'plotIsRendered' && oldValue === nexValue) {
      return false;
    }
    return true;
  }
  componentWillUpdate() {
    this.renderPlot();
  }
  render() {
    return h(Host, { class: { imgHidden: this.plotIsRendered } });
  }
  static get is() { return "stencila-image-plotly"; }
  static get encapsulation() { return "scoped"; }
  static get originalStyleUrls() { return {
    "default": ["imagePlotly.css"],
    "material": ["imagePlotly.css"]
  }; }
  static get styleUrls() { return {
    "default": ["imagePlotly.css"],
    "material": ["imagePlotly.css"]
  }; }
  static get properties() { return {
    "data": {
      "type": "unknown",
      "mutable": false,
      "complexType": {
        "original": "Data[]",
        "resolved": "Data[] | undefined",
        "references": {
          "Data": {
            "location": "import",
            "path": "plotly.js"
          }
        }
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [],
        "text": "The Plotly data to render as an interactive visualization."
      }
    },
    "layout": {
      "type": "unknown",
      "mutable": false,
      "complexType": {
        "original": "Partial<Layout>",
        "resolved": "undefined | { colorway?: string[] | undefined; title?: string | Partial<{ text: string; font: Partial<Font>; xref: \"container\" | \"paper\"; yref: \"container\" | \"paper\"; x: number; y: number; xanchor: \"auto\" | \"left\" | \"center\" | \"right\"; yanchor: \"auto\" | \"top\" | \"middle\" | \"bottom\"; pad: Partial<Padding>; }> | undefined; titlefont?: Partial<Font> | undefined; autosize?: boolean | undefined; showlegend?: boolean | undefined; paper_bgcolor?: Color | undefined; plot_bgcolor?: Color | undefined; separators?: string | undefined; hidesources?: boolean | undefined; xaxis?: Partial<LayoutAxis> | undefined; xaxis2?: Partial<LayoutAxis> | undefined; xaxis3?: Partial<LayoutAxis> | undefined; xaxis4?: Partial<LayoutAxis> | undefined; xaxis5?: Partial<LayoutAxis> | undefined; xaxis6?: Partial<LayoutAxis> | undefined; xaxis7?: Partial<LayoutAxis> | undefined; xaxis8?: Partial<LayoutAxis> | undefined; xaxis9?: Partial<LayoutAxis> | undefined; yaxis?: Partial<LayoutAxis> | undefined; yaxis2?: Partial<LayoutAxis> | undefined; yaxis3?: Partial<LayoutAxis> | undefined; yaxis4?: Partial<LayoutAxis> | undefined; yaxis5?: Partial<LayoutAxis> | undefined; yaxis6?: Partial<LayoutAxis> | undefined; yaxis7?: Partial<LayoutAxis> | undefined; yaxis8?: Partial<LayoutAxis> | undefined; yaxis9?: Partial<LayoutAxis> | undefined; margin?: Partial<Margin> | undefined; height?: number | undefined; width?: number | undefined; hovermode?: false | \"closest\" | \"x\" | \"y\" | \"x unified\" | \"y unified\" | undefined; hoverdistance?: number | undefined; hoverlabel?: Partial<HoverLabel> | undefined; calendar?: Calendar | undefined; 'xaxis.range'?: [Datum, Datum] | undefined; 'xaxis.range[0]'?: Datum | undefined; 'xaxis.range[1]'?: Datum | undefined; 'yaxis.range'?: [Datum, Datum] | undefined; 'yaxis.range[0]'?: Datum | undefined; 'yaxis.range[1]'?: Datum | undefined; 'yaxis.type'?: AxisType | undefined; 'xaxis.type'?: AxisType | undefined; 'xaxis.autorange'?: boolean | undefined; 'yaxis.autorange'?: boolean | undefined; 'xaxis.title'?: string | undefined; 'yaxis.title'?: string | undefined; ternary?: {} | undefined; geo?: {} | undefined; mapbox?: Partial<Mapbox> | undefined; subplot?: string | undefined; radialaxis?: Partial<Axis> | undefined; angularaxis?: {} | undefined; dragmode?: false | \"zoom\" | \"pan\" | \"select\" | \"lasso\" | \"orbit\" | \"turntable\" | undefined; orientation?: number | undefined; annotations?: Partial<Annotations>[] | undefined; shapes?: Partial<Shape>[] | undefined; images?: Partial<Image>[] | undefined; updatemenus?: {} | undefined; sliders?: Partial<Slider>[] | undefined; legend?: Partial<Legend> | undefined; font?: Partial<Font> | undefined; scene?: Partial<Scene> | undefined; barmode?: \"group\" | \"stack\" | \"overlay\" | \"relative\" | undefined; barnorm?: \"\" | \"percent\" | \"fraction\" | undefined; bargap?: number | undefined; bargroupgap?: number | undefined; boxmode?: \"group\" | \"overlay\" | undefined; selectdirection?: \"h\" | \"v\" | \"d\" | \"any\" | undefined; hiddenlabels?: string[] | undefined; grid?: Partial<{ rows: number; roworder: \"top to bottom\" | \"bottom to top\"; columns: number; subplots: string[]; xaxes: string[]; yaxes: string[]; pattern: \"independent\" | \"coupled\"; xgap: number; ygap: number; domain: Partial<{ x: number[]; y: number[]; }>; xside: \"top\" | \"bottom\" | \"bottom plot\" | \"top plot\"; yside: \"left\" | \"right\" | \"left plot\" | \"right plot\"; }> | undefined; polar?: Partial<PolarLayout> | undefined; polar2?: Partial<PolarLayout> | undefined; polar3?: Partial<PolarLayout> | undefined; polar4?: Partial<PolarLayout> | undefined; polar5?: Partial<PolarLayout> | undefined; polar6?: Partial<PolarLayout> | undefined; polar7?: Partial<PolarLayout> | undefined; polar8?: Partial<PolarLayout> | undefined; polar9?: Partial<PolarLayout> | undefined; transition?: Transition | undefined; template?: Template | undefined; clickmode?: \"select\" | \"event\" | \"event+select\" | \"none\" | undefined; uirevision?: string | number | undefined; datarevision?: string | number | undefined; editrevision?: string | number | undefined; selectionrevision?: string | number | undefined; }",
        "references": {
          "Partial": {
            "location": "global"
          },
          "Layout": {
            "location": "import",
            "path": "plotly.js"
          }
        }
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [],
        "text": "The Plotly layout settings object"
      }
    },
    "config": {
      "type": "unknown",
      "mutable": false,
      "complexType": {
        "original": "Partial<Config>",
        "resolved": "undefined | ({ toImageButtonOptions?: Partial<{ filename: string; scale: number; format: \"png\" | \"svg\" | \"jpeg\" | \"webp\"; height: number; width: number; }> | undefined; staticPlot?: boolean | undefined; plotlyServerURL?: string | undefined; editable?: boolean | undefined; edits?: Partial<Edits> | undefined; autosizable?: boolean | undefined; queueLength?: number | undefined; fillFrame?: boolean | undefined; frameMargins?: number | undefined; scrollZoom?: boolean | undefined; doubleClick?: false | \"reset\" | \"autosize\" | \"reset+autosize\" | undefined; showTips?: boolean | undefined; showAxisDragHandles?: boolean | undefined; showAxisRangeEntryBoxes?: boolean | undefined; showLink?: boolean | undefined; sendData?: boolean | undefined; linkText?: string | undefined; showSources?: boolean | undefined; displayModeBar?: boolean | \"hover\" | undefined; showSendToCloud?: boolean | undefined; showEditInChartStudio?: boolean | undefined; modeBarButtonsToRemove?: ModeBarDefaultButtons[] | undefined; modeBarButtonsToAdd?: ModeBarDefaultButtons[] | ModeBarButton[] | undefined; modeBarButtons?: false | (ModeBarDefaultButtons[] | ModeBarButton[])[] | undefined; displaylogo?: boolean | undefined; plotGlPixelRatio?: number | undefined; setBackground?: (() => string) | undefined; topojsonURL?: string | undefined; mapboxAccessToken?: string | undefined; logging?: boolean | 0 | 2 | 1 | undefined; globalTransforms?: any[] | undefined; locale?: string | undefined; responsive?: boolean | undefined; })",
        "references": {
          "Partial": {
            "location": "global"
          },
          "Config": {
            "location": "import",
            "path": "plotly.js"
          }
        }
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [],
        "text": "The Plotly configuration object"
      }
    }
  }; }
  static get states() { return {
    "plotIsRendered": {}
  }; }
  static get events() { return [{
      "method": "plotlyLoad",
      "name": "stencila-plotly-load",
      "bubbles": true,
      "cancelable": true,
      "composed": true,
      "docs": {
        "tags": [],
        "text": "Custom event emitter to indicate that the loading of the Plotly.js script has finished"
      },
      "complexType": {
        "original": "any",
        "resolved": "any",
        "references": {}
      }
    }]; }
  static get elementRef() { return "el"; }
  static get listeners() { return [{
      "name": "stencila-plotly-load",
      "method": "onPlotlyLoad",
      "target": "window",
      "capture": false,
      "passive": false
    }]; }
}
//# sourceMappingURL=imagePlotly.js.map