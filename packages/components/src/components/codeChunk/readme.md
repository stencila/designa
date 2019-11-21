# stencila-code-chunk

<!-- Auto Generated Below -->


## Properties

| Property                  | Attribute                  | Description                                | Type                                           | Default     |
| ------------------------- | -------------------------- | ------------------------------------------ | ---------------------------------------------- | ----------- |
| `executeHandler`          | --                         |                                            | `(codeChunk: CodeChunk) => Promise<CodeChunk>` | `undefined` |
| `isCodeCollapsedProp`     | `data-collapsed`           | Whether the code section is visible or not | `boolean`                                      | `false`     |
| `programmingLanguageProp` | `data-programminglanguage` | Programming language of the CodeChunk      | `string`                                       | `undefined` |


## Events

| Event             | Description | Type               |
| ----------------- | ----------- | ------------------ |
| `collapseAllCode` |             | `CustomEvent<any>` |


## Methods

### `getJSON() => Promise<unknown>`



#### Returns

Type: `Promise<unknown>`




## Dependencies

### Depends on

- [stencila-code-error](../error)
- [stencila-action-menu](../actionMenu)
- [stencila-button](../button)

### Graph
```mermaid
graph TD;
  stencila-code-chunk --> stencila-code-error
  stencila-code-chunk --> stencila-action-menu
  stencila-code-chunk --> stencila-button
  stencila-code-error --> stencila-icon
  stencila-code-error --> stencila-details
  stencila-details --> stencila-icon
  stencila-action-menu --> stencila-button
  stencila-button --> stencila-icon
  style stencila-code-chunk fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
