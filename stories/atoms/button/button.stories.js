import { storiesOf } from '@storybook/html'

storiesOf('Atoms/Button/Primary', module)
  .add('with text', () => `<button>Hello World</button>`)
  .add('with emoji', () => `<button>😀 😎 👍 💯</button>`)
  .add('Web Component', () => `<stencila-button>Hello World!</stencila-button>`)
  .add(
    'Web Component - With an icon',
    () => `<stencila-button>
        <img src="https://via.placeholder.com/24" slot="icon" />
        Hello World!
      </stencila-button>`
  )
