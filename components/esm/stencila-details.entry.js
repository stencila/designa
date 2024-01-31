import { r as registerInstance, h, e as Host } from './index-2305c23c.js';

const defaultDetailsCss = ".sc-stencila-details-default-h,stencila-details.sc-stencila-details-default{--disclosure-icon-right:var(--disclosure-icon-right,0);--disclosure-icon-top:var(--disclosure-icon-top,0);display:block;font-family:sans-serif;font-family:var(--font-family-body,sans-serif);position:relative}.sc-stencila-details-default-h .contents.sc-stencila-details-default,stencila-details.sc-stencila-details-default .contents.sc-stencila-details-default{overflow:hidden}.sc-stencila-details-default-h .contents.hidden.sc-stencila-details-default,stencila-details.sc-stencila-details-default .contents.hidden.sc-stencila-details-default{display:none}.sc-stencila-details-default-h .sc-stencila-details-default-s>[slot=summary],.sc-stencila-details-default-h.sc-stencila-details-default-s>[slot=summary],stencila-details.sc-stencila-details-default-s>[slot=summary],stencila-details .sc-stencila-details-default-s>[slot=summary]{cursor:pointer}.sc-stencila-details-default-h .disclosure-toggle.sc-stencila-details-default,stencila-details.sc-stencila-details-default .disclosure-toggle.sc-stencila-details-default{cursor:pointer;pointer-events:none;position:absolute;right:0;right:var(--disclosure-icon-right,0);top:0;top:var(--disclosure-icon-top,0);-webkit-transform:rotate(0deg);transform:rotate(0deg);-webkit-transition:-webkit-transform .12s ease-in-out;transition:-webkit-transform .12s ease-in-out;transition:transform .12s ease-in-out;transition:transform .12s ease-in-out, -webkit-transform .12s ease-in-out}.sc-stencila-details-default-h .disclosure-toggle.sc-stencila-details-default svg.sc-stencila-details-default,stencila-details.sc-stencila-details-default .disclosure-toggle.sc-stencila-details-default svg.sc-stencila-details-default{stroke:#6e7591;stroke:var(--color-neutral-500,#6e7591)}[isopen].sc-stencila-details-default-h .disclosure-toggle.sc-stencila-details-default,stencila-details[isopen].sc-stencila-details-default .disclosure-toggle.sc-stencila-details-default{-webkit-transform:rotate(180deg);transform:rotate(180deg)}.sc-stencila-details-default-h:focus .sc-stencila-details-default-s>.disclosure-toggle>svg,.sc-stencila-details-default-h:focus.sc-stencila-details-default-s>.disclosure-toggle>svg,.sc-stencila-details-default-h:hover .sc-stencila-details-default-s>.disclosure-toggle>svg,.sc-stencila-details-default-h:hover.sc-stencila-details-default-s>.disclosure-toggle>svg,stencila-details:focus.sc-stencila-details-default-s>.disclosure-toggle>svg,stencila-details:focus .sc-stencila-details-default-s>.disclosure-toggle>svg,stencila-details:hover.sc-stencila-details-default-s>.disclosure-toggle>svg,stencila-details:hover .sc-stencila-details-default-s>.disclosure-toggle>svg{stroke:#444a5e;stroke:var(--color-neutral-700,#444a5e)}";

const materialDetailsCss = ".sc-stencila-details-material-h,stencila-details.sc-stencila-details-material{--disclosure-icon-right:var(--disclosure-icon-right,0);--disclosure-icon-top:var(--disclosure-icon-top,0);display:block;font-family:sans-serif;font-family:var(--font-family-body,sans-serif);position:relative}.sc-stencila-details-material-h .contents.sc-stencila-details-material,stencila-details.sc-stencila-details-material .contents.sc-stencila-details-material{overflow:hidden}.sc-stencila-details-material-h .contents.hidden.sc-stencila-details-material,stencila-details.sc-stencila-details-material .contents.hidden.sc-stencila-details-material{display:none}.sc-stencila-details-material-h .sc-stencila-details-material-s>[slot=summary],.sc-stencila-details-material-h.sc-stencila-details-material-s>[slot=summary],stencila-details.sc-stencila-details-material-s>[slot=summary],stencila-details .sc-stencila-details-material-s>[slot=summary]{cursor:pointer}.sc-stencila-details-material-h .disclosure-toggle.sc-stencila-details-material,stencila-details.sc-stencila-details-material .disclosure-toggle.sc-stencila-details-material{cursor:pointer;pointer-events:none;position:absolute;right:0;right:var(--disclosure-icon-right,0);top:0;top:var(--disclosure-icon-top,0);-webkit-transform:rotate(0deg);transform:rotate(0deg);-webkit-transition:-webkit-transform .12s ease-in-out;transition:-webkit-transform .12s ease-in-out;transition:transform .12s ease-in-out;transition:transform .12s ease-in-out, -webkit-transform .12s ease-in-out}.sc-stencila-details-material-h .disclosure-toggle.sc-stencila-details-material svg.sc-stencila-details-material,stencila-details.sc-stencila-details-material .disclosure-toggle.sc-stencila-details-material svg.sc-stencila-details-material{stroke:#6e7591;stroke:var(--color-neutral-500,#6e7591)}[isopen].sc-stencila-details-material-h .disclosure-toggle.sc-stencila-details-material,stencila-details[isopen].sc-stencila-details-material .disclosure-toggle.sc-stencila-details-material{-webkit-transform:rotate(180deg);transform:rotate(180deg)}.sc-stencila-details-material-h:focus .sc-stencila-details-material-s>.disclosure-toggle>svg,.sc-stencila-details-material-h:focus.sc-stencila-details-material-s>.disclosure-toggle>svg,.sc-stencila-details-material-h:hover .sc-stencila-details-material-s>.disclosure-toggle>svg,.sc-stencila-details-material-h:hover.sc-stencila-details-material-s>.disclosure-toggle>svg,stencila-details:focus.sc-stencila-details-material-s>.disclosure-toggle>svg,stencila-details:focus .sc-stencila-details-material-s>.disclosure-toggle>svg,stencila-details:hover.sc-stencila-details-material-s>.disclosure-toggle>svg,stencila-details:hover .sc-stencila-details-material-s>.disclosure-toggle>svg{stroke:#444a5e;stroke:var(--color-neutral-700,#444a5e)}";

const Details = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    var _a;
    /**
     * Determines whether the contents are visible or not.
     */
    this.open = undefined;
    this.clickHandler = (e) => {
      e.preventDefault();
      // If we have an `open` prop, treat this is a controlled component
      if (this.open !== undefined)
        return;
      this.isOpen = !this.isOpen;
    };
    this.isOpen = (_a = this.open) !== null && _a !== void 0 ? _a : false;
  }
  render() {
    var _a;
    const open = (_a = this.open) !== null && _a !== void 0 ? _a : this.isOpen;
    return (h(Host, { isOpen: open, onClick: this.clickHandler }, h("slot", { name: "summary" }), h("div", { class: { contents: true, hidden: !open } }, h("slot", null)), h("stencila-icon", { icon: "arrow-down-s", class: "disclosure-toggle" })));
  }
};
Details.style = {
  default: defaultDetailsCss,
  material: materialDetailsCss
};

export { Details as stencila_details };

//# sourceMappingURL=stencila-details.entry.js.map