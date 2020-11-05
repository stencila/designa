# stencila-image-object

<!-- Auto Generated Below -->


## Properties

| Property | Attribute | Description                      | Type          | Default     |
| -------- | --------- | -------------------------------- | ------------- | ----------- |
| `image`  | --        | The `ImageObject` node to render | `ImageObject` | `undefined` |


## Dependencies

### Used by

 - [stencila-code-expression](../codeExpression)
 - [stencila-node-list](../nodeList)

### Depends on

- [stencila-image-plotly](../imagePlotly)

### Graph
```mermaid
graph TD;
  stencila-image-object --> stencila-image-plotly
  stencila-code-expression --> stencila-image-object
  stencila-node-list --> stencila-image-object
  style stencila-image-object fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
