import { storiesOf } from '@storybook/html'

storiesOf('Atoms/Paragraph', module).add(
  'default',
  () => `<p>To control the font family of an element at a specific
  breakpoint, add a {screen}: prefix to any existing font family utility
  class. For example, use md:font-serif to apply the font-serif utility at
  only medium screen sizes and above.
  </p>
  <p>
  For more information about Tailwind's responsive design features, check out
  the Responsive Design documentation.</p>`
)
