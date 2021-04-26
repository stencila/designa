import { html } from 'lit-html'

export default {
  title: 'Objects/ExecutableDocument',
  component: 'stencila-executable-document-toolbar',
  argTypes: {
    position: {
      defaultValue: 'fixed',
      control: {
        type: 'select',
        options: ['fixed', 'static'],
      },
    },
  },
}

export const articleControls = ({ position }) => {
  return html`
    <div>
      <stencila-executable-document-toolbar .position=${position}>
      </stencila-executable-document-toolbar>
    </div>
  `
}

export const articleControlsActive = ({ position, sourceUrl }) => {
  return html`
    <article>
      <stencila-executable-document-toolbar
        .position=${position}
        .sourceUrl=${sourceUrl}
      >
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
        <stencila-code-expression itemtype="stencila:CodeChunk">
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
            src="https://place-hold.it/350x500"
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
            src="https://place-hold.it/350x500"
          />

          <pre><output>10</output></pre>

          <pre><output>20</output></pre>

          <pre><output>30</output></pre>
        </figure>
      </stencila-code-chunk>
    </article>
  `
}
