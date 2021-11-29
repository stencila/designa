import { html } from 'lit-html'

export default {
  title: 'Schema Nodes/Code Chunk',
  component: 'stencila-code-chunk',
  argTypes: {
    executableLanguages: {
      defaultValue: {
        JavaScript: {
          name: 'JavaScript',
          ext: 'js',
          aliases: ['javascript', 'js'],
        },
      },
    },
  },
}

const delay = (cb) => {
  return new Promise((res) => {
    window.setTimeout(() => {
      res(cb())
    }, 1500)
  })
}

const generateErrors = () => {
  const count = Math.round(Math.random() * 10)
  const errs = []

  for (let i = 0; i <= count; i++) {
    errs.push({
      type: 'CodeError',
      errorMessage: `Something went wrong (${i})`,
      errorType: i % 2 === 0 ? 'warning' : 'error',
      stackTrace: 'Some stack trace',
    })
  }

  return errs
}

const executeHandler = (t) =>
  delay(
    () =>
      console.log(t) || {
        outputs: [t, t, t],
        errors: generateErrors(),
      }
  )

export const withExecuteHandler = ({
  programmingLanguage,
  executableLanguages,
}) => html`
  <div style="max-width: 900px">
    <stencila-code-chunk
      .executeHandler=${executeHandler}
      .isCodeVisible=${true}
      .programmingLanguage=${programmingLanguage}
      .executableLanguages=${executableLanguages}
    >
      <pre slot="text">print(a)</pre>
      <figure slot="outputs">
        <pre><output>10</output></pre>
      </figure>
    </stencila-code-chunk>
  </div>
`

export const singleCodeChunk = ({
  programmingLanguage,
  executableLanguages,
}) => html`
  <div>
    <stencila-code-chunk
      data-collapsed="false"
      .programmingLanguage=${programmingLanguage}
      .executableLanguages=${executableLanguages}
    >
      <pre slot="text"><code>print(a)</code></pre>
      <figure slot="outputs">
        <pre><output>10</output></pre>
      </figure>
    </stencila-code-chunk>
  </div>
`

export const multipleCodeChunks = ({
  executableLanguages,
  programmingLanguage,
}) => html`
  <div>
    <stencila-code-chunk
      data-collapsed="false"
      .executeHandler=${executeHandler}
      .programmingLanguage=${programmingLanguage}
      .executableLanguages=${executableLanguages}
    >
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

    <stencila-code-chunk
      data-collapsed="false"
      .executeHandler=${executeHandler}
      .programmingLanguage=${programmingLanguage}
      .executableLanguages=${executableLanguages}
    >
      <pre slot="text"><code>print(second)</code></pre>

      <figure slot="outputs">
        <img
          alt="This is a sample output image"
          src="https://place-hold.it/350x500"
        />
      </figure>
    </stencila-code-chunk>
  </div>
`

export const withMultipleOutputs = () => html`
  <div>
    <stencila-code-chunk data-collapsed="false">
      <pre slot="text"><code>print(second)</code></pre>

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
  </div>
`
export const withNoOutputContent = () => html`
  <div>
    <stencila-code-chunk>
      <pre slot="text"><code>print(second)</code></pre>

      <figure slot="outputs"></figure>
    </stencila-code-chunk>
  </div>
`

export const withNoOutputSlot = () => html`
  <div>
    <stencila-code-chunk>
      <pre slot="text"><code>print(second)</code></pre>
    </stencila-code-chunk>
  </div>
`

export const alongsideACodeExpression = () => html`
  <div>
    <p>
      This is a paragraph with a code expression inside it
      <stencila-code-expression
        ><code slot="text">x * y</code
        ><output slot="output">42</output></stencila-code-expression
      >
      followed by some more text and another
      <stencila-code-expression>
        <code slot="text"
          >x * y - 128 * (212 - 2) x * y - 128 * (212 - 2)
          round(length(which((silent_1hr_l1-silent_0hr_l1)>0))/length(silent_0hr_l1)*100)</code
        >
        <output slot="output"
          >Reaaaaalllyyyyyyyy loooongggggggggggggggggggg output</output
        > </stencila-code-expression
      >.
    </p>
    <stencila-code-chunk>
      <pre slot="text"><code>print(second)</code></pre>

      <figure slot="outputs">
        <pre><output>10</output></pre>

        <img
          alt="This is a sample output image"
          src="https://codechplace-hold.it/350x500"
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
      <img src="https://place-hold.it/350x500" itemprop="image" />
    </figure>
  </stencila-code-chunk>
`
