import { EditorView } from '@codemirror/view';
/**
 * CodeMirror extension which accepts a callback function, and invokes the given
 * function whenever the document contents are updated.
 */
export const updateListenerExtension = (updateHandler) => EditorView.updateListener.of((update) => {
  if (update.docChanged) {
    updateHandler(update);
  }
});
//# sourceMappingURL=onUpdateHandlerExtension.js.map