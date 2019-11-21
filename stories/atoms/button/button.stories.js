import { storiesOf } from '@storybook/html'
import readme from '../../../packages/components/src/components/button/readme.md'

storiesOf('Atoms/Button/Primary', module)
  .addParameters({
    readme: {
      sidebar: readme
    }
  })
  .add('with text', () => `<button>Hello World</button>`)
  .add('with emoji', () => `<button>😀 😎 👍 💯</button>`)
  .add('small', () => `<button data-size="small">A small step</button>`)
  .add(
    'Extra Small',
    () => `<button data-size="xsmall">A very small step</button>`
  )
  .add('Web Component', () => `<stencila-button>Hello World!</stencila-button>`)
  .add(
    'Web Component - With an icon',
    () => `<stencila-button>
        <img src="https://via.placeholder.com/24" slot="icon" />
        Hello World!
      </stencila-button>`
  )
  .add(
    'Web Component - With a Feather icon',
    () => `<stencila-button icon="command">
        Hello World!
      </stencila-button>`
  )
  .add(
    'Web Component - Link',
    () => `<stencila-button icon="command" href="#">
        Hello World!
      </stencila-button>`
  )
