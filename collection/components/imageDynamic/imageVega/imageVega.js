import { Component, Element, Event, h, Host, Listen, Prop, State, } from '@stencil/core';
import embed from 'vega-embed';
import { injectScriptSrc } from '../../utils/jsDeps';
import { createPlotContainer } from '../imageDynamicUtils';
import { getVegaLibSrc, getVegaVersion, vegaMediaType, } from './imageVegaUtils';
const isLoaded = {
  vega: undefined,
  'vega-lite': undefined,
};
export class ImageVegaComponent {
  constructor() {
    this.detectVegaDependency = (spec) => {
      const dependency = getVegaVersion(typeof spec === 'object' ? spec.$schema : spec);
      this.vegaDependency = dependency;
      return dependency;
    };
    /**
     * A JavaScript object containing options for embedding
     * @see https://github.com/vega/vega-embed#options
     */
    this.options = {};
    // TODO: Fix type definition. Currently StencilJS writes user computer specific
    // file path in the auto-generated component README.md, which causes
    // package release failures on CI.
    this.plotIsRendered = false;
    this.getPlotContent = () => {
      if (this.spec !== undefined && this.spec !== '') {
        return this.spec;
      }
      const plotEl = this.el.querySelector(`[type^="${vegaMediaType}"]`);
      if (plotEl) {
        try {
          const content = plotEl.textContent;
          const contentParsed = JSON.parse(content !== null && content !== void 0 ? content : '');
          return contentParsed;
        }
        catch (err) {
          console.error('Could not parse plot data');
        }
      }
      return undefined;
    };
    this.renderPlot = () => {
      var _a;
      const spec = this.getPlotContent();
      this.plotContainer = (_a = this.plotContainer) !== null && _a !== void 0 ? _a : createPlotContainer(this.el);
      if (spec !== undefined) {
        return embed(this.plotContainer, spec, Object.assign({ actions: {
            compiled: false,
            editor: false,
          } }, this.options)).then((res) => {
          this.plotIsRendered = true;
          return res;
        });
      }
      return Promise.resolve();
    };
  }
  /** When detecting that the Vega JS has loaded, render the data if it hasn’t been rendered already */
  onVegaLoaded(e) {
    if (!this.plotIsRendered &&
      e.detail.library === this.vegaDependency.library) {
      this.renderPlot().catch((err) => {
        console.log(err);
      });
    }
  }
  componentWillLoad() {
    // Make sure we have the correct Vega dependency loaded
    this.detectVegaDependency(this.getPlotContent());
    if (!this.plotIsRendered && isLoaded[this.vegaDependency.library]) {
      return this.renderPlot();
    }
    else {
      injectScriptSrc({
        src: getVegaLibSrc(this.vegaDependency),
        onLoad: () => {
          isLoaded[this.vegaDependency.library] = true;
          this.vegaLoaded.emit({ library: this.vegaDependency.library });
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
    this.renderPlot().catch((err) => {
      console.log(err);
    });
  }
  render() {
    return h(Host, { class: { imgHidden: this.plotIsRendered } });
  }
  static get is() { return "stencila-image-vega"; }
  static get encapsulation() { return "scoped"; }
  static get originalStyleUrls() { return {
    "default": ["imageVega.css"],
    "material": ["imageVega.css"]
  }; }
  static get styleUrls() { return {
    "default": ["imageVega.css"],
    "material": ["imageVega.css"]
  }; }
  static get properties() { return {
    "spec": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "VisualizationSpec | string",
        "resolved": "GenericConcatSpec<NonNormalizedSpec> & TopLevelProperties<ExprRef | SignalRef> & { $schema?: string | undefined; config?: Config<ExprRef | SignalRef> | undefined; datasets?: Datasets | undefined; usermeta?: Dict<unknown> | undefined; } | GenericFacetSpec<UnitSpecWithFrame<Field>, LayerSpec<Field>, Field> & TopLevelProperties<ExprRef | SignalRef> & { $schema?: string | undefined; config?: Config<ExprRef | SignalRef> | undefined; datasets?: Datasets | undefined; usermeta?: Dict<unknown> | undefined; } & DataMixins | GenericHConcatSpec<NonNormalizedSpec> & TopLevelProperties<ExprRef | SignalRef> & { $schema?: string | undefined; config?: Config<ExprRef | SignalRef> | undefined; datasets?: Datasets | undefined; usermeta?: Dict<unknown> | undefined; } | GenericUnitSpec<FacetedCompositeEncoding<Field>, AnyMark> & ResolveMixins & GenericCompositionLayout & FrameMixins<ExprRef | SignalRef> & TopLevelProperties<ExprRef | SignalRef> & { $schema?: string | undefined; config?: Config<ExprRef | SignalRef> | undefined; datasets?: Datasets | undefined; usermeta?: Dict<unknown> | undefined; } & DataMixins | GenericVConcatSpec<NonNormalizedSpec> & TopLevelProperties<ExprRef | SignalRef> & { $schema?: string | undefined; config?: Config<ExprRef | SignalRef> | undefined; datasets?: Datasets | undefined; usermeta?: Dict<unknown> | undefined; } | LayerRepeatSpec & TopLevelProperties<ExprRef | SignalRef> & { $schema?: string | undefined; config?: Config<ExprRef | SignalRef> | undefined; datasets?: Datasets | undefined; usermeta?: Dict<unknown> | undefined; } | LayerSpec<Field> & TopLevelProperties<ExprRef | SignalRef> & { $schema?: string | undefined; config?: Config<ExprRef | SignalRef> | undefined; datasets?: Datasets | undefined; usermeta?: Dict<unknown> | undefined; } | NonLayerRepeatSpec & TopLevelProperties<ExprRef | SignalRef> & { $schema?: string | undefined; config?: Config<ExprRef | SignalRef> | undefined; datasets?: Datasets | undefined; usermeta?: Dict<unknown> | undefined; } | Spec | string | undefined",
        "references": {
          "VisualizationSpec": {
            "location": "import",
            "path": "vega-embed"
          }
        }
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [{
            "text": "https ://vega.github.io/vega/docs/specification/",
            "name": "see"
          }],
        "text": "The Vega or Vega-Lite spec"
      },
      "attribute": "spec",
      "reflect": false
    },
    "options": {
      "type": "unknown",
      "mutable": false,
      "complexType": {
        "original": "Record<string, unknown>",
        "resolved": "undefined | { [x: string]: unknown; }",
        "references": {
          "Record": {
            "location": "global"
          }
        }
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [{
            "text": "https ://github.com/vega/vega-embed#options",
            "name": "see"
          }],
        "text": "A JavaScript object containing options for embedding"
      },
      "defaultValue": "{}"
    }
  }; }
  static get states() { return {
    "plotIsRendered": {}
  }; }
  static get events() { return [{
      "method": "vegaLoaded",
      "name": "vegaLoaded",
      "bubbles": true,
      "cancelable": true,
      "composed": true,
      "docs": {
        "tags": [],
        "text": "Custom event emitter to indicate that the loading of the Vega JS script has finished"
      },
      "complexType": {
        "original": "VegaLoadEvent",
        "resolved": "{ library: VegaLibType; }",
        "references": {
          "VegaLoadEvent": {
            "location": "import",
            "path": "./imageVegaUtils"
          }
        }
      }
    }]; }
  static get elementRef() { return "el"; }
  static get listeners() { return [{
      "name": "vegaLoaded",
      "method": "onVegaLoaded",
      "target": "window",
      "capture": false,
      "passive": false
    }]; }
}
