# stencila-executable-document-toolbar



<!-- Auto Generated Below -->


## Properties

| Property             | Attribute              | Description                                                                                                                                                                                                                   | Type     | Default     |
| -------------------- | ---------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------- | ----------- |
| `sessionProviderUrl` | `session-provider-url` | The URL for requesting a SoftwareSession as defined in Stencila Schema. Passed to Stencila Executa for instantiating the session. TODO: If undefined user should be able to set one themselves (e.g. running a local machine) | `string` | `undefined` |
| `sourceUrl`          | `source-url`           | The URL of the document being decorated. Could be a Snapshot from Stencila Hub, a Project URL, or something else.                                                                                                             | `string` | `undefined` |


## Dependencies

### Depends on

- [stencila-toolbar](../toolbar)
- [stencila-button](../button)
- [stencila-icon](../icon)
- [stencila-tooltip](../tooltip)
- animate-presence
- [stencila-toast](../toast)

### Graph
```mermaid
graph TD;
  stencila-executable-document-toolbar --> stencila-toolbar
  stencila-executable-document-toolbar --> stencila-button
  stencila-executable-document-toolbar --> stencila-icon
  stencila-executable-document-toolbar --> stencila-tooltip
  stencila-executable-document-toolbar --> animate-presence
  stencila-executable-document-toolbar --> stencila-toast
  stencila-button --> stencila-icon
  stencila-button --> stencila-tooltip
  stencila-tooltip --> stencila-tooltip-element
  stencila-toast --> animate-presence
  stencila-toast --> stencila-toast
  style stencila-executable-document-toolbar fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
