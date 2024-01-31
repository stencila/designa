'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-c157949f.js');

const defaultToolbarCss = ".sc-stencila-toolbar-default-h{background-color:var(--color-neutral-200);background-color:var(--background,var(--color-neutral-200));display:block;z-index:40}[position=fixed].sc-stencila-toolbar-default-h{left:0;position:fixed;top:0;width:100%;z-index:30}[position=fixed].sc-stencila-toolbar-default-h+*.sc-stencila-toolbar-default{margin-top:3rem}[color=stock].sc-stencila-toolbar-default-h,[color=stock].sc-stencila-toolbar-default-h div.sc-stencila-toolbar-default{--background:var(--color-stock)}[color=key].sc-stencila-toolbar-default-h,[color=key].sc-stencila-toolbar-default-h div.sc-stencila-toolbar-default{--background:var(--color-key)}[color=primary].sc-stencila-toolbar-default-h,[color=primary].sc-stencila-toolbar-default-h div.sc-stencila-toolbar-default{--background:var(--color-primary-500)}[color=neutral].sc-stencila-toolbar-default-h,[color=neutral].sc-stencila-toolbar-default-h div.sc-stencila-toolbar-default{--background:var(--color-neutral-200);color:#444a5e;color:var(--color-neutral-700,#444a5e)}[color=success].sc-stencila-toolbar-default-h,[color=success].sc-stencila-toolbar-default-h div.sc-stencila-toolbar-default{--background:var(--color-success-500)}[color=warn].sc-stencila-toolbar-default-h,[color=warn].sc-stencila-toolbar-default-h div.sc-stencila-toolbar-default{--background:var(--color-warn-500)}[color=danger].sc-stencila-toolbar-default-h,[color=danger].sc-stencila-toolbar-default-h div.sc-stencila-toolbar-default{--background:var(--color-danger-500)}.sc-stencila-toolbar-default-h div.sc-stencila-toolbar-default{-ms-flex-align:center;align-items:center;background-color:var(--color-neutral-200);background-color:var(--background,var(--color-neutral-200));color:#fff;color:var(--color-stock,#fff);display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;font-family:sans-serif;font-family:var(--font-family-body,sans-serif);height:100%;-ms-flex-pack:justify;justify-content:space-between;line-height:1;margin:0;padding:.5rem;vertical-align:middle}.sc-stencila-toolbar-default-h div.sc-stencila-toolbar-default>*.sc-stencila-toolbar-default{vertical-align:middle}.sc-stencila-toolbar-default-h .sc-stencila-toolbar-default-s>[slot=middle]{-ms-flex-positive:1;flex-grow:1;padding-left:1rem;padding-right:1rem}";

const toolbarMaterialCss = ".sc-stencila-toolbar-material-h{background-color:var(--color-neutral-300);background-color:var(--background,var(--color-neutral-300));display:block;height:3rem;z-index:40}[position=fixed].sc-stencila-toolbar-material-h{left:0;position:fixed;top:0;width:100%;z-index:30}[position=fixed].sc-stencila-toolbar-material-h+*.sc-stencila-toolbar-material{margin-top:3rem}[color=stock].sc-stencila-toolbar-material-h div.sc-stencila-toolbar-material{background-color:#fff;background-color:var(--color-stock,#fff)}[color=key].sc-stencila-toolbar-material-h div.sc-stencila-toolbar-material{background-color:#4a4a4a;background-color:var(--color-key,#4a4a4a)}[color=primary].sc-stencila-toolbar-material-h div.sc-stencila-toolbar-material{background-color:#2069f2;background-color:var(--color-primary-500,#2069f2)}[color=neutral].sc-stencila-toolbar-material-h div.sc-stencila-toolbar-material{background-color:#6e7591;background-color:var(--color-neutral-500,#6e7591)}[color=success].sc-stencila-toolbar-material-h div.sc-stencila-toolbar-material{background-color:#3c8455;background-color:var(--color-success-500,#3c8455)}[color=warn].sc-stencila-toolbar-material-h div.sc-stencila-toolbar-material{background-color:#dca435;background-color:var(--color-warn-500,#dca435)}[color=danger].sc-stencila-toolbar-material-h div.sc-stencila-toolbar-material{background-color:#cf445e;background-color:var(--color-danger-500,#cf445e)}.sc-stencila-toolbar-material-h div.sc-stencila-toolbar-material{-ms-flex-align:center;align-items:center;background-color:var(--background);color:#fff;color:var(--color-stock,#fff);display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;font-family:sans-serif;font-family:var(--font-family-body,sans-serif);height:100%;-ms-flex-pack:justify;justify-content:space-between;line-height:1;margin:0;padding:.5rem .25rem;vertical-align:middle}.sc-stencila-toolbar-material-h div.sc-stencila-toolbar-material>*.sc-stencila-toolbar-material{vertical-align:middle}.sc-stencila-toolbar-material-h .sc-stencila-toolbar-material-s>[slot=middle]{-ms-flex-positive:1;flex-grow:1;padding-left:1rem;padding-right:1rem}.sc-stencila-toolbar-material-h[color=key].sc-stencila-toolbar-material-s stencila-button:not([disabled]):hover button.iconOnly{background-color:hsla(0,0%,100%,.2)}";

const Toolbar = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    /**
     * When `fixed` the Navbar will remain pinned to the top of the screen.
     * Note that if the Navbar component is not followed by a sibling element,
     * you will have to set `margin-top: 3rem` on the following element yourself.
     */
    this.position = 'static';
  }
  render() {
    return (index.h(index.Host, { color: this.color, position: this.position }, index.h("div", null, index.h("slot", { name: "start" }), index.h("slot", { name: "middle" }), index.h("slot", { name: "end" }))));
  }
};
Toolbar.style = {
  default: defaultToolbarCss,
  material: toolbarMaterialCss
};

exports.stencila_toolbar = Toolbar;

//# sourceMappingURL=stencila-toolbar.cjs.entry.js.map