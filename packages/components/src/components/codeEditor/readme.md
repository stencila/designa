# stencila-code-editor

<!-- Auto Generated Below -->


## Properties

| Property               | Attribute              | Description                                                  | Type                                         | Default                                                     |
| ---------------------- | ---------------------- | ------------------------------------------------------------ | -------------------------------------------- | ----------------------------------------------------------- |
| `executeHandler`       | --                     | Function to be evaluated over the contents of the CodeChunk. | `(codeChunk: CodeChunk) => Promise<unknown>` | `undefined`                                                 |
| `lineNumbers`          | `line-numbers`         | Determines the visibility of line numbers                    | `boolean`                                    | `true`                                                      |
| `programmingLanguage`  | `programming-language` | Programming language of the CodeEditor                       | `string`                                     | `undefined`                                                 |
| `programmingLanguages` | --                     | List of all supported programming languages                  | `string[]`                                   | `[     'Bash',     'JavaScript',     'R',     'Python'   ]` |


## Methods

### `getJSON() => Promise<CodeChunk>`

Public method, returning the CodeChunk contents as Stencila JSON.

#### Returns

Type: `Promise<CodeChunk>`




## Dependencies

### Used by

 - [stencila-code-chunk](../codeChunk)

### Graph
```mermaid
graph TD;
  stencila-code-chunk --> stencila-code-editor
  style stencila-code-editor fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
