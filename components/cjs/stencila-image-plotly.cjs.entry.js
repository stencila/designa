'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-c157949f.js');
const imageDynamicUtils = require('./imageDynamicUtils-7655c374.js');

const plotlyMediaType = 'application/vnd.plotly.v1+json';

const defaultImagePlotlyCss = ".sc-stencila-image-plotly-default-h{display:block}.sc-stencila-image-plotly-default-h.imgHidden.sc-stencila-image-plotly-default-s>picture>:not(.js-plotly-plot){display:none}";

const materialImagePlotlyCss = ".sc-stencila-image-plotly-material-h{display:block}.sc-stencila-image-plotly-material-h.imgHidden.sc-stencila-image-plotly-material-s>picture>:not(.js-plotly-plot){display:none}";

const plotlySrc = 'https://cdn.plot.ly/plotly-latest.min.js';
let plotlyIsLoaded;
const ImagePlotlyComponent = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.plotlyLoad = index.createEvent(this, "stencila-plotly-load", 7);
    this.plotIsRendered = false;
    this.renderPlot = () => {
      var _a, _b, _c;
      const { data, layout = this.layout, config = this.config, } = (_a = this.getPlotContent()) !== null && _a !== void 0 ? _a : {};
      if (!data)
        return;
      this.plotContainer = (_b = this.plotContainer) !== null && _b !== void 0 ? _b : imageDynamicUtils.createPlotContainer(this.el);
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
      imageDynamicUtils.injectScriptSrc({
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
    return index.h(index.Host, { class: { imgHidden: this.plotIsRendered } });
  }
  get el() { return index.getElement(this); }
};
ImagePlotlyComponent.style = {
  default: defaultImagePlotlyCss,
  material: materialImagePlotlyCss
};

exports.stencila_image_plotly = ImagePlotlyComponent;

//# sourceMappingURL=stencila-image-plotly.cjs.entry.js.map