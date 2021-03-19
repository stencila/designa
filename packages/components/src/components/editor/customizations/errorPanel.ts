import { Panel, showPanel } from '@codemirror/panel'
import { Extension, StateEffect } from '@codemirror/state'
import { CodeError } from '@stencila/schema'

export const updateErrors = StateEffect.define<
  (CodeError | string)[] | undefined
>()

const renderErrors = (errors: (CodeError | string)[] = []) =>
  errors
    .map((error) => {
      if (typeof error === 'string') {
        return `<stencila-code-error kind="warning">${error}</stencila-code-error>`
      }

      return `<stencila-code-error kind=${error.errorType} has-stacktrace="${
        error.stackTrace !== undefined
      }">${error.errorMessage}<pre slot="stacktrace">${
        error.stackTrace
      }</pre></stencila-code-error>`
    })
    .join('\n')

const errorPanel = (): Panel => {
  const dom = document.createElement('div')
  dom.innerHTML = renderErrors()

  return {
    dom,
    update(update) {
      for (let transaction of update.transactions) {
        for (let effect of transaction.effects) {
          if (effect.is(updateErrors)) {
            dom.innerHTML = renderErrors(effect.value)
          }
        }
      }
    },
  }
}

export const codeErrors = (): Extension => showPanel.of(errorPanel)
