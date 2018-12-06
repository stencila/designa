import { storiesOf } from '@storybook/html'
import { withNotes } from '@storybook/addon-notes'

storiesOf('Atoms', module)
  .addDecorator(withNotes)

  .add('Video', () => `
<div class="container">
  <div class="video">
      <iframe width="560" height="315" src="https://www.youtube.com/embed/EzrR96PDnO8?rel=0&amp;wmode=transparent" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen=""></iframe>
  </div>
</div>
  `, {
    notes: {markdown: `
## Usage
A wrapper to add a shadow to a video element

## Options
--

## Variables
--
`}
  })
