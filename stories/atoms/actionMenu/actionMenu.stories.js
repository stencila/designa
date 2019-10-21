export default {
  title: 'Atoms/Action Menu'
}

const buttons = ['Action 1', 'Action 2', 'Action 3'].map(label => {
  const button = document.createElement('stencila-button')
  button.isSecondary = true
  button.icon = 'command'
  button.size = 'xsmall'
  button.innerText = label
  return button
})

export const actionMenu = () => {
  const component = document.createElement('stencila-action-menu')
  component.expandable = true
  buttons.map(button => component.appendChild(button))
  return component
}
