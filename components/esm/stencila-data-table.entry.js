import { r as registerInstance, h, e as Host } from './index-2305c23c.js';

const defaultDataTableCss = "[itemtype=\"https://schema.stenci.la/Datatable\"].sc-stencila-data-table-default,stencila-data-table.sc-stencila-data-table-default{display:block;overflow:auto}[itemtype=\"https://schema.stenci.la/Datatable\"].sc-stencila-data-table-default-s>table,stencila-data-table.sc-stencila-data-table-default-s>table{border-collapse:collapse;font-family:sans-serif;font-family:var(--font-family-body,sans-serif);font-size:.875rem;line-height:1.25rem}[itemtype=\"https://schema.stenci.la/Datatable\"].sc-stencila-data-table-default-s>table td,[itemtype=\"https://schema.stenci.la/Datatable\"].sc-stencila-data-table-default-s>table th,stencila-data-table.sc-stencila-data-table-default-s>table td,stencila-data-table.sc-stencila-data-table-default-s>table th{padding:.25rem .5rem}[itemtype=\"https://schema.stenci.la/Datatable\"].sc-stencila-data-table-default-s>table th,stencila-data-table.sc-stencila-data-table-default-s>table th{background-color:#e9eaf1;background-color:var(--color-neutral-50,#e9eaf1);font-weight:700}[itemtype=\"https://schema.stenci.la/Datatable\"].sc-stencila-data-table-default-s>table tbody tr:nth-child(2n),stencila-data-table.sc-stencila-data-table-default-s>table tbody tr:nth-child(2n){background-color:#e9eaf1;background-color:var(--color-neutral-50,#e9eaf1)}";

const materialDataTableCss = "[itemtype=\"https://schema.stenci.la/Datatable\"].sc-stencila-data-table-material,stencila-data-table.sc-stencila-data-table-material{display:block;overflow:auto}[itemtype=\"https://schema.stenci.la/Datatable\"].sc-stencila-data-table-material-s>table,stencila-data-table.sc-stencila-data-table-material-s>table{border-collapse:collapse;font-family:sans-serif;font-family:var(--font-family-body,sans-serif);font-size:.875rem;line-height:1.25rem}[itemtype=\"https://schema.stenci.la/Datatable\"].sc-stencila-data-table-material-s>table td,[itemtype=\"https://schema.stenci.la/Datatable\"].sc-stencila-data-table-material-s>table th,stencila-data-table.sc-stencila-data-table-material-s>table td,stencila-data-table.sc-stencila-data-table-material-s>table th{padding:.25rem .5rem}[itemtype=\"https://schema.stenci.la/Datatable\"].sc-stencila-data-table-material-s>table th,stencila-data-table.sc-stencila-data-table-material-s>table th{background-color:#e9eaf1;background-color:var(--color-neutral-50,#e9eaf1);font-weight:700}[itemtype=\"https://schema.stenci.la/Datatable\"].sc-stencila-data-table-material-s>table tbody tr:nth-child(2n),stencila-data-table.sc-stencila-data-table-material-s>table tbody tr:nth-child(2n){background-color:#e9eaf1;background-color:var(--color-neutral-50,#e9eaf1)}";

const DataTable = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return (h(Host, null, h("slot", null)));
  }
};
DataTable.style = {
  default: defaultDataTableCss,
  material: materialDataTableCss
};

export { DataTable as stencila_data_table };

//# sourceMappingURL=stencila-data-table.entry.js.map