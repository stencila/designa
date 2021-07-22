# stencila-toast-container



<!-- Auto Generated Below -->


## Properties

| Property   | Attribute  | Description                                                                                | Type                                                                                      | Default                    |
| ---------- | ---------- | ------------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------- | -------------------------- |
| `position` | `position` | Default position of Toasts on the screen. Can be overridden by individual Toast instances. | `"bottomCenter" \| "bottomEnd" \| "bottomStart" \| "topCenter" \| "topEnd" \| "topStart"` | `ToastPositions.topCenter` |


## Dependencies

### Used by

 - [stencila-executable-document-toolbar](../executableDocumentToolbar)
 - [stencila-toast](../toast)
 - [stencila-toast-container](.)

### Depends on

- animate-presence
- [stencila-toast-container](.)
- [stencila-toast](../toast)

### Graph
```mermaid
graph TD;
  stencila-toast-container --> stencila-toast-container
  stencila-toast --> stencila-toast-container
  stencila-button --> stencila-icon
  stencila-button --> stencila-tooltip
  stencila-tooltip --> stencila-tooltip-element
  stencila-executable-document-toolbar --> stencila-toast-container
  style stencila-toast-container fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
