# stencila-parameter



<!-- Auto Generated Below -->


## Properties

| Property    | Attribute   | Description                                                                                               | Type                                                                                                                                                                   | Default     |
| ----------- | ----------- | --------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------- |
| `mode`      | `mode`      | The context of the component. In `read` mode the parameter validator and its properties cannot be edited. | `"edit" \| "read"`                                                                                                                                                     | `'edit'`    |
| `validator` | `validator` | The Stencila `Validator` Schema with which to configure and validate the parameter.                       | `"ArrayValidator" \| "BooleanValidator" \| "ConstantValidator" \| "EnumValidator" \| "IntegerValidator" \| "NumberValidator" \| "StringValidator" \| "TupleValidator"` | `undefined` |


## Events

| Event                       | Description                                                                                                                                                                                                          | Type               |
| --------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------ |
| `stencila-parameter-change` | Event emitted when either the name of value of the parameter changes. You can use the `type` property of the event detail to determine the type of change, it will be either `value` or `name`.                      | `CustomEvent<any>` |
| `stencila-validator-change` | Event emitted when either the type or property of the parameter validator changes. You can use the `type` property of the event detail to determine the type of change, it will be either `validator` or `property`. | `CustomEvent<any>` |


## Slots

| Slot      | Description                        |
| --------- | ---------------------------------- |
| `"name"`  | The name of the parameter          |
| `"value"` | The current value of the parameter |


## CSS Custom Properties

| Name                   | Description                                                            |
| ---------------------- | ---------------------------------------------------------------------- |
| `--background`         | Background color of the Parameter component                            |
| `--background-buttons` | Background color of the parameter validator section                    |
| `--border`             | Border color around the component as well as internal section dividers |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
