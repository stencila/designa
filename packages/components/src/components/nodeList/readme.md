# stencila-node-list

<!-- Auto Generated Below -->


## Properties

| Property | Attribute | Description               | Type     | Default     |
| -------- | --------- | ------------------------- | -------- | ----------- |
| `nodes`  | --        | Array of nodes to render. | `Node[]` | `undefined` |


## Dependencies

### Used by

 - [stencila-code-chunk](../codeChunk)

### Depends on

- [stencila-image-object](../imageObject)
- [stencila-data-table](../dataTable)

### Graph
```mermaid
graph TD;
  stencila-node-list --> stencila-image-object
  stencila-node-list --> stencila-data-table
  stencila-code-chunk --> stencila-node-list
  style stencila-node-list fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
