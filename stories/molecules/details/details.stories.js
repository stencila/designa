export default {
  title: 'Molecules/Details'
}

export const details = () => {
  const component = document.createElement('stencila-details')
  component.innerHTML = `<p slot="summary">This is a custom Details component.</p>
    <p>This is an extra paragraph that is hidden by default.</p>
    `
  return component
}
