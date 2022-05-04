import { Panel, showPanel } from '@codemirror/view'
import { Extension, StateEffect } from '@codemirror/state'

export const updateErrors = StateEffect.define<{
  slotRef: HTMLElement | undefined
}>()

/**
 * Custom CodeMirror panel for rendering errors.
 * It expects a pointer to a the HTML element wrapping the `errors` slot.
 * If it is present, it relocates the node to become part of the CodeMirror UI.
 * This way any logic for adding/removing individual nodes, as well as maintaining their
 * state is delegated to StencilJS.
 */
const errorPanel = (): Panel => {
  const dom = document.createElement('div')
  let slotAdded = false

  const relocateSlot = (slotEl?: HTMLElement): void => {
    if (slotEl) {
      dom.appendChild(slotEl)
      slotAdded = true
    }
  }

  return {
    dom,
    update(update) {
      for (const transaction of update.transactions) {
        for (const effect of transaction.effects) {
          if (effect.is(updateErrors)) {
            if (!slotAdded && effect.value.slotRef) {
              relocateSlot(effect.value.slotRef)
            }
          }
        }
      }
    },
  }
}

export const codeErrors = (): Extension => showPanel.of(errorPanel)
