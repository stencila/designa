import { Component, h, Prop } from '@stencil/core';
export class DataTable {
  render() {
    var _a;
    const cols = this.table.columns;
    const rows = (_a = cols === null || cols === void 0 ? void 0 : cols[0].values.map((_, row) => row)) !== null && _a !== void 0 ? _a : [];
    return (h("table", { itemtype: "https://schema.stenci.la/Datatable" },
      h("thead", null,
        h("tr", null, cols.map((col) => (h("th", null, col.name))))),
      h("tbody", null, rows.map((_, row) => (h("tr", null, cols.map((col) => (h("td", null, col.values[row])))))))));
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
  static get properties() { return {
    "table": {
      "type": "unknown",
      "mutable": false,
      "complexType": {
        "original": "Datatable",
        "resolved": "Datatable",
        "references": {
          "Datatable": {
            "location": "import",
            "path": "@stencila/schema"
          }
        }
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "The `Datatable` node to render"
      }
    }
  }; }
}
