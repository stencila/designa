import { SelectionRange } from '@codemirror/next/state'
import { EditorView } from '@codemirror/next/view/src'

// Collection of CodeMirror Commands
// @see https://codemirror.net/6/docs/ref/#commands

enum BOUNDARY {
  CHARACTER = 'character',
  WORD = 'word',
  LINE = 'line',
  LINE_BOUNDARY = 'lineboundary',
}

/** CodeMirror command to delete content until a given boundary */
export const deleteTill = (granularity: BOUNDARY) => (view: EditorView) => {
  const changes = view.state.changeByRange((range) => {
    let { from, to } = range
    if (from === to) {
      const target = view.movePos(range.head, 'backward', granularity, 'move')
      from = Math.min(from, target)
      to = Math.max(to, target)
    }
    if (from === to) return { range }
    return { changes: { from, to }, range: new SelectionRange(from) }
  })

  if (changes.changes.empty) return false

  view.dispatch(view.state.update(changes, { scrollIntoView: true }))
  return true
}

export const deleteWord = deleteTill(BOUNDARY.WORD)

export const deleteLine = deleteTill(BOUNDARY.LINE_BOUNDARY)
