import{r as registerInstance,h,e as Host}from"./index-2305c23c.js";var defaultDetailsCss=".sc-stencila-details-default-h,stencila-details.sc-stencila-details-default{--disclosure-icon-right:var(--disclosure-icon-right,0);--disclosure-icon-top:var(--disclosure-icon-top,0);display:block;font-family:sans-serif;font-family:var(--font-family-body,sans-serif);position:relative}.sc-stencila-details-default-h .contents.sc-stencila-details-default,stencila-details.sc-stencila-details-default .contents.sc-stencila-details-default{overflow:hidden}.sc-stencila-details-default-h .contents.hidden.sc-stencila-details-default,stencila-details.sc-stencila-details-default .contents.hidden.sc-stencila-details-default{display:none}.sc-stencila-details-default-h .sc-stencila-details-default-s>[slot=summary],.sc-stencila-details-default-h.sc-stencila-details-default-s>[slot=summary],stencila-details.sc-stencila-details-default-s>[slot=summary],stencila-details .sc-stencila-details-default-s>[slot=summary]{cursor:pointer}.sc-stencila-details-default-h .disclosure-toggle.sc-stencila-details-default,stencila-details.sc-stencila-details-default .disclosure-toggle.sc-stencila-details-default{cursor:pointer;pointer-events:none;position:absolute;right:0;right:var(--disclosure-icon-right,0);top:0;top:var(--disclosure-icon-top,0);-webkit-transform:rotate(0deg);transform:rotate(0deg);-webkit-transition:-webkit-transform .12s ease-in-out;transition:-webkit-transform .12s ease-in-out;transition:transform .12s ease-in-out;transition:transform .12s ease-in-out, -webkit-transform .12s ease-in-out}.sc-stencila-details-default-h .disclosure-toggle.sc-stencila-details-default svg.sc-stencila-details-default,stencila-details.sc-stencila-details-default .disclosure-toggle.sc-stencila-details-default svg.sc-stencila-details-default{stroke:#6e7591;stroke:var(--color-neutral-500,#6e7591)}[isopen].sc-stencila-details-default-h .disclosure-toggle.sc-stencila-details-default,stencila-details[isopen].sc-stencila-details-default .disclosure-toggle.sc-stencila-details-default{-webkit-transform:rotate(180deg);transform:rotate(180deg)}.sc-stencila-details-default-h:focus .sc-stencila-details-default-s>.disclosure-toggle>svg,.sc-stencila-details-default-h:focus.sc-stencila-details-default-s>.disclosure-toggle>svg,.sc-stencila-details-default-h:hover .sc-stencila-details-default-s>.disclosure-toggle>svg,.sc-stencila-details-default-h:hover.sc-stencila-details-default-s>.disclosure-toggle>svg,stencila-details:focus.sc-stencila-details-default-s>.disclosure-toggle>svg,stencila-details:focus .sc-stencila-details-default-s>.disclosure-toggle>svg,stencila-details:hover.sc-stencila-details-default-s>.disclosure-toggle>svg,stencila-details:hover .sc-stencila-details-default-s>.disclosure-toggle>svg{stroke:#444a5e;stroke:var(--color-neutral-700,#444a5e)}";var materialDetailsCss=".sc-stencila-details-material-h,stencila-details.sc-stencila-details-material{--disclosure-icon-right:var(--disclosure-icon-right,0);--disclosure-icon-top:var(--disclosure-icon-top,0);display:block;font-family:sans-serif;font-family:var(--font-family-body,sans-serif);position:relative}.sc-stencila-details-material-h .contents.sc-stencila-details-material,stencila-details.sc-stencila-details-material .contents.sc-stencila-details-material{overflow:hidden}.sc-stencila-details-material-h .contents.hidden.sc-stencila-details-material,stencila-details.sc-stencila-details-material .contents.hidden.sc-stencila-details-material{display:none}.sc-stencila-details-material-h .sc-stencila-details-material-s>[slot=summary],.sc-stencila-details-material-h.sc-stencila-details-material-s>[slot=summary],stencila-details.sc-stencila-details-material-s>[slot=summary],stencila-details .sc-stencila-details-material-s>[slot=summary]{cursor:pointer}.sc-stencila-details-material-h .disclosure-toggle.sc-stencila-details-material,stencila-details.sc-stencila-details-material .disclosure-toggle.sc-stencila-details-material{cursor:pointer;pointer-events:none;position:absolute;right:0;right:var(--disclosure-icon-right,0);top:0;top:var(--disclosure-icon-top,0);-webkit-transform:rotate(0deg);transform:rotate(0deg);-webkit-transition:-webkit-transform .12s ease-in-out;transition:-webkit-transform .12s ease-in-out;transition:transform .12s ease-in-out;transition:transform .12s ease-in-out, -webkit-transform .12s ease-in-out}.sc-stencila-details-material-h .disclosure-toggle.sc-stencila-details-material svg.sc-stencila-details-material,stencila-details.sc-stencila-details-material .disclosure-toggle.sc-stencila-details-material svg.sc-stencila-details-material{stroke:#6e7591;stroke:var(--color-neutral-500,#6e7591)}[isopen].sc-stencila-details-material-h .disclosure-toggle.sc-stencila-details-material,stencila-details[isopen].sc-stencila-details-material .disclosure-toggle.sc-stencila-details-material{-webkit-transform:rotate(180deg);transform:rotate(180deg)}.sc-stencila-details-material-h:focus .sc-stencila-details-material-s>.disclosure-toggle>svg,.sc-stencila-details-material-h:focus.sc-stencila-details-material-s>.disclosure-toggle>svg,.sc-stencila-details-material-h:hover .sc-stencila-details-material-s>.disclosure-toggle>svg,.sc-stencila-details-material-h:hover.sc-stencila-details-material-s>.disclosure-toggle>svg,stencila-details:focus.sc-stencila-details-material-s>.disclosure-toggle>svg,stencila-details:focus .sc-stencila-details-material-s>.disclosure-toggle>svg,stencila-details:hover.sc-stencila-details-material-s>.disclosure-toggle>svg,stencila-details:hover .sc-stencila-details-material-s>.disclosure-toggle>svg{stroke:#444a5e;stroke:var(--color-neutral-700,#444a5e)}";var Details=function(){function s(s){var e=this;registerInstance(this,s);var t;this.open=undefined;this.clickHandler=function(s){s.preventDefault();if(e.open!==undefined)return;e.isOpen=!e.isOpen};this.isOpen=(t=this.open)!==null&&t!==void 0?t:false}s.prototype.render=function(){var s;var e=(s=this.open)!==null&&s!==void 0?s:this.isOpen;return h(Host,{isOpen:e,onClick:this.clickHandler},h("slot",{name:"summary"}),h("div",{class:{contents:true,hidden:!e}},h("slot",null)),h("stencila-icon",{icon:"arrow-down-s",class:"disclosure-toggle"}))};return s}();Details.style={default:defaultDetailsCss,material:materialDetailsCss};export{Details as stencila_details};
//# sourceMappingURL=stencila-details.entry.js.map