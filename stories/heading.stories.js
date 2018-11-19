import { storiesOf } from '@storybook/html'
import { withNotes } from '@storybook/addon-notes'

storiesOf('Layout', module)
  .addDecorator(withNotes)

  .add('Heading', () => `
<div class="heading">
  <span class="small">What is Stencila?</span>
  <h1 class="title">An open source office suite for reproducible research.</h1>
</div>
  `, {
    notes: { markdown: `
## Usage
A heading is an introduction to a section. 

## Options
It contains an optional small text, h1-h6 tag & an optional horizonal rule.
  `}})
