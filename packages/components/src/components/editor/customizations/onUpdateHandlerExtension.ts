import { Extension } from '@codemirror/state'
import { EditorView, ViewUpdate } from '@codemirror/view'

export type EditorUpdateHandlerCb = (updateEvent?: ViewUpdate) => void

/**
 * CodeMirror extension which accepts a callback function, and invokes the given
 * function whenever the document contents are updated.
 */
export const updateListenerExtension = (
  updateHandler: EditorUpdateHandlerCb
): Extension =>
  EditorView.updateListener.of((update) => {
    if (update.docChanged) {
      updateHandler(update)
    }
  })
