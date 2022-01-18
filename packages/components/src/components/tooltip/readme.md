# stencila-tooltip



<!-- Auto Generated Below -->


## Properties

| Property            | Attribute  | Description                      | Type                                                                                                                                                                                                         | Default     |
| ------------------- | ---------- | -------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ----------- |
| `position`          | `position` | The placement of the tooltip     | `"auto" \| "auto-end" \| "auto-start" \| "bottom" \| "bottom-end" \| "bottom-start" \| "left" \| "left-end" \| "left-start" \| "right" \| "right-end" \| "right-start" \| "top" \| "top-end" \| "top-start"` | `'bottom'`  |
| `text` _(required)_ | `text`     | The text content of the Tooltip. | `string`                                                                                                                                                                                                     | `undefined` |


## Dependencies

### Used by

 - [stencila-button](../button)
 - [stencila-code-chunk](../codeChunk)
 - [stencila-code-dependency](../codeDependency)
 - [stencila-code-expression](../codeExpression)
 - [stencila-executable-document-toolbar](../executableDocumentToolbar)

### Depends on

- [stencila-tooltip-element](../tooltipElement)

### Graph
```mermaid
graph TD;
  stencila-tooltip --> stencila-tooltip-element
  stencila-button --> stencila-tooltip
  stencila-code-chunk --> stencila-tooltip
  stencila-code-dependency --> stencila-tooltip
  stencila-code-expression --> stencila-tooltip
  stencila-executable-document-toolbar --> stencila-tooltip
  style stencila-tooltip fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
