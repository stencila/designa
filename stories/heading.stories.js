import { storiesOf } from '@storybook/html'

storiesOf('Layout', module)
  .add('Heading', () => `
    <div class="container">
        <h1 class="is-size-1 has-text-weight-bold">Heading</h1>

        <p>A heading is an introduction to a section. It contains an optional small text, h1-h6 tag &amp; an optional horizonal rule.</p>

        <section class="storybook-section">
            <h2 class="has-text-weight-bold storybook-section__header">Heading</h2>
            <header class="heading">
              <span class="small">What is Stencila?</span>
              <h1 class="title">An open source office suite for reproducible research.</h1>
            </header>
        </section>
    </div>
  `)
