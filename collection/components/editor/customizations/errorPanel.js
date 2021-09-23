import { showPanel } from '@codemirror/panel';
import { StateEffect } from '@codemirror/state';
export const updateErrors = StateEffect.define();
const renderErrors = (errors = []) => errors
  .map((error) => {
  if (typeof error === 'string') {
    return `<stencila-code-error kind="warning">${error}</stencila-code-error>`;
  }
  return `<stencila-code-error kind=${error.errorType} has-stacktrace="${error.stackTrace !== undefined}">${error.errorMessage}<pre slot="stacktrace">${error.stackTrace}</pre></stencila-code-error>`;
})
  .join('\n');
const errorPanel = () => {
  const dom = document.createElement('div');
  dom.innerHTML = renderErrors();
  return {
    dom,
    update(update) {
      for (let transaction of update.transactions) {
        for (let effect of transaction.effects) {
          if (effect.is(updateErrors)) {
            dom.innerHTML = renderErrors(effect.value);
          }
        }
      }
    },
  };
};
export const codeErrors = () => showPanel.of(errorPanel);
