import { html } from 'lit-html'

export default {
  title: 'Molecules/Code Chunk',
  component: 'stencila-code-chunk'
}

const delay = cb => {
  return new Promise(res => {
    window.setTimeout(() => {
      res(cb())
    }, 1500)
  })
}

const executeHandler = t =>
  delay(() => console.log(t) || { outputs: [t, t, t] })

export const withExecuteHandler = () => html`
  <stencila-code-chunk .executeHandler=${executeHandler}>
    <pre slot="text">print(a)</pre>
    <figure slot="outputs">
      <pre><output>10</output></pre>
    </figure>
  </stencila-code-chunk>
`

export const singleCodeChunk = () => html`
  <div>
    <stencila-code-chunk data-collapsed="false" itemtype="stencila:CodeChunk">
      <pre slot="text"><code>print(a)</code></pre>
      <figure slot="outputs">
        <pre><output>10</output></pre>
      </figure>
    </stencila-code-chunk>
  </div>
`
export const multipleCodeChunks = () => html`
  <div>
    <stencila-code-chunk data-collapsed="false" itemtype="stencila:CodeChunk">
      <pre slot="text"><code>print(a)</code></pre>
      <figure slot="outputs">
        <pre><output>10</output></pre>
      </figure>
    </stencila-code-chunk>

    <p>
      First and foremost, the Jupyter Notebook is an interactive environment for
      writing and running code. The notebook is capable of running code in a
      wide range of languages. However, each notebook is associated with a
      single kernel. This notebook is associated with the IPython kernel,
      therefore runs Python code.
    </p>

    <stencila-code-chunk data-collapsed="false" itemtype="stencila:CodeChunk">
      <pre slot="text" itemprop="code"><code>print(second)</code></pre>

      <figure slot="outputs">
        <img
          alt="This is a sample output image"
          src="https://via.placeholder.com/350x500"
        />
      </figure>
    </stencila-code-chunk>
  </div>
`

export const withMultipleOutputs = () => html`
  <div>
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
  </div>
`
export const withNoOutputContent = () => html`
  <div>
    <stencila-code-chunk itemtype="stencila:CodeChunk">
      <pre slot="text" itemprop="code"><code>print(second)</code></pre>

      <figure slot="outputs"></figure>
    </stencila-code-chunk>
  </div>
`

export const withNoOutputSlot = () => html`
  <div>
    <stencila-code-chunk itemtype="stencila:CodeChunk">
      <pre slot="text" itemprop="code"><code>print(second)</code></pre>
    </stencila-code-chunk>
  </div>
`

export const alongsideACodeExpression = () => html`
  <div>
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
        <code slot="text">x * y - 128 * (212 - 2)</code>
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
  </div>
`

export const withASingleImageOutput = () => html`
  <stencila-code-chunk data-programmingLanguage="python">
    <pre slot="text"><code>import numpy as np
import matplotlib.pyplot as plt

N = 50
N = min(N, 1000) # Prevent generation of too many numbers :)
x = np.random.rand(N)
y = np.random.rand(N)
colors = np.random.rand(N)
area = np.pi * (15 * np.random.rand(N))**2  # 0 to 15 point radii

plt.scatter(x, y, s=area, c=colors, alpha=0.5)</code></pre>
    <figure slot="outputs">
      <img src="https://via.placeholder.com/350x500" itemprop="image" />
    </figure>
  </stencila-code-chunk>
`
