# stencila-code-expression

<!-- Auto Generated Below -->


## Properties

| Property         | Attribute | Description                                                                                                      | Type                                                                         | Default     |
| ---------------- | --------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ----------- |
| `executeHandler` | --        | A callback function to be called with the value of the `CodeExpression` node when execting the `CodeExpression`. | `((codeExpression: CodeExpression) => Promise<CodeExpression>) \| undefined` | `undefined` |


## Methods

### `execute() => Promise<CodeExpression>`

Run the `CodeChunk`

#### Returns

Type: `Promise<CodeExpression>`



### `getContents() => Promise<CodeExpression>`

Returns the `CodeExpression` node with the updated `text` contents from the editor.

#### Returns

Type: `Promise<CodeExpression>`




## CSS Custom Properties

| Name                  | Description                                                            |
| --------------------- | ---------------------------------------------------------------------- |
| `--background`        | Background color of the Code Output section                            |
| `--background-editor` | Background color of the Code Editor section                            |
| `--border`            | Border color around the component as well as internal section dividers |


## Dependencies

### Depends on

- [stencila-button](../button)
- [stencila-tooltip](../tooltip)

### Graph
```mermaid
graph TD;
  stencila-code-expression --> stencila-button
  stencila-code-expression --> stencila-tooltip
  stencila-button --> stencila-icon
  stencila-button --> stencila-tooltip
  stencila-tooltip --> stencila-tooltip-element
  style stencila-code-expression fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
