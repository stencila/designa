# stencila-code-chunk

<!-- Auto Generated Below -->


## Properties

| Property                  | Attribute                  | Description                                                                                            | Type                                           | Default     |
| ------------------------- | -------------------------- | ------------------------------------------------------------------------------------------------------ | ---------------------------------------------- | ----------- |
| `executeHandler`          | --                         | A callback function to be called with the value of the `CodeChunk` node when execting the `CodeChunk`. | `(codeChunk: CodeChunk) => Promise<CodeChunk>` | `undefined` |
| `isCodeCollapsedProp`     | `data-collapsed`           | Whether the code section is visible or not                                                             | `boolean`                                      | `false`     |
| `programmingLanguageProp` | `data-programminglanguage` | Programming language of the CodeChunk                                                                  | `string`                                       | `undefined` |


## Events

| Event             | Description                                                                                                                             | Type               |
| ----------------- | --------------------------------------------------------------------------------------------------------------------------------------- | ------------------ |
| `collapseAllCode` | Trigger a global DOM event to collapse all `CodeChunk` and `CodeFragment` component code expressions, leaving only the results visible. | `CustomEvent<any>` |


## Methods

### `getJSON() => Promise<CodeChunk>`

Returns the `CodeChunk` node with the updated `text` content from the editor.

#### Returns

Type: `Promise<CodeChunk>`




## Dependencies

### Depends on

- [stencila-code-error](../error)
- [stencila-action-menu](../actionMenu)
- [stencila-button](../button)
- [stencila-code-editor](../codeEditor)
- [stencila-node-list](../nodeList)

### Graph
```mermaid
graph TD;
  stencila-code-chunk --> stencila-code-error
  stencila-code-chunk --> stencila-action-menu
  stencila-code-chunk --> stencila-button
  stencila-code-chunk --> stencila-code-editor
  stencila-code-chunk --> stencila-node-list
  stencila-code-error --> stencila-icon
  stencila-code-error --> stencila-details
  stencila-details --> stencila-icon
  stencila-action-menu --> stencila-button
  stencila-button --> stencila-icon
  stencila-node-list --> stencila-image-object
  style stencila-code-chunk fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
