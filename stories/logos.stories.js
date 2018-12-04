import { storiesOf } from '@storybook/html'
import { withNotes } from '@storybook/addon-notes'

storiesOf('Atoms', module)
  .addDecorator(withNotes)

  .add("Logos", () => `
<div class="container">
    <div class="columns logos">
        <div class="column is-flex align-centre has-text-left">
            <a href="https://codeforscience.org">
                <img src="//placehold.it/300x200">
            </a>
        </div>
        <div class="column is-flex align-centre has-text-centered">
            <a href="http://coko.foundation">
                <img src="//placehold.it/300x200">
            </a>
        </div>
        <div class="column is-flex align-centre has-text-right">
            <a href="https://datproject.org">
                <img src="//placehold.it/300x200">
            </a>
        </div>
    </div>
    <div class="columns logos">
        <div class="column is-flex align-centre has-text-left">
            <a href="https://codeforscience.org">
                <img src="//placehold.it/300x200">
            </a>
        </div>
        <div class="column is-flex align-centre has-text-centered">
            <a href="http://coko.foundation">
                <img src="//placehold.it/300x200">
            </a>
        </div>
        <div class="column is-flex align-centre has-text-right">
            <a href="https://datproject.org">
                <img src="//placehold.it/300x200">
            </a>
        </div>
    </div>
</div>
  `, {
    notes: {markdown: `
## Usage
Used to display a series of logos in a grid. If creating multiple rows, \
each \`columns\` element should have a \`logos\` class.

## Options
--

## Variables

The logos uses the following variables:

| Variable name           || Default value     |
|:------------------------||------------------:|
| \`$logos-margin-top\`   || \`40\`            |
| \`$logo-img-max-width\` || \`260\`           |

`}
  })
