# stencila-error

<!-- Auto Generated Below -->


## Properties

| Property        | Attribute        | Description                                         | Type                                  | Default     |
| --------------- | ---------------- | --------------------------------------------------- | ------------------------------------- | ----------- |
| `hasStacktrace` | `has-stacktrace` | The severity of the error message                   | `boolean`                             | `undefined` |
| `kind`          | `kind`           | The severity of the error message                   | `"error" \| "incapable" \| "warning"` | `'warning'` |
| `open`          | `open`           | Determines whether the stacktrace is visible or not | `boolean`                             | `false`     |


## Dependencies

### Used by

 - [stencila-code-chunk](../codeChunk)

### Depends on

- [stencila-icon](../icon)
- [stencila-details](../details)

### Graph
```mermaid
graph TD;
  stencila-code-error --> stencila-icon
  stencila-code-error --> stencila-details
  stencila-details --> stencila-icon
  stencila-code-chunk --> stencila-code-error
  style stencila-code-error fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
