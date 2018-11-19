import { storiesOf } from '@storybook/html'
import { withNotes } from '@storybook/addon-notes'

storiesOf('Atoms/Button', module)
  .addDecorator(withNotes)

  .add('Simple', () => `
    <button class="button">Click me</button>
  `)

  .add('Primary', () => `
    <button class="button is-primary">OK</button>
  `)

  .add('Call-to-action', () => `
    <a class="button call-to-action is-primary is-rounded" href="#">
      Call to action
    </a>
  `, {
    notes: `A call to action button is a regular button, with additional classes of: <code>.button.call-to-action.is-primary.is-rounded</code>`
  })

  .add('Call-to-action Large', () => `
    <a class="button call-to-action is-primary is-rounded" href="#">
      Large call to action
    </a>
  `, {
    notes: `A call to action button with additional classes of <code>is-large</code>`
  })

  .add('Danger', () => `
    <button class="button is-danger">Delete</button>
  `)
