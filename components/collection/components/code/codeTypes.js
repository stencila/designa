// Defines a set of methods and properties that all `Code` node based components
// must implement to ensure a unified public API and interactions
class SharedCodeInterface {
}
// Ensure that Code components which have both `text` and `output` elements can toggle
// visibility of the `code` part.
class ExecutableCodeComponent {
}
/**
 * Components which wrap `<stencila-editor>` component do not need to implement the
 * following interfaces as they can be delegated to the editor component.
 */
export class EditorCodeMethods {
}
class EditorBasedCodeComponent extends SharedCodeInterface {
}
/**
 * Inline code components which do not wrap `stencila-editor` components.
 */
class NonEditorBasedCodeComponent extends SharedCodeInterface {
}
//# sourceMappingURL=codeTypes.js.map