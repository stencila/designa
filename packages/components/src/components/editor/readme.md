# stencila-editor

<!-- Auto Generated Below -->


## Properties

| Property               | Attribute         | Description                                                                                                                            | Type                                                            | Default                                                                                                                                                                                 |
| ---------------------- | ----------------- | -------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `activeLanguage`       | `active-language` | Programming language of the Editor                                                                                                     | `string`                                                        | `this.languageCapabilities[0]?.toLowerCase() ?? ''`                                                                                                                                     |
| `autofocus`            | `autofocus`       | Autofocus the editor on page load                                                                                                      | `boolean`                                                       | `false`                                                                                                                                                                                 |
| `contents`             | `contents`        | Text contents of the editor                                                                                                            | `string \| undefined`                                           | `undefined`                                                                                                                                                                             |
| `errors`               | --                | List of errors to display at the bottom of the code editor section. If the error is a `string`, then it will be rendered as a warning. | `CodeError[] \| string[] \| undefined`                          | `undefined`                                                                                                                                                                             |
| `executeHandler`       | --                | Function to be evaluated over the contents of the editor.                                                                              | `((contents: EditorContents) => Promise<unknown>) \| undefined` | `undefined`                                                                                                                                                                             |
| `foldGutter`           | `fold-gutter`     | Enables abiility to fold sections of code                                                                                              | `boolean`                                                       | `true`                                                                                                                                                                                  |
| `keymap`               | --                | Custom keyboard shortcuts to pass along to CodeMirror                                                                                  | `KeyBinding[]`                                                  | `[]`                                                                                                                                                                                    |
| `languageCapabilities` | --                | List of all supported programming languages                                                                                            | `string[]`                                                      | `[     'Bash',     'Dockerfile',     'JavaScript',     'JSON',     'LaTeX',     'Markdown',     'Python',     'R',     'RMD',     'Plain Text',     'TOML',     'XML',     'YAML',   ]` |
| `lineNumbers`          | `line-numbers`    | Determines the visibility of line numbers                                                                                              | `boolean`                                                       | `true`                                                                                                                                                                                  |
| `lineWrapping`         | `line-wrapping`   | Control line wrapping of text inside the editor                                                                                        | `boolean`                                                       | `false`                                                                                                                                                                                 |
| `readOnly`             | `read-only`       | Disallow editing of the editor contents when set to `true`                                                                             | `boolean`                                                       | `false`                                                                                                                                                                                 |


## Events

| Event         | Description                                               | Type                               |
| ------------- | --------------------------------------------------------- | ---------------------------------- |
| `setLanguage` | Event emitted when the language of the editor is changed. | `CustomEvent<string \| undefined>` |


## Methods

### `getContents() => Promise<EditorContents>`

Public method, returning the Editor contents and active language.

#### Returns

Type: `Promise<EditorContents>`



### `setContents(contents: string) => Promise<string>`

Public method, to replace the contents of the Editor with a supplied string.

#### Returns

Type: `Promise<string>`




## CSS Custom Properties

| Name                       | Description                                        |
| -------------------------- | -------------------------------------------------- |
| `--line-number-background` | Background color of the Editor Line Numbers gutter |


## Dependencies

### Used by

 - [stencila-code-chunk](../codeChunk)

### Depends on

- [stencila-icon](../icon)

### Graph
```mermaid
graph TD;
  stencila-editor --> stencila-icon
  stencila-code-chunk --> stencila-editor
  style stencila-editor fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
