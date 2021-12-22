# stencila-code-chunk

<!-- Auto Generated Below -->


## Properties

| Property               | Attribute              | Description                                                                                             | Type                                                             | Default         |
| ---------------------- | ---------------------- | ------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------- | --------------- |
| `autofocus`            | `autofocus`            | Autofocus the editor on page load                                                                       | `boolean`                                                        | `false`         |
| `codeChunk`            | --                     | Stencila CodeChunk node to render                                                                       | `CodeChunk \| undefined`                                         | `undefined`     |
| `contentChangeHandler` | --                     | Callback function to invoke whenever the editor contents are updated.                                   | `((updateEvent?: ViewUpdate \| undefined) => void) \| undefined` | `undefined`     |
| `executableLanguages`  | --                     | List of programming languages that can be executed in the current context                               | `undefined \| { [x: string]: FileFormat; }`                      | `undefined`     |
| `executeHandler`       | --                     | A callback function to be called with the value of the `CodeChunk` node when executing the `CodeChunk`. | `((codeChunk: CodeChunk) => Promise<CodeChunk>) \| undefined`    | `undefined`     |
| `isCodeVisible`        | `is-code-visible`      | Whether the code section is visible or not                                                              | `boolean`                                                        | `false`         |
| `keymap`               | --                     | Custom keyboard shortcuts to pass along to CodeMirror                                                   | `KeyBinding[]`                                                   | `[]`            |
| `languageCapabilities` | --                     | List of all supported programming languages                                                             | `{ [x: string]: FileFormat; }`                                   | `fileFormatMap` |
| `programmingLanguage`  | `programming-language` | Programming language of the CodeChunk                                                                   | `string \| undefined`                                            | `undefined`     |
| `text`                 | `text`                 |                                                                                                         | `string \| undefined`                                            | `undefined`     |


## Events

| Event                             | Description                                                                                                                                                     | Type               |
| --------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------ |
| `stencila-code-visibility-change` | Trigger a global DOM event to hide or show all `CodeChunk` and `CodeExpress` component source code, leaving only the results visible.                           | `CustomEvent<any>` |
| `stencila-editor-layout-change`   | Trigger a global DOM event to set the layout of all `CodeChunk` component. Can be set to either show the editor and outputs side by side or stacked vertically. | `CustomEvent<any>` |


## Methods

### `execute() => Promise<CodeChunk>`

Run the `CodeChunk`

#### Returns

Type: `Promise<CodeChunk>`



### `getContents() => Promise<CodeChunk>`

Returns the `CodeChunk` node with the updated `text` content from the editor.

#### Returns

Type: `Promise<CodeChunk>`



### `getRef() => Promise<EditorView | undefined>`

Retrieve a reference to the internal CodeMirror editor.
Allows for maintaining state from applications making use of this component.

#### Returns

Type: `Promise<EditorView | undefined>`



### `getTextContents() => Promise<string>`

Returns the text contents from the editor

#### Returns

Type: `Promise<string>`




## Slots

| Slot        | Description                                                                                                                |
| ----------- | -------------------------------------------------------------------------------------------------------------------------- |
| `"caption"` | `figcaption` content of the `CodeChunk`. Corresponds to the `caption` field in the Stencila `CodeChunk` Schema.            |
| `"errors"`  | List of any errors encountered when compiling (e.g. syntax errors) or executing the CodeChunk.                             |
| `"label"`   | `label` element label of the `CodeChunk`. Corresponds to the `label` field in the Stencila `CodeChunk` Schema.             |
| `"outputs"` | The resulting output when evaluating the CodeChunk. Corresponds to the `outputs` field in the Stencila `CodeChunk` Schema. |
| `"text"`    | The source code of the `CodeChunk`. Corresponds to the `text` field in the Stencila `CodeChunk` Schema.                    |


## CSS Custom Properties

| Name                  | Description                                                            |
| --------------------- | ---------------------------------------------------------------------- |
| `--background`        | Background color of the Code Output section                            |
| `--background-editor` | Background color of the Code Editor section                            |
| `--border`            | Border color around the component as well as internal section dividers |


## Dependencies

### Depends on

- [stencila-action-menu](../actionMenu)
- [stencila-button](../button)
- [stencila-editor](../editor)
- [stencila-node-list](../nodeList)

### Graph
```mermaid
graph TD;
  stencila-code-chunk --> stencila-action-menu
  stencila-code-chunk --> stencila-button
  stencila-code-chunk --> stencila-editor
  stencila-code-chunk --> stencila-node-list
  stencila-action-menu --> stencila-button
  stencila-button --> stencila-icon
  stencila-button --> stencila-tooltip
  stencila-tooltip --> stencila-tooltip-element
  stencila-editor --> stencila-icon
  style stencila-code-chunk fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
