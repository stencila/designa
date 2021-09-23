'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-77e1ad50.js');
const schema = require('./schema-fcf985c7.js');

const schemaNodeHTMLRegExp = /itemtype=".+?"/;
const renderNode = (node) => {
  if (typeof node === 'string' && schemaNodeHTMLRegExp.test(node)) {
    return index.h("span", { innerHTML: node });
  }
  if (node instanceof HTMLElement) {
    return index.h("span", { innerHTML: node.outerHTML });
  }
  if (schema.ze(node)) {
    const text = typeof node === 'string' || typeof node === 'number'
      ? node
      : JSON.stringify(node);
    return (index.h("pre", null,
      index.h("output", null, text)));
  }
  else if (schema.Ke('CodeTypes', node)) {
    return (index.h("pre", null,
      index.h("output", null, node.text)));
  }
  else if (schema.qe('ImageObject', node)) {
    return index.h("stencila-image-object", { image: node });
  }
  else if (schema.qe('Datatable', node)) {
    return index.h("stencila-data-table", { table: node });
  }
  return index.h("span", null, JSON.stringify(node));
};
const NodeRenderer = ({ node }) => (index.h("span", { class: "output" }, node !== undefined ? renderNode(node) : null));

const defaultCodeExpressionCss = ".sc-stencila-code-expression-default-h,stencila-code-expression.sc-stencila-code-expression-default{--background:var(--color-stock,#fff);--background-buttons:var(--color-neutral-50,#edf2f7);--background-editor:var(--color-neutral-50,#edf2f7);--border:var(--color-neutral-100,#e2e8f0)}.sc-stencila-code-expression-default-h,stencila-code-expression.sc-stencila-code-expression-default{-ms-flex-align:stretch;align-items:stretch;border-radius:.25rem;border-style:solid;border-width:1px;display:-ms-inline-flexbox;display:inline-flex;font-size:.875rem;line-height:1.25rem;line-height:1;padding:0;vertical-align:text-bottom}.sc-stencila-code-expression-default-h,stencila-code-expression.sc-stencila-code-expression-default{background-color:var(--background);border-color:var(--border)}.sc-stencila-code-expression-default-h stencila-tooltip.sc-stencila-code-expression-default,stencila-code-expression.sc-stencila-code-expression-default stencila-tooltip.sc-stencila-code-expression-default{-ms-flex-align:stretch;align-items:stretch;display:-ms-inline-flexbox;display:inline-flex;line-height:1;overflow:hidden;padding:0;vertical-align:bottom}.sc-stencila-code-expression-default-h .actions.sc-stencila-code-expression-default,stencila-code-expression.sc-stencila-code-expression-default .actions.sc-stencila-code-expression-default{background-color:var(--background-buttons);border-bottom-left-radius:.25rem;border-top-left-radius:.25rem;display:-ms-inline-flexbox;display:inline-flex;-ms-flex:0 1 auto;flex:0 1 auto;position:relative;white-space:nowrap}.sc-stencila-code-expression-default-h .text.sc-stencila-code-expression-default,stencila-code-expression.sc-stencila-code-expression-default .text.sc-stencila-code-expression-default{background-color:var(--background-editor);color:#4a4a4a;color:var(--color-key,#4a4a4a);display:inline-block;font-family:monospace;font-family:var(--font-family-mono,monospace);font-size:.75rem;line-height:1rem;line-height:1;min-width:0;overflow:hidden;padding:.25rem 0;-webkit-transition-duration:.15s;transition-duration:.15s;-webkit-transition-property:width;transition-property:width;-webkit-transition-timing-function:cubic-bezier(0,0,.2,1);transition-timing-function:cubic-bezier(0,0,.2,1);white-space:nowrap;width:0}.sc-stencila-code-expression-default-h .output.sc-stencila-code-expression-default,.sc-stencila-code-expression-default-h .sc-stencila-code-expression-default-s>[slot=output],.sc-stencila-code-expression-default-h [slot=output].sc-stencila-code-expression-default,stencila-code-expression.sc-stencila-code-expression-default .output.sc-stencila-code-expression-default,stencila-code-expression.sc-stencila-code-expression-default-s>[slot=output],stencila-code-expression .sc-stencila-code-expression-default-s>[slot=output],stencila-code-expression.sc-stencila-code-expression-default [slot=output].sc-stencila-code-expression-default{background-color:#fff;background-color:var(--color-stock,#fff);border-style:none;color:#4a4a4a;color:var(--color-key,#4a4a4a);display:inline-block;font-family:monospace;font-family:var(--font-family-mono,monospace);font-size:.75rem;line-height:1rem;line-height:1;padding:.25rem .5rem .25rem .25rem}.sc-stencila-code-expression-default-h .output.sc-stencila-code-expression-default,.sc-stencila-code-expression-default-h .sc-stencila-code-expression-default-s>[slot=output],.sc-stencila-code-expression-default-h [slot=output].sc-stencila-code-expression-default,stencila-code-expression.sc-stencila-code-expression-default .output.sc-stencila-code-expression-default,stencila-code-expression .sc-stencila-code-expression-default-s>[slot=output],stencila-code-expression.sc-stencila-code-expression-default [slot=output].sc-stencila-code-expression-default{background-color:var(--background);-webkit-transition:padding .12s ease-out;transition:padding .12s ease-out}.sc-stencila-code-expression-default-h .output.sc-stencila-code-expression-default stencila-icon.sc-stencila-code-expression-default,.sc-stencila-code-expression-default-h .sc-stencila-code-expression-default-s>[slot=output] stencila-icon,.sc-stencila-code-expression-default-h [slot=output].sc-stencila-code-expression-default stencila-icon.sc-stencila-code-expression-default,stencila-code-expression.sc-stencila-code-expression-default .output.sc-stencila-code-expression-default stencila-icon.sc-stencila-code-expression-default,stencila-code-expression.sc-stencila-code-expression-default-s>[slot=output] stencila-icon,stencila-code-expression .sc-stencila-code-expression-default-s>[slot=output] stencila-icon,stencila-code-expression.sc-stencila-code-expression-default [slot=output].sc-stencila-code-expression-default stencila-icon.sc-stencila-code-expression-default{--height:1rem;height:1rem}.sc-stencila-code-expression-default-h .output.sc-stencila-code-expression-default stencila-icon.sc-stencila-code-expression-default svg.sc-stencila-code-expression-default,.sc-stencila-code-expression-default-h .sc-stencila-code-expression-default-s>[slot=output] stencila-icon svg,.sc-stencila-code-expression-default-h [slot=output].sc-stencila-code-expression-default stencila-icon.sc-stencila-code-expression-default svg.sc-stencila-code-expression-default,stencila-code-expression.sc-stencila-code-expression-default .output.sc-stencila-code-expression-default stencila-icon.sc-stencila-code-expression-default svg.sc-stencila-code-expression-default,stencila-code-expression.sc-stencila-code-expression-default-s>[slot=output] stencila-icon svg,stencila-code-expression .sc-stencila-code-expression-default-s>[slot=output] stencila-icon svg,stencila-code-expression.sc-stencila-code-expression-default [slot=output].sc-stencila-code-expression-default stencila-icon.sc-stencila-code-expression-default svg.sc-stencila-code-expression-default{stroke:#ba8925;stroke:var(--color-warn-600,#ba8925);height:1rem}.sc-stencila-code-expression-default-h .slot.hidden.sc-stencila-code-expression-default,stencila-code-expression.sc-stencila-code-expression-default .slot.hidden.sc-stencila-code-expression-default{display:none}.sc-stencila-code-expression-default-h .output.sc-stencila-code-expression-default>*.sc-stencila-code-expression-default,stencila-code-expression.sc-stencila-code-expression-default .output.sc-stencila-code-expression-default>*.sc-stencila-code-expression-default{background-color:#fff;background-color:var(--color-stock,#fff);border-style:none;color:#4a4a4a;color:var(--color-key,#4a4a4a);display:inline-block;font-family:monospace;font-family:var(--font-family-mono,monospace);font-size:.75rem;line-height:1rem;line-height:1;margin:0;padding:0;white-space:normal}.sc-stencila-code-expression-default-h .divider.sc-stencila-code-expression-default,stencila-code-expression.sc-stencila-code-expression-default .divider.sc-stencila-code-expression-default{fill:var(--background-buttons);-ms-flex-item-align:center;align-self:center;display:inline-block;max-height:1em;width:.5rem}.isCodeVisible.sc-stencila-code-expression-default-h .text.sc-stencila-code-expression-default,stencila-code-expression.isCodeVisible.sc-stencila-code-expression-default .text.sc-stencila-code-expression-default{display:inline-block;min-width:1em;padding:.25rem .5rem;white-space:pre-line;width:auto}.isCodeVisible.sc-stencila-code-expression-default-h .divider.sc-stencila-code-expression-default,stencila-code-expression.isCodeVisible.sc-stencila-code-expression-default .divider.sc-stencila-code-expression-default{fill:var(--background-editor)}.sc-stencila-code-expression-default-h .actions.sc-stencila-code-expression-default stencila-button.sc-stencila-code-expression-default,stencila-code-expression.sc-stencila-code-expression-default .actions.sc-stencila-code-expression-default stencila-button.sc-stencila-code-expression-default{-ms-flex-align:stretch;align-items:stretch;-ms-flex-item-align:start;align-self:flex-start;cursor:default;display:-ms-inline-flexbox;display:inline-flex;-ms-flex-negative:0;flex-shrink:0;overflow:hidden;-webkit-transition-duration:.15s;transition-duration:.15s;-webkit-transition-property:background-color,border-color,color,fill,stroke,opacity,-webkit-box-shadow,-webkit-transform,-webkit-filter,-webkit-backdrop-filter;transition-property:background-color,border-color,color,fill,stroke,opacity,-webkit-box-shadow,-webkit-transform,-webkit-filter,-webkit-backdrop-filter;transition-property:background-color,border-color,color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter;transition-property:background-color,border-color,color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter,-webkit-box-shadow,-webkit-transform,-webkit-filter,-webkit-backdrop-filter;-webkit-transition-property:padding,width,max-width;transition-property:padding,width,max-width;-webkit-transition-timing-function:cubic-bezier(.4,0,.2,1);transition-timing-function:cubic-bezier(.4,0,.2,1);-webkit-transition-timing-function:cubic-bezier(0,0,.2,1);transition-timing-function:cubic-bezier(0,0,.2,1)}.sc-stencila-code-expression-default-h .actions.sc-stencila-code-expression-default stencila-button.sourceToggle.sc-stencila-code-expression-default,stencila-code-expression.sc-stencila-code-expression-default .actions.sc-stencila-code-expression-default stencila-button.sourceToggle.sc-stencila-code-expression-default{display:inline-block;width:0}.isOutputEmpty.sc-stencila-code-expression-default-h .output.sc-stencila-code-expression-default,.sc-stencila-code-expression-default-h.isOutputEmpty .sc-stencila-code-expression-default-s>[slot=output],.isOutputEmpty.sc-stencila-code-expression-default-h [slot=output].sc-stencila-code-expression-default,.isOutputEmpty.sc-stencila-code-expression-default-h stencila-tooltip.sc-stencila-code-expression-default,stencila-code-expression.isOutputEmpty.sc-stencila-code-expression-default .output.sc-stencila-code-expression-default,stencila-code-expression.isOutputEmpty.sc-stencila-code-expression-default-s>[slot=output],stencila-code-expression.isOutputEmpty .sc-stencila-code-expression-default-s>[slot=output],stencila-code-expression.isOutputEmpty.sc-stencila-code-expression-default [slot=output].sc-stencila-code-expression-default,stencila-code-expression.isOutputEmpty.sc-stencila-code-expression-default stencila-tooltip.sc-stencila-code-expression-default{color:#6e7591;color:var(--color-neutral-500,#6e7591)}.hover.sc-stencila-code-expression-default-h .actions.sc-stencila-code-expression-default stencila-button.sourceToggle.sc-stencila-code-expression-default,.sc-stencila-code-expression-default-h:focus .actions.sc-stencila-code-expression-default stencila-button.sourceToggle.sc-stencila-code-expression-default,.sc-stencila-code-expression-default-h:focus-within .actions.sc-stencila-code-expression-default stencila-button.sourceToggle.sc-stencila-code-expression-default,.sc-stencila-code-expression-default-h:hover .actions.sc-stencila-code-expression-default stencila-button.sourceToggle.sc-stencila-code-expression-default,stencila-code-expression.hover.sc-stencila-code-expression-default .actions.sc-stencila-code-expression-default stencila-button.sourceToggle.sc-stencila-code-expression-default,stencila-code-expression.sc-stencila-code-expression-default:focus-within .actions.sc-stencila-code-expression-default stencila-button.sourceToggle.sc-stencila-code-expression-default,stencila-code-expression.sc-stencila-code-expression-default:focus .actions.sc-stencila-code-expression-default stencila-button.sourceToggle.sc-stencila-code-expression-default,stencila-code-expression.sc-stencila-code-expression-default:hover .actions.sc-stencila-code-expression-default stencila-button.sourceToggle.sc-stencila-code-expression-default{display:-ms-inline-flexbox;display:inline-flex;max-width:100%;width:2rem}";

const materialCodeExpressionCss = ".sc-stencila-code-expression-material-h,stencila-code-expression.sc-stencila-code-expression-material{--background:var(--color-stock,#fff);--background-buttons:var(--color-neutral-50,#edf2f7);--background-editor:var(--color-neutral-50,#edf2f7);--border:var(--color-neutral-100,#e2e8f0)}.sc-stencila-code-expression-material-h,stencila-code-expression.sc-stencila-code-expression-material{-ms-flex-align:stretch;align-items:stretch;border-radius:.25rem;border-style:solid;border-width:1px;display:-ms-inline-flexbox;display:inline-flex;font-size:.875rem;line-height:1.25rem;line-height:1;padding:0;vertical-align:text-bottom}.sc-stencila-code-expression-material-h,stencila-code-expression.sc-stencila-code-expression-material{background-color:var(--background);border-color:var(--border)}.sc-stencila-code-expression-material-h stencila-tooltip.sc-stencila-code-expression-material,stencila-code-expression.sc-stencila-code-expression-material stencila-tooltip.sc-stencila-code-expression-material{-ms-flex-align:stretch;align-items:stretch;display:-ms-inline-flexbox;display:inline-flex;line-height:1;overflow:hidden;padding:0;vertical-align:bottom}.sc-stencila-code-expression-material-h .actions.sc-stencila-code-expression-material,stencila-code-expression.sc-stencila-code-expression-material .actions.sc-stencila-code-expression-material{background-color:var(--background-buttons);border-bottom-left-radius:.25rem;border-top-left-radius:.25rem;display:-ms-inline-flexbox;display:inline-flex;-ms-flex:0 1 auto;flex:0 1 auto;position:relative;white-space:nowrap}.sc-stencila-code-expression-material-h .text.sc-stencila-code-expression-material,stencila-code-expression.sc-stencila-code-expression-material .text.sc-stencila-code-expression-material{background-color:var(--background-editor);color:#4a4a4a;color:var(--color-key,#4a4a4a);display:inline-block;font-family:monospace;font-family:var(--font-family-mono,monospace);font-size:.75rem;line-height:1rem;line-height:1;min-width:0;overflow:hidden;padding:.25rem 0;-webkit-transition-duration:.15s;transition-duration:.15s;-webkit-transition-property:width;transition-property:width;-webkit-transition-timing-function:cubic-bezier(0,0,.2,1);transition-timing-function:cubic-bezier(0,0,.2,1);white-space:nowrap;width:0}.sc-stencila-code-expression-material-h .output.sc-stencila-code-expression-material,.sc-stencila-code-expression-material-h .sc-stencila-code-expression-material-s>[slot=output],.sc-stencila-code-expression-material-h [slot=output].sc-stencila-code-expression-material,stencila-code-expression.sc-stencila-code-expression-material .output.sc-stencila-code-expression-material,stencila-code-expression.sc-stencila-code-expression-material-s>[slot=output],stencila-code-expression .sc-stencila-code-expression-material-s>[slot=output],stencila-code-expression.sc-stencila-code-expression-material [slot=output].sc-stencila-code-expression-material{background-color:#fff;background-color:var(--color-stock,#fff);border-style:none;color:#4a4a4a;color:var(--color-key,#4a4a4a);display:inline-block;font-family:monospace;font-family:var(--font-family-mono,monospace);font-size:.75rem;line-height:1rem;line-height:1;padding:.25rem .5rem .25rem .25rem}.sc-stencila-code-expression-material-h .output.sc-stencila-code-expression-material,.sc-stencila-code-expression-material-h .sc-stencila-code-expression-material-s>[slot=output],.sc-stencila-code-expression-material-h [slot=output].sc-stencila-code-expression-material,stencila-code-expression.sc-stencila-code-expression-material .output.sc-stencila-code-expression-material,stencila-code-expression .sc-stencila-code-expression-material-s>[slot=output],stencila-code-expression.sc-stencila-code-expression-material [slot=output].sc-stencila-code-expression-material{background-color:var(--background);-webkit-transition:padding .12s ease-out;transition:padding .12s ease-out}.sc-stencila-code-expression-material-h .output.sc-stencila-code-expression-material stencila-icon.sc-stencila-code-expression-material,.sc-stencila-code-expression-material-h .sc-stencila-code-expression-material-s>[slot=output] stencila-icon,.sc-stencila-code-expression-material-h [slot=output].sc-stencila-code-expression-material stencila-icon.sc-stencila-code-expression-material,stencila-code-expression.sc-stencila-code-expression-material .output.sc-stencila-code-expression-material stencila-icon.sc-stencila-code-expression-material,stencila-code-expression.sc-stencila-code-expression-material-s>[slot=output] stencila-icon,stencila-code-expression .sc-stencila-code-expression-material-s>[slot=output] stencila-icon,stencila-code-expression.sc-stencila-code-expression-material [slot=output].sc-stencila-code-expression-material stencila-icon.sc-stencila-code-expression-material{--height:1rem;height:1rem}.sc-stencila-code-expression-material-h .output.sc-stencila-code-expression-material stencila-icon.sc-stencila-code-expression-material svg.sc-stencila-code-expression-material,.sc-stencila-code-expression-material-h .sc-stencila-code-expression-material-s>[slot=output] stencila-icon svg,.sc-stencila-code-expression-material-h [slot=output].sc-stencila-code-expression-material stencila-icon.sc-stencila-code-expression-material svg.sc-stencila-code-expression-material,stencila-code-expression.sc-stencila-code-expression-material .output.sc-stencila-code-expression-material stencila-icon.sc-stencila-code-expression-material svg.sc-stencila-code-expression-material,stencila-code-expression.sc-stencila-code-expression-material-s>[slot=output] stencila-icon svg,stencila-code-expression .sc-stencila-code-expression-material-s>[slot=output] stencila-icon svg,stencila-code-expression.sc-stencila-code-expression-material [slot=output].sc-stencila-code-expression-material stencila-icon.sc-stencila-code-expression-material svg.sc-stencila-code-expression-material{stroke:#ba8925;stroke:var(--color-warn-600,#ba8925);height:1rem}.sc-stencila-code-expression-material-h .slot.hidden.sc-stencila-code-expression-material,stencila-code-expression.sc-stencila-code-expression-material .slot.hidden.sc-stencila-code-expression-material{display:none}.sc-stencila-code-expression-material-h .output.sc-stencila-code-expression-material>*.sc-stencila-code-expression-material,stencila-code-expression.sc-stencila-code-expression-material .output.sc-stencila-code-expression-material>*.sc-stencila-code-expression-material{background-color:#fff;background-color:var(--color-stock,#fff);border-style:none;color:#4a4a4a;color:var(--color-key,#4a4a4a);display:inline-block;font-family:monospace;font-family:var(--font-family-mono,monospace);font-size:.75rem;line-height:1rem;line-height:1;margin:0;padding:0;white-space:normal}.sc-stencila-code-expression-material-h .divider.sc-stencila-code-expression-material,stencila-code-expression.sc-stencila-code-expression-material .divider.sc-stencila-code-expression-material{fill:var(--background-buttons);-ms-flex-item-align:center;align-self:center;display:inline-block;max-height:1em;width:.5rem}.isCodeVisible.sc-stencila-code-expression-material-h .text.sc-stencila-code-expression-material,stencila-code-expression.isCodeVisible.sc-stencila-code-expression-material .text.sc-stencila-code-expression-material{display:inline-block;min-width:1em;padding:.25rem .5rem;white-space:pre-line;width:auto}.isCodeVisible.sc-stencila-code-expression-material-h .divider.sc-stencila-code-expression-material,stencila-code-expression.isCodeVisible.sc-stencila-code-expression-material .divider.sc-stencila-code-expression-material{fill:var(--background-editor)}.sc-stencila-code-expression-material-h .actions.sc-stencila-code-expression-material stencila-button.sc-stencila-code-expression-material,stencila-code-expression.sc-stencila-code-expression-material .actions.sc-stencila-code-expression-material stencila-button.sc-stencila-code-expression-material{-ms-flex-align:stretch;align-items:stretch;-ms-flex-item-align:start;align-self:flex-start;cursor:default;display:-ms-inline-flexbox;display:inline-flex;-ms-flex-negative:0;flex-shrink:0;overflow:hidden;-webkit-transition-duration:.15s;transition-duration:.15s;-webkit-transition-property:background-color,border-color,color,fill,stroke,opacity,-webkit-box-shadow,-webkit-transform,-webkit-filter,-webkit-backdrop-filter;transition-property:background-color,border-color,color,fill,stroke,opacity,-webkit-box-shadow,-webkit-transform,-webkit-filter,-webkit-backdrop-filter;transition-property:background-color,border-color,color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter;transition-property:background-color,border-color,color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter,-webkit-box-shadow,-webkit-transform,-webkit-filter,-webkit-backdrop-filter;-webkit-transition-property:padding,width,max-width;transition-property:padding,width,max-width;-webkit-transition-timing-function:cubic-bezier(.4,0,.2,1);transition-timing-function:cubic-bezier(.4,0,.2,1);-webkit-transition-timing-function:cubic-bezier(0,0,.2,1);transition-timing-function:cubic-bezier(0,0,.2,1)}.sc-stencila-code-expression-material-h .actions.sc-stencila-code-expression-material stencila-button.sourceToggle.sc-stencila-code-expression-material,stencila-code-expression.sc-stencila-code-expression-material .actions.sc-stencila-code-expression-material stencila-button.sourceToggle.sc-stencila-code-expression-material{display:inline-block;width:0}.isOutputEmpty.sc-stencila-code-expression-material-h .output.sc-stencila-code-expression-material,.sc-stencila-code-expression-material-h.isOutputEmpty .sc-stencila-code-expression-material-s>[slot=output],.isOutputEmpty.sc-stencila-code-expression-material-h [slot=output].sc-stencila-code-expression-material,.isOutputEmpty.sc-stencila-code-expression-material-h stencila-tooltip.sc-stencila-code-expression-material,stencila-code-expression.isOutputEmpty.sc-stencila-code-expression-material .output.sc-stencila-code-expression-material,stencila-code-expression.isOutputEmpty.sc-stencila-code-expression-material-s>[slot=output],stencila-code-expression.isOutputEmpty .sc-stencila-code-expression-material-s>[slot=output],stencila-code-expression.isOutputEmpty.sc-stencila-code-expression-material [slot=output].sc-stencila-code-expression-material,stencila-code-expression.isOutputEmpty.sc-stencila-code-expression-material stencila-tooltip.sc-stencila-code-expression-material{color:#6e7591;color:var(--color-neutral-500,#6e7591)}.hover.sc-stencila-code-expression-material-h .actions.sc-stencila-code-expression-material stencila-button.sourceToggle.sc-stencila-code-expression-material,.sc-stencila-code-expression-material-h:focus .actions.sc-stencila-code-expression-material stencila-button.sourceToggle.sc-stencila-code-expression-material,.sc-stencila-code-expression-material-h:focus-within .actions.sc-stencila-code-expression-material stencila-button.sourceToggle.sc-stencila-code-expression-material,.sc-stencila-code-expression-material-h:hover .actions.sc-stencila-code-expression-material stencila-button.sourceToggle.sc-stencila-code-expression-material,stencila-code-expression.hover.sc-stencila-code-expression-material .actions.sc-stencila-code-expression-material stencila-button.sourceToggle.sc-stencila-code-expression-material,stencila-code-expression.sc-stencila-code-expression-material:focus-within .actions.sc-stencila-code-expression-material stencila-button.sourceToggle.sc-stencila-code-expression-material,stencila-code-expression.sc-stencila-code-expression-material:focus .actions.sc-stencila-code-expression-material stencila-button.sourceToggle.sc-stencila-code-expression-material,stencila-code-expression.sc-stencila-code-expression-material:hover .actions.sc-stencila-code-expression-material stencila-button.sourceToggle.sc-stencila-code-expression-material{display:-ms-inline-flexbox;display:inline-flex;max-width:100%;width:2rem}";

const slots = {
  text: 'text',
  output: 'output',
};
const CodeExpressionComponent = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.emptyOutputMessage = 'No output to show';
    this.hoverTimeOut = undefined;
    this.hoverStartedAt = Date.now();
    this.hover = false;
    this.isCodeVisible = false;
    this.isOutputEmpty = false;
    this.executeCodeState = 'INITIAL';
    this.getOutputSlotContents = () => {
      var _a, _b;
      // Checking output list to account for non-text nodes such as images.
      const output = ((_b = (_a = this.outputSlot) === null || _a === void 0 ? void 0 : _a.childNodes) !== null && _b !== void 0 ? _b : [])[0];
      return output instanceof Text
        ? output.textContent
        : output instanceof HTMLElement
          ? output
          : output === undefined
            ? output
            : 'Could not display the output';
    };
    this.checkIfEmpty = () => {
      this.isOutputEmpty = this.getOutputSlotContents() === undefined;
    };
    this.collapseAllListenHandler = (e) => {
      this.isCodeVisible = e.detail.isVisible;
    };
    this.toggleCodeVisibility = () => (this.isCodeVisible = !this.isCodeVisible);
    this.selectTextSlot = () => this.el.querySelector(`.${slots.text}`);
    this.getTextSlotContents = () => {
      var _a;
      const slot = this.selectTextSlot();
      return (_a = slot === null || slot === void 0 ? void 0 : slot.textContent) !== null && _a !== void 0 ? _a : '';
    };
    this.handleKeyDown = (event) => {
      if (event.key === 'Enter' && event.shiftKey) {
        event.preventDefault();
        this.execute().catch((err) => {
          console.error(err);
        });
      }
    };
    this.onExecuteHandler = async () => {
      this.executeCodeState = 'PENDING';
      const node = await this.getContents();
      window.dispatchEvent(new CustomEvent('document:node:execute', {
        detail: {
          nodeId: this.el.id,
          value: node,
        },
      }));
      if (this.executeHandler !== undefined) {
        const computed = await this.executeHandler(node);
        this.executeCodeState = 'RESOLVED';
        this.isOutputEmpty =
          computed.output === undefined || computed.output === null;
        this.codeExpression = computed;
        return computed;
      }
      this.executeCodeState = 'RESOLVED';
      return node;
    };
    // Create an execute handler bound to this instance
    // @see https://github.com/typescript-eslint/typescript-eslint/blob/v3.7.0/packages/eslint-plugin/docs/rules/unbound-method.md
    this.executeRef = () => this.execute();
    this.dividerArrow = () => (index.h("svg", { class: "divider", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 8 24", preserveAspectRatio: "xMinYMin" }, index.h("path", { d: "M8 12L1 0H0v24h1l7-12z" })));
    this.onMouseOutHandler = (e) => {
      const target = e.target;
      const relatedTarget = e.relatedTarget;
      if (!(target === null || target === void 0 ? void 0 : target.contains(relatedTarget))) {
        this.removeHoverState();
      }
    };
    this.addHoverState = () => {
      window.clearTimeout(this.hoverTimeOut);
      if (!this.hover) {
        this.hover = true;
        this.hoverStartedAt = Date.now();
      }
    };
    this.removeHoverState = () => {
      const diff = Date.now() - this.hoverStartedAt;
      if (this.hover && diff < 60) {
        this.hoverTimeOut = window.setTimeout(() => {
          this.hover = false;
        }, 3000);
      }
      else if (this.hover) {
        this.hover = false;
      }
    };
    this.generateContent = () => {
      return [
        index.h("span", { class: "actions" }, index.h("stencila-button", { "aria-label": "Run Code", class: "run", onClick: this.executeRef, color: "key", disabled: !this.executeHandler, isLoading: this.executeCodeState === 'PENDING', icon: "play", iconOnly: true, minimal: true, size: "xsmall", tooltip: "Run" }), index.h("stencila-button", { "aria-label": "Run Code", class: "sourceToggle", onClick: this.toggleCodeVisibility, color: "key", icon: this.isCodeVisible ? 'eye-off' : 'eye', iconOnly: true, minimal: true, size: "xsmall", tooltip: `${this.isCodeVisible ? 'Hide' : 'Show'} Code` }), index.h("span", { class: "text", contentEditable: true, onBlur: this.removeHoverState, tabIndex: this.isCodeVisible ? 0 : -1 }, index.h("slot", { name: slots.text }))),
        this.dividerArrow(),
        index.h("span", { class: { hidden: true, slot: true } }, index.h("slot", { name: "output" })),
        this.isOutputEmpty ? (index.h("stencila-tooltip", { text: this.emptyOutputMessage, class: "output" }, "\u2026")) : (index.h(NodeRenderer, { node: this.codeExpression !== undefined
            ? this.codeExpression.output
            : this.getOutputSlotContents() })),
      ];
    };
  }
  componentWillLoad() {
    this.outputSlot = Array.from(this.el.children).filter((el) => el.slot === slots.output)[0];
    this.checkIfEmpty();
  }
  onSetAllCodeVisibility(event) {
    this.collapseAllListenHandler(event);
  }
  onUpdateCodeChunk({ detail }) {
    if (detail.nodeId === this.el.id && schema.qe('CodeExpression', detail.value)) {
      this.codeExpression = detail.value;
    }
  }
  /**
   * Returns the `CodeExpression` node with the updated `text` contents from the editor.
   */
  async getContents() {
    return Promise.resolve(schema.c({
      text: this.getTextSlotContents(),
      programmingLanguage: this.programmingLanguage,
    }));
  }
  /**
   * Run the `CodeExpression`
   */
  async execute() {
    this.executeCodeState = 'PENDING';
    try {
      const res = await this.onExecuteHandler();
      // Add artificial delay to allow user to register the spinner
      window.setTimeout(() => (this.executeCodeState = 'RESOLVED'), 250);
      return res;
    }
    catch (err) {
      console.error(err);
      this.executeCodeState = 'RESOLVED';
      return err;
    }
  }
  render() {
    return (index.h(index.Host, { class: {
        hover: this.hover,
        isCodeVisible: this.isCodeVisible,
        isOutputEmpty: this.isOutputEmpty,
      }, onMouseEnter: this.addHoverState, onMouseOut: this.onMouseOutHandler, onKeyDown: this.handleKeyDown }, this.generateContent()));
  }
  get el() { return index.getElement(this); }
};
CodeExpressionComponent.style = {
  default: defaultCodeExpressionCss,
  material: materialCodeExpressionCss
};

exports.stencila_code_expression = CodeExpressionComponent;
