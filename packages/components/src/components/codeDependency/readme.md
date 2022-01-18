# stencila-code-dependency



<!-- Auto Generated Below -->


## Properties

| Property              | Attribute              | Description                                                                                                       | Type                                                                                                                                          | Default     |
| --------------------- | ---------------------- | ----------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- | ----------- |
| `executeAuto`         | `execute-auto`         |                                                                                                                   | `"Always" \| "Auto" \| "Never"`                                                                                                               | `undefined` |
| `executeRequired`     | `execute-required`     | Status of upstream dependencies, and whether the node needs to be re-executed                                     | `"DependenciesChanged" \| "DependenciesFailed" \| "NeverExecuted" \| "No" \| "SemanticsChanged"`                                              | `undefined` |
| `executeStatus`       | `execute-status`       | The execution status of the code node                                                                             | `"Cancelled" \| "Failed" \| "Running" \| "RunningPreviouslyFailed" \| "Scheduled" \| "ScheduledPreviouslyFailed" \| "Succeeded" \| undefined` | `undefined` |
| `label`               | `label`                | User assigned label for the node                                                                                  | `string`                                                                                                                                      | `undefined` |
| `nodeId`              | `node-id`              | The Node ID, should match the HTML `id` attribute.                                                                | `string`                                                                                                                                      | `undefined` |
| `nodeKind`            | `node-kind`            | Node kind, such as `CodeChunk`, `CodeExpression`, `Parameter`, etc. Aligns with the Stencila Schema node types.   | `string`                                                                                                                                      | `undefined` |
| `programmingLanguage` | `programming-language` | Programming language of the CodeExpression, note that not all nodes have this property (`Parameter` for example). | `string`                                                                                                                                      | `undefined` |


## Dependencies

### Depends on

- [stencila-tooltip](../tooltip)
- [stencila-icon](../icon)

### Graph
```mermaid
graph TD;
  stencila-code-dependency --> stencila-tooltip
  stencila-code-dependency --> stencila-icon
  stencila-tooltip --> stencila-tooltip-element
  style stencila-code-dependency fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
