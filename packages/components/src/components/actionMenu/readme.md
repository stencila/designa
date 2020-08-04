# stencila-action-menu



<!-- Auto Generated Below -->


## Properties

| Property     | Attribute    | Description                                                   | Type                  | Default     |
| ------------ | ------------ | ------------------------------------------------------------- | --------------------- | ----------- |
| `actions`    | --           | List of buttons to include in Action Menu.                    | `HTMLButtonElement[]` | `undefined` |
| `expandable` | `expandable` | Defines whether the Action Menu can be collapsed and expanded | `boolean`             | `false`     |


## CSS Custom Properties

| Name           | Description                                   |
| -------------- | --------------------------------------------- |
| `--background` | Background color of the Action Menu component |
| `--border`     | Border color of the Action Menu component     |


## Dependencies

### Used by

 - [stencila-code-chunk](../codeChunk)

### Depends on

- [stencila-button](../button)

### Graph
```mermaid
graph TD;
  stencila-action-menu --> stencila-button
  stencila-button --> stencila-icon
  stencila-button --> stencila-tooltip
  stencila-tooltip --> stencila-tooltip-element
  stencila-code-chunk --> stencila-action-menu
  style stencila-action-menu fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
