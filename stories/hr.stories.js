import { storiesOf } from '@storybook/html'
import { withNotes } from '@storybook/addon-notes'

storiesOf('Atoms', module)
  .addDecorator(withNotes)

  .add('hr small', () => `
<hr class="is-small">
  `, {
    notes: {markdown: `
## Usage
A horizontal rule can be marked as \`is-small\` & will display a small horizontal rule.

## Options
A small horizontal rule can use any of the brand or Bulma colours via:

\`has-background-{colour-name}\`

where \`{colour-name}\` is the appropriate colour.

## Variables

The hr small uses the following variables:

| Variable name            || Default value     |
|:-------------------------||------------------:|
| \`$hr-small-width\`      ||  \`60\`           |
| \`$hr-small-height\`     ||  \`3px\`          |
| \`$hr-small-default-bg\` ||  \`$toxic-green\` |
`}
  })
