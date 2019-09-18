import { storiesOf } from '@storybook/html'

storiesOf('Atoms/Button/Primary', module)
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
    () => `<stencila-button icon-name="circle">
        Hello World!
      </stencila-button>`
  )
