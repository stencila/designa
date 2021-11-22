# stencila-code-expression

<!-- Auto Generated Below -->


## Properties

| Property              | Attribute              | Description                                                                                                       | Type                                                                         | Default     |
| --------------------- | ---------------------- | ----------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ----------- |
| `codeExpression`      | --                     | Stencila CodeExpression node to render                                                                            | `CodeExpression \| undefined`                                                | `undefined` |
| `executeHandler`      | --                     | A callback function to be called with the value of the `CodeExpression` node when executing the `CodeExpression`. | `((codeExpression: CodeExpression) => Promise<CodeExpression>) \| undefined` | `undefined` |
| `programmingLanguage` | `programming-language` | Programming language of the CodeExpression                                                                        | `string`                                                                     | `undefined` |


## Methods

### `execute() => Promise<CodeExpression>`

Run the `CodeExpression`

#### Returns

Type: `Promise<CodeExpression>`



### `getContents() => Promise<CodeExpression>`

Returns the `CodeExpression` node with the updated `text` contents from the editor.

#### Returns

Type: `Promise<CodeExpression>`




## Slots

| Slot       | Description                                                                                                  |
| ---------- | ------------------------------------------------------------------------------------------------------------ |
| `"output"` | A single output element. Corresponds to the `output` field in the Stencila `CodeExpression` Schema.          |
| `"text"`   | The source code of the `CodeChunk`. Corresponds to the `text` field in the Stencila `CodeExpression` Schema. |


## CSS Custom Properties

| Name                   | Description                                                            |
| ---------------------- | ---------------------------------------------------------------------- |
| `--background`         | Background color of the Code Output section                            |
| `--background-buttons` | Background color of the Code Editor section                            |
| `--background-editor`  | Background color of the Code Editor section                            |
| `--border`             | Border color around the component as well as internal section dividers |


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
