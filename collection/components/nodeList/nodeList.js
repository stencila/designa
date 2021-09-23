import { Component, Element, h, Host, Prop, State } from '@stencil/core';
import { isA, isIn, isPrimitive } from '@stencila/schema';
import { isEmpty } from 'fp-ts/lib/Array';
import { preferredImageObjectComponent } from '../imageObject/imageObjectUtils';
const slots = {
  nodes: 'outputs',
  errors: 'errors',
};
export class OutputsList {
  constructor() {
    /**
     * Array of nodes to render.
     */
    this.nodes = undefined;
    this.isEmpty = this.nodes === undefined ||
      (this.nodes !== undefined && isEmpty(this.nodes));
    this.checkIfEmpty = () => {
      var _a;
      let empty;
      /**
       * If the `nodes` prop has been passed in, we can ignore the `<slotted>` content,
       * and use the props as the most up to date output content.
       */
      if (this.nodes !== undefined) {
        empty = isEmpty(this.nodes);
        this.isEmpty = empty;
        return empty;
      }
      /**
       * If the `outputs` slot doesn't exist, or contains no content, the output is empty.
       */
      empty =
        this.el.children.length === 0 ||
          Array.from((_a = this.el.children) !== null && _a !== void 0 ? _a : []).reduce((text, el) => text + el.innerHTML.trim(), '') === '';
      this.isEmpty = empty;
      return empty;
    };
    this.emptyOutputMessage = 'No output to show';
    this.renderNodes = (nodes) => {
      return nodes === null || nodes === void 0 ? void 0 : nodes.map((node) => this.renderNode(node));
    };
    this.renderNode = (node) => {
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
        return preferredImageObjectComponent(node);
      }
      else if (isA('Datatable', node)) {
        return h("stencila-data-table", { table: node });
      }
      return JSON.stringify(node);
    };
  }
  componentWillLoad() {
    this.checkIfEmpty();
  }
  componentWillUpdate() {
    this.checkIfEmpty();
  }
  render() {
    return (h(Host, null,
      h("div", { class: { hidden: this.nodes !== undefined, slot: true } },
        h("slot", { name: slots.nodes })),
      this.isEmpty && (h("em", { class: "emptyContentMessage" }, this.emptyOutputMessage)),
      !this.isEmpty && h("figure", null, this.renderNodes(this.nodes)),
      h("slot", null)));
  }
  static get is() { return "stencila-node-list"; }
  static get encapsulation() { return "scoped"; }
  static get originalStyleUrls() { return {
    "default": ["nodeList.css"],
    "material": ["nodeList.css"]
  }; }
  static get styleUrls() { return {
    "default": ["nodeList.css"],
    "material": ["nodeList.css"]
  }; }
  static get properties() { return {
    "nodes": {
      "type": "unknown",
      "mutable": false,
      "complexType": {
        "original": "Node[] | undefined",
        "resolved": "Node[] | undefined",
        "references": {
          "Node": {
            "location": "import",
            "path": "@stencila/schema"
          }
        }
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "Array of nodes to render."
      },
      "defaultValue": "undefined"
    }
  }; }
  static get states() { return {
    "isEmpty": {}
  }; }
  static get elementRef() { return "el"; }
}
