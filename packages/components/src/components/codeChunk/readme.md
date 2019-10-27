# stencila-button

<!-- Auto Generated Below -->


## Properties

| Property              | Attribute        | Description                                | Type                                   | Default     |
| --------------------- | ---------------- | ------------------------------------------ | -------------------------------------- | ----------- |
| `executeHandler`      | --               |                                            | `(text: string) => Promise<CodeChunk>` | `undefined` |
| `isCodeCollapsedProp` | `data-collapsed` | Whether the code section is visible or not | `boolean`                              | `false`     |


## Events

| Event             | Description | Type               |
| ----------------- | ----------- | ------------------ |
| `collapseAllCode` |             | `CustomEvent<any>` |


## Dependencies

### Depends on

- [stencila-error](../error)
- [stencila-action-menu](../actionMenu)
- [stencila-button](../button)

### Graph
```mermaid
graph TD;
  stencila-code-chunk --> stencila-error
  stencila-code-chunk --> stencila-action-menu
  stencila-code-chunk --> stencila-button
  stencila-error --> stencila-icon
  stencila-error --> stencila-details
  stencila-details --> stencila-icon
  stencila-action-menu --> stencila-button
  stencila-button --> stencila-icon
  style stencila-code-chunk fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
