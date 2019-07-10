import { storiesOf } from '@storybook/html'
import { collection } from './verticalNav.fixture.js'

storiesOf('Molecules/Vertical Navigation', module)
  .add('with passed object', () => {
    const el = document.createElement('stencila-vertical-nav')
    el.collection = collection
    return el
  })
  .add(
    'Reading from HTML head',
    () =>
      `
      <html>
  <head>
    <script type="application/ld+json">
      ${JSON.stringify(collection)}
    </script>
  </head>
  <body>
    <stencila-vertical-nav></stencila-vertical-nav>
  </body>
</html>
  `
  )
