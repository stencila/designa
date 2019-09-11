# stencila-button

<!-- Auto Generated Below -->


## Properties

| Property              | Attribute        | Description                                | Type      | Default |
| --------------------- | ---------------- | ------------------------------------------ | --------- | ------- |
| `isCodeCollapsedProp` | `data-collapsed` | Whether the code section is visible or not | `boolean` | `false` |


## Events

| Event             | Description | Type               |
| ----------------- | ----------- | ------------------ |
| `collapseAllCode` |             | `CustomEvent<any>` |


## Dependencies

### Depends on

- [stencila-actionmenu](../actionMenu)

### Graph
```mermaid
graph TD;
  stencila-codechunk --> stencila-actionmenu
  style stencila-codechunk fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
