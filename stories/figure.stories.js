import { storiesOf } from '@storybook/html'
import { withNotes } from '@storybook/addon-notes'

storiesOf('Atoms/Figure', module)
  .addDecorator(withNotes)

  .add('Figure with shadow', () => `
  <div class="content">
    <figure class="figure shadow">
        <img src="https://placehold.it/300x200" alt="Placeholder image">
    </figure>
  </div>
  `, {
  notes: {markdown: `
## Usage
When using a figure, we can add a shadow. Ideally a figure will be wrapped inside a \`content\` container.

## Variables

The figure uses the following variables:

| Variable name                  || Default value                    |
|:-------------------------------||---------------------------------:|
| \`$figure-shadow-background\`  || \`rgba($black, 0.1)\`            |
| \`$figure-shadow-left-offset\` || \`16\`                           |
| \`$figure-shadow-top-offset\`  || \`16\`                           |
| \`$figure-shadow-img-border\`  || \`1px solid rgba($black, 0.05)\` |
| \`$figure-shadow-padded-top\`  || \`60\`                           |

  `}
  })
  .add('Figure with left shadow', () => `
  <div class="content">
    <figure class="figure shadow shadow-left">
        <img src="https://placehold.it/300x200" alt="Placeholder image">
    </figure>
  </div>
  `, {
  notes: {markdown: `
## Usage
When using a figure, we can add a shadow. Ideally a figure will be wrapped inside a \`content\` container.
  `}
  })
  .add('Figure padded', () => `
  <div class="content">
    <figure class="figure padded shadow shadow-left">
        <img src="https://placehold.it/300x200" alt="Placeholder image">
    </figure>
  </div>
  `, {
  notes: {markdown: `
## Usage
A *padded* figure strips the horizontal margin & adds margin to the top of the figure.
  `}
  })
