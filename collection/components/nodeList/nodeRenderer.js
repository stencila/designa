import { h } from '@stencil/core';
import { isA, isIn, isPrimitive } from '@stencila/schema';
const schemaNodeHTMLRegExp = /itemtype=".+?"/;
const renderNode = (node) => {
  if (typeof node === 'string' && schemaNodeHTMLRegExp.test(node)) {
    return h("span", { innerHTML: node });
  }
  if (node instanceof HTMLElement) {
    return h("span", { innerHTML: node.outerHTML });
  }
  if (isPrimitive(node)) {
    const text = typeof node === 'string' || typeof node === 'number'
      ? node
      : JSON.stringify(node);
    return (h("pre", null,
      h("output", null, text)));
  }
  else if (isIn('CodeTypes', node)) {
    return (h("pre", null,
      h("output", null, node.text)));
  }
  else if (isA('ImageObject', node)) {
    return h("stencila-image-object", { image: node });
  }
  else if (isA('Datatable', node)) {
    return h("stencila-data-table", { table: node });
  }
  return h("span", null, JSON.stringify(node));
};
export const NodeRenderer = ({ node }) => (h("span", { class: "output" }, node !== undefined ? renderNode(node) : null));
