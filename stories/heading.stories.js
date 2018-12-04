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
A heading is an introduction to a section & is wrapped in a \`header\` element.

A heading contains:

+ An optional \`small\` span
+ A \`title\` tag (any of h1-h6) & an optional horizontal rule.

## Options
Each small & title element can have a colour from Bulma's \`has-text-{colour-name}\`.
However, we only recommend the following combinations:

+ small text black, title black
+ small text primary, title primary
+ small text black, title pimary
  `}})
  .add('Heading with line', () => `
<header class="heading">
    <span class="small">What is Stencila?</span>
    <h1 class="title has-line is-1 has-text-primary">An open source office suite \
    for reproducible research.</h1>
</header>
  `, {
    notes: { markdown: `
## Usage
A heading can have an optional horizonal line displayed under the heading tag.

This is achieved by adding \`has-line\` to the title element.
Furthermore, the colour of the line can be any of the bulma / brand colours.

You can apply this by adding a class combo like so:

\`has-line has-line--{colour-name}\`

where \`{colour-name}\` is a brand or Bulma colour.
  `}})
