import readme from '../../../packages/components/src/components/error/readme.md'

export default {
  title: 'Objects/Error'
}

export const warning = () => {
  const component = document.createElement('stencila-code-error')
  component.kind = 'warning'
  component.innerHTML = `We’re sorry, something has gone wrong...
    <pre slot="stacktrace">
<code>Some stack trace goes here...</code>
    </pre>
    `
  return component
}

warning.story = {
  parameters: {
    readme: {
      sidebar: readme
    }
  }
}

export const error = () => {
  const component = document.createElement('stencila-code-error')
  component.kind = 'error'
  component.innerHTML = `We’re sorry, something has gone wrong...
    <pre slot="stacktrace">
<code>Some stack trace goes here...</code>
    </pre>
    `
  return component
}

error.story = {
  parameters: {
    readme: {
      sidebar: readme
    }
  }
}
