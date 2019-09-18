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

### Used by

 - [stencila-code-expression](../codeExpression)

### Depends on

- [stencila-button](../button)
- [stencila-action-menu](../actionMenu)

### Graph
```mermaid
graph TD;
  stencila-code-chunk --> stencila-button
  stencila-code-chunk --> stencila-action-menu
  stencila-code-expression --> stencila-code-chunk
  style stencila-code-chunk fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
