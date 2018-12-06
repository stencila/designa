import { storiesOf } from '@storybook/html'
import { withNotes } from '@storybook/addon-notes'

storiesOf('Welcome', module)
  .addDecorator(withNotes)

  .add('Intro', () => "Welcome to the Stencila style guide. Please click on the 'Notes' tab below, for more info.", {
    notes: {markdown: `
# About

Hello!. This is the Stencila style guide in Storybook.

# Usage

Use the menu on the left to select different UI components.
Use this \`Notes\` tab to see notes on each component.
Use the \`Story\` table to get HTML code snippets with the classes used to generate each example.
`}
  })
