import { storiesOf } from '@storybook/html'

storiesOf('Atoms/Button', module)
  .add('Simple', () => `
    <button class="button">Click me</button>
  `)
  .add('Primary', () => `
    <button class="button is-primary">OK</button>
  `)
  .add('Danger', () => `
    <button class="button is-danger">Delete</button>
  `,)
