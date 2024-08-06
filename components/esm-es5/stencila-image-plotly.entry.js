import{r as registerInstance,f as createEvent,h,c as getElement,e as Host}from"./index-2305c23c.js";import{c as createPlotContainer,i as injectScriptSrc}from"./imageDynamicUtils-6a80d9cc.js";var plotlyMediaType="application/vnd.plotly.v1+json";var defaultImagePlotlyCss=".sc-stencila-image-plotly-default-h{display:block}.sc-stencila-image-plotly-default-h.imgHidden.sc-stencila-image-plotly-default-s>picture>:not(.js-plotly-plot){display:none}";var materialImagePlotlyCss=".sc-stencila-image-plotly-material-h{display:block}.sc-stencila-image-plotly-material-h.imgHidden.sc-stencila-image-plotly-material-s>picture>:not(.js-plotly-plot){display:none}";var plotlySrc="https://cdn.plot.ly/plotly-latest.min.js";var plotlyIsLoaded;var ImagePlotlyComponent=function(){function t(t){var e=this;registerInstance(this,t);this.plotlyLoad=createEvent(this,"stencila-plotly-load",7);this.plotIsRendered=false;this.renderPlot=function(){var t,o,l;var n=(t=e.getPlotContent())!==null&&t!==void 0?t:{},a=n.data,r=n.layout,i=r===void 0?e.layout:r,s=n.config,d=s===void 0?e.config:s;if(!a)return;e.plotContainer=(o=e.plotContainer)!==null&&o!==void 0?o:createPlotContainer(e.el);(l=window.Plotly)===null||l===void 0?void 0:l.react(e.plotContainer,a,i,d).then((function(){if(!e.plotIsRendered){e.plotIsRendered=true}})).catch((function(t){console.error("Failed to render plot",t)}))};this.getPlotContent=function(){if(e.data){return{data:e.data,layout:e.layout,config:e.config}}var t=e.el.querySelector('[type="'.concat(plotlyMediaType,'"]'));if(t){try{var o=t.textContent;var l=JSON.parse(o!==null&&o!==void 0?o:"");return Array.isArray(l)?{data:l}:l}catch(n){console.error("Could not parse plot data")}}return undefined}}t.prototype.onPlotlyLoad=function(){if(!this.plotIsRendered){this.renderPlot()}};t.prototype.componentWillLoad=function(){var t=this;if(!this.plotIsRendered&&plotlyIsLoaded){this.renderPlot()}else{injectScriptSrc({src:plotlySrc,onLoad:function(){plotlyIsLoaded=true;t.plotlyLoad.emit()}})}};t.prototype.componentShouldUpdate=function(t,e,o){if(o==="plotIsRendered"&&e===t){return false}return true};t.prototype.componentWillUpdate=function(){this.renderPlot()};t.prototype.render=function(){return h(Host,{class:{imgHidden:this.plotIsRendered}})};Object.defineProperty(t.prototype,"el",{get:function(){return getElement(this)},enumerable:false,configurable:true});return t}();ImagePlotlyComponent.style={default:defaultImagePlotlyCss,material:materialImagePlotlyCss};export{ImagePlotlyComponent as stencila_image_plotly};
//# sourceMappingURL=stencila-image-plotly.entry.js.map