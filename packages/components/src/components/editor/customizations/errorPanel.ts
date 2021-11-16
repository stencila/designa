import { Panel, showPanel } from '@codemirror/panel'
import { Extension, StateEffect } from '@codemirror/state'
import { CodeError } from '@stencila/schema'

export const updateErrors = StateEffect.define<NodeListOf<ChildNode>>()

const renderErrors = (errors: (CodeError | string)[] = []) =>
  errors
    .map((error) => {
      if (typeof error === 'string') {
        return `<stencila-code-error kind="warning">${error}</stencila-code-error>`
      }

      return `<stencila-code-error kind=${
        error.errorType ?? 'info'
      } has-stacktrace="${(error.stackTrace !== undefined).toString()}">${
        error.errorMessage
      }<pre slot="stacktrace">${
        error.stackTrace ?? ''
      }</pre></stencila-code-error>`
    })
    .join('\n')

const errorPanel = (): Panel => {
  const dom = document.createElement('div')
  dom.innerHTML = renderErrors()

  return {
    dom,
    update(update) {
      for (const transaction of update.transactions) {
        for (const effect of transaction.effects) {
          if (effect.is(updateErrors)) {
            while (dom.firstChild) {
              dom.removeChild(dom.firstChild)
            }

            effect.value.forEach((newError) => {
              dom.appendChild(newError)
            })
          }
        }
      }
    },
  }
}

export const codeErrors = (): Extension => showPanel.of(errorPanel)
