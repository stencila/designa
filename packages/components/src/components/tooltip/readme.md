# stencila-tooltip



<!-- Auto Generated Below -->


## Properties

| Property            | Attribute | Description                      | Type     | Default     |
| ------------------- | --------- | -------------------------------- | -------- | ----------- |
| `text` _(required)_ | `text`    | The text content of the Tooltip. | `string` | `undefined` |


## Dependencies

### Used by

 - [stencila-button](../button)
 - [stencila-code-expression](../codeExpression)

### Depends on

- [stencila-tooltip-element](../tooltipElement)

### Graph
```mermaid
graph TD;
  stencila-tooltip --> stencila-tooltip-element
  stencila-button --> stencila-tooltip
  stencila-code-expression --> stencila-tooltip
  style stencila-tooltip fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
