import { Component, h, Host } from '@stencil/core';
/**
 * @slot default - The table element to render. Expects a fully formed and valid HTML `table` tag.
 */
export class DataTable {
  render() {
    return (h(Host, null,
      h("slot", null)));
  }
  static get is() { return "stencila-data-table"; }
  static get encapsulation() { return "scoped"; }
  static get originalStyleUrls() { return {
    "default": ["dataTable.css"],
    "material": ["dataTable.css"]
  }; }
  static get styleUrls() { return {
    "default": ["dataTable.css"],
    "material": ["dataTable.css"]
  }; }
}
//# sourceMappingURL=dataTable.js.map