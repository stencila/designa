import { storiesOf } from '@storybook/html'
import { withNotes } from '@storybook/addon-notes'

storiesOf('Modifiers', module)
  .addDecorator(withNotes)

  .add('Positional', () => ``, {
    notes: {markdown: `
## Usage
A series of positional (largely flex based) modifiers:


| Modifier name                              || Description        |
|:-------------------------------------------||:---------------------|
| \`flex-end\`     ||               Justifies content to the end |
`}
  })
