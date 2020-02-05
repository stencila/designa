import { html } from 'lit-html'
import { collection } from './verticalNav.fixture.js'

export default {
  title: 'Molecules/Vertical Navigation',
  component: 'stencila-vertical-nav'
}

export const withPassedObject = () => html`
  <stencila-vertical-nav .collection=${collection}></stencila-vertical-nav>
`

export const readingFromHTMLHead = () =>
  html`
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
