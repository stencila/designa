# stencila-button

<!-- Auto Generated Below -->


## Properties

| Property        | Attribute        | Description | Type                                  | Default     |
| --------------- | ---------------- | ----------- | ------------------------------------- | ----------- |
| `hasStacktrace` | `has-stacktrace` |             | `boolean`                             | `undefined` |
| `kind`          | `kind`           |             | `"error" \| "incapable" \| "warning"` | `'warning'` |
| `open`          | `open`           |             | `boolean`                             | `false`     |


## Dependencies

### Used by

 - [stencila-code-chunk](../codeChunk)

### Depends on

- [stencila-icon](../icon)
- [stencila-details](../details)

### Graph
```mermaid
graph TD;
  stencila-error --> stencila-icon
  stencila-error --> stencila-details
  stencila-details --> stencila-icon
  stencila-code-chunk --> stencila-error
  style stencila-error fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
