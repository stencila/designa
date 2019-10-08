import { storiesOf } from '@storybook/html'

storiesOf('Molecules/CodeChunk', module)
  .add(
    'Single CodeChunk',
    () => `<div>
    <stencila-code-chunk
      data-collapsed="false"
      itemtype="stencila:CodeChunk"
    >
      <pre slot="text"><code>print(a)</code></pre>
      <figure slot="outputs">
        <pre><output>10</output></pre>
      </figure>
    </stencila-code-chunk>
  `
  )
  .add(
    'Multiple CodeChunks',
    () => `<div>
    <stencila-code-chunk
      data-collapsed="false"
      itemtype="stencila:CodeChunk"
    >
      <pre slot="text"><code>print(a)</code></pre>
      <figure slot="outputs">
        <pre><output>10</output></pre>
      </figure>
    </stencila-code-chunk>

    <p>
      First and foremost, the Jupyter Notebook is an interactive environment for
      writing and running code. The notebook is capable of running code in a wide
      range of languages. However, each notebook is associated with a single
      kernel. This notebook is associated with the IPython kernel, therefore runs
      Python code.
    </p>

    <stencila-code-chunk
      data-collapsed="false"
      itemtype="stencila:CodeChunk"
    >
      <pre slot="text" itemprop="code"><code>print(second)</code></pre>

      <figure slot="outputs">
        <img alt="This is a sample output image" src="https://via.placeholder.com/350x500" />
      </figure>
    </stencila-code-chunk>
  </div>
  `
  )
  .add(
    'CodeChunk with multiple Outputs',
    () => `<div>
    <stencila-code-chunk
      data-collapsed="false"
      itemtype="stencila:CodeChunk"
    >
      <pre slot="text" itemprop="code"><code>print(second)</code></pre>

      <figure slot="outputs">
        <pre><output>10</output></pre>

        <img alt="This is a sample output image" src="https://via.placeholder.com/350x500" />

        <pre><output>10</output></pre>

        <pre><output>20</output></pre>

        <pre><output>30</output></pre>
      </figure>
    </stencila-code-chunk>
  </div>
  `
  )
  .add(
    'CodeChunk with no outputs',
    () => `<div>
    <stencila-code-chunk
      itemtype="stencila:CodeChunk"
    >
      <pre slot="text" itemprop="code"><code>print(second)</code></pre>

      <figure slot="outputs">
      </figure>
    </stencila-code-chunk>
  </div>
  `
  )
  .add(
    'CodeChunk with no output slot',
    () => `<div>
    <stencila-code-chunk
      itemtype="stencila:CodeChunk"
    >
      <pre slot="text" itemprop="code"><code>print(second)</code></pre>
    </stencila-code-chunk>
  </div>
  `
  )
  .add(
    'CodeChunk and a CodeExpression',
    () => `<div>
    <p>
      This is a paragraph with a code expresssion inside it
      <stencila-code-expression
        data-collapsed="false"
        itemtype="stencila:CodeChunk"
      ><code slot="text">x * y</code><output slot="output">42</output></stencila-code-expression> followed by some more text and
      another <stencila-code-expression
        data-collapsed="false"
        itemtype="stencila:CodeChunk"
      >
        <code slot="text">x * y - 128 * (212 - 2)</code>
        <output slot="output">Reaaaaalllyyyyyyyy loooongggggggggggggggggggg output</output>
      </stencila-code-expression>.
    </p>
    <stencila-code-chunk
      data-collapsed="false"
      itemtype="stencila:CodeChunk"
    >
      <pre slot="text" itemprop="code"><code>print(second)</code></pre>

      <figure slot="outputs">
        <pre><output>10</output></pre>

        <img alt="This is a sample output image" src="https://via.placeholder.com/350x500" />

        <pre><output>10</output></pre>

        <pre><output>20</output></pre>

        <pre><output>30</output></pre>
      </figure>
    </stencila-code-chunk>
  </div>
  `
  )
