import { storiesOf } from '@storybook/html'

storiesOf('Molecules/CodeChunk', module)
  .add(
    'Single CodeChunk',
    () => `<div>
    <stencila-codechunk
      data-collapsed="false"
      data-execution_count="3"
      isSecondary="true"
      itemtype="stencila:CodeChunk"
      class="firsty"
    >
      <pre slot="code"><code>print(a)</code></pre>
      <figure slot="outputs">
        <pre><output>10</output></pre>
      </figure>
    </stencila-codechunk>
  `
  )
  .add(
    'Multiple CodeChunks',
    () => `<div>
    <stencila-codechunk
      data-collapsed="false"
      data-execution_count="3"
      isSecondary="true"
      itemtype="stencila:CodeChunk"
      class="firsty"
    >
      <pre slot="code"><code>print(a)</code></pre>
      <figure slot="outputs">
        <pre><output>10</output></pre>
      </figure>
    </stencila-codechunk>

    <p>
      First and foremost, the Jupyter Notebook is an interactive environment for
      writing and running code. The notebook is capable of running code in a wide
      range of languages. However, each notebook is associated with a single
      kernel. This notebook is associated with the IPython kernel, therefore runs
      Python code.
    </p>

    <stencila-codechunk
      data-collapsed="false"
      data-execution_count="3"
      isSecondary="true"
      itemtype="stencila:CodeChunk"
    >
      <pre slot="code" itemprop="code"><code>print(second)</code></pre>

      <figure slot="outputs">
        <img src="https://via.placeholder.com/350x500" />
      </figure>
    </stencila-codechunk>
  </div>
  `
  )
  .add(
    'CodeChunk with multiple Outputs',
    () => `<div>
    <stencila-codechunk
      data-collapsed="false"
      data-execution_count="3"
      isSecondary="true"
      itemtype="stencila:CodeChunk"
    >
      <pre slot="code" itemprop="code"><code>print(second)</code></pre>

      <figure slot="outputs">
        <pre><output>10</output></pre>

        <img src="https://via.placeholder.com/350x500" />

        <pre><output>10</output></pre>

        <pre><output>20</output></pre>

        <pre><output>30</output></pre>
      </figure>
    </stencila-codechunk>
  </div>
  `
  )
