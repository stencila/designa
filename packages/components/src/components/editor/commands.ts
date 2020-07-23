import { EditorSelection, Transaction } from '@codemirror/next/state'
import { Command, EditorView } from '@codemirror/next/view/src'

// Collection of CodeMirror Commands
// @see https://codemirror.net/6/docs/ref/#commands

// Copied from https://github.com/codemirror/codemirror.next/blob/2d0e33f422a8b30f4f5476c604f6e09f289a1a7f/commands/src/commands.ts#L293
// as this function is not exported by the library
function deleteBy(view: EditorView, by: (start: number) => number) {
  const { state } = view
  const changes = state.changeByRange((range) => {
    let { from, to } = range
    if (from === to) {
      const towards = by(from)
      from = Math.min(from, towards)
      to = Math.max(to, towards)
    }
    return from === to
      ? { range }
      : { changes: { from, to }, range: EditorSelection.cursor(from) }
  })
  if (changes.changes.empty) return false
  view.dispatch(
    view.state.update(changes, {
      scrollIntoView: true,
      annotations: Transaction.userEvent.of('delete'),
    })
  )
  return true
}

// Delete till start of current line, or if already at start of line, delete till end of the previous line
export const deleteToLineStart: Command = (view) =>
  deleteBy(view, (pos) => {
    const lineStart = view.visualLineAt(pos).from
    if (pos > lineStart) return lineStart
    return Math.max(0, view.visualLineAt(pos - 1).to)
  })
