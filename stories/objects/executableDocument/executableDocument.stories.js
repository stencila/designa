import { select } from '@storybook/addon-knobs'
import { html } from 'lit-html'

export default {
  title: 'Objects/ExecutableDocument',
  excludeStories: ['props'],
}

export const props = (overrides = {}) => ({
  color: select(
    'color',
    [
      'primary',
      'success',
      'warn',
      'danger',
      'neutral',
      'stock',
      'key',
      'brand',
    ],
    overrides.color || 'primary'
  ),
  position: select(
    'position',
    ['static', 'fixed'],
    overrides.position || 'static'
  ),
})

export const articleControls = () => {
  return html`
    <div>
      <stencila-executable-document-toolbar>
      </stencila-executable-document-toolbar>
    </div>
  `
}

export const articleControlsActive = () => {
  return html`
    <article>
      <stencila-executable-document-toolbar>
      </stencila-executable-document-toolbar>

      <p>
        This is a paragraph with a code expresssion inside it
        <stencila-code-expression
          data-collapsed="false"
          itemtype="stencila:CodeChunk"
          ><code slot="text">x * y</code
          ><output slot="output">42</output></stencila-code-expression
        >
        followed by some more text and another
        <stencila-code-expression
          itemtype="stencila:CodeChunk"
        >
          <code slot="text"
            >x * y - 128 * (212 - 2) x * y - 128 * (212 - 2) asd fas fhalsd
            faslhdf asdf asdljf ajsdhf jash l x * y - 128 * (212 - 2) asd fas
            fhalsd faslhdf asdf asdljf ajsdhf jash l x * y - 128 * (212 - 2) asd
            fas fhalsd faslhdf asdf asdljf ajsdhf jash l</code
          >
          <output slot="output"
            >Reaaaaalllyyyyyyyy loooongggggggggggggggggggg output</output
          > </stencila-code-expression
        >.
      </p>
      <stencila-code-chunk is-code-visible="true" itemtype="stencila:CodeChunk">
        <pre slot="text" itemprop="code"><code>print(second)</code></pre>

        <figure slot="outputs">
          <pre><output>10</output></pre>

          <img
            alt="This is a sample output image"
            src="https://via.placeholder.com/350x500"
          />

          <pre><output>10</output></pre>

          <pre><output>20</output></pre>

          <pre><output>30</output></pre>
        </figure>
      </stencila-code-chunk>

      <p>
        This is a paragraph with a code expresssion inside it
        <stencila-code-expression
          data-collapsed="false"
          itemtype="stencila:CodeChunk"
          ><code slot="text">x * y</code
          ><output slot="output">42</output></stencila-code-expression
        >
        followed by some more text and another
        <stencila-code-expression
          data-collapsed="false"
          itemtype="stencila:CodeChunk"
        >
          <code slot="text"
            >x * y - 128 * (212 - 2) x * y - 128 * (212 - 2) asd fas fhalsd
            faslhdf asdf asdljf ajsdhf jash l x * y - 128 * (212 - 2) asd fas
            fhalsd faslhdf asdf asdljf ajsdhf jash l x * y - 128 * (212 - 2) asd
            fas fhalsd faslhdf asdf asdljf ajsdhf jash l</code
          >
          <output slot="output"
            >Reaaaaalllyyyyyyyy loooongggggggggggggggggggg output</output
          > </stencila-code-expression
        >.
      </p>
      <stencila-code-chunk data-collapsed="false" itemtype="stencila:CodeChunk">
        <pre slot="text" itemprop="code"><code>print(second)</code></pre>

        <figure slot="outputs">
          <pre><output>10</output></pre>

          <img
            alt="This is a sample output image"
            src="https://via.placeholder.com/350x500"
          />

          <pre><output>10</output></pre>

          <pre><output>20</output></pre>

          <pre><output>30</output></pre>
        </figure>
      </stencila-code-chunk>
    </article>
  `
}
