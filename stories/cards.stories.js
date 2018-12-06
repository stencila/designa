import { storiesOf } from '@storybook/html'
import { withNotes } from '@storybook/addon-notes'

storiesOf('Component', module)
  .addDecorator(withNotes)

  .add('Card Group', () => `
<div class="container">
    <div class="card-grid-container">
        <div class="columns">
            <div class="column">
                <div class="card card--grid">
                    <div class="card-image">
                        <figure class="image">
                            <img width="300" src="https://placehold.it/300x200" alt="Placeholder image">
                        </figure>
                    </div>
                    <div class="card-content content">
                        <p class="title is-4">A word processor designed for research content</p>
                        <p>Create interactive, fully reproducible documents using a familiar visual authoring interface. Use code cells to produce figures based on data - no more copying and pasting static images and tables! Cite figures and
                            references, without having to worry about citation formatting.</p>
                        <hr class="is-small">
                    </div>
                </div>
            </div>
            <div class="column">
                <div class="card card--grid">
                    <div class="card-image">
                        <figure class="image">
                            <img width="300" src="https://placehold.it/300x200" alt="Placeholder image">
                        </figure>
                    </div>
                    <div class="card-content content">
                        <p class="title is-4">Spreadsheets leveraging the power of open source languages</p>
                        <p>Leverage the power of data manipulation using languages like R, Python, and SQL from within Stencila Sheets. Use formulas to do calculations, create figures next to the data and reference them in the manuscript. In an
                            article you can reference data from a spreadsheet and vice versa. If you update the data in one place, all affected documents will update as well.</p>
                        <hr class="is-small">
                    </div>
                </div>
            </div>
            <div class="column">
                <div class="card card--grid">
                    <div class="card-image">
                        <figure class="image">
                            <img width="300" src="https://placehold.it/300x200" alt="Placeholder image">
                        </figure>
                    </div>
                    <div class="card-content content">
                        <p class="title is-4">Reactive code evaluation in different languages</p>
                        <p>In Stencila code evaluates live as you type. Because the execution engine analyses the dependencies between cells, it can perform a minimal update, making computation fast and responsive. This mechanism works with all
                            available languages (e.g. R, Python, Javascript, SQL). You can even mix languages within a document.</p>
                        <hr class="is-small">
                    </div>
                </div>
            </div>
        </div>
        <div class="columns">
            <div class="column">
                <div class="card card--grid">
                    <div class="card-image">
                        <figure class="image">
                            <img width="300" src="https://placehold.it/300x200" alt="Placeholder image">
                        </figure>
                    </div>
                    <div class="card-content content">
                        <p class="title is-4">Interoperability with existing tools and workflows</p>
                        <p>Stencila is developed not to replace existing tools, but to complement them. We are working with the communities of existing open source tools to improve interoperability. Stencila also aims to support file formats
                            commonly used by researchers for reproducibility such as Jupyter Notebooks, RMarkdown and more.</p>
                        <hr class="is-small">
                    </div>
                </div>
            </div>
            <div class="column">
                <div class="card card--grid">
                    <div class="card-image">
                        <figure class="image">
                            <img width="300" src="https://placehold.it/300x200" alt="Placeholder image">
                        </figure>
                    </div>
                    <div class="card-content content">
                        <p class="title is-4">Reproducibility from authoring through to publishing</p>
                        <p>Stencila projects are self-contained archives of documents and assets. We are working with authors and publishers on formats which extend existing publishing standards - allowing your publications to embed code and
                            making the publication process faster.</p>
                        <hr class="is-small">
                    </div>
                </div>
            </div>
            <div class="column">
                <div class="card card--grid">
                    <div class="card-image">
                        <figure class="image">
                            <img width="300" src="https://placehold.it/300x200" alt="Placeholder image">
                        </figure>
                    </div>
                    <div class="card-content content">
                        <p class="title is-4">Community-driven development</p>
                        <p>Stencila development is driven by its users. We consider every user as an integral part of the project. Using their experience and knowledge we can build a truly open set of tools meeting the needs of researchers.</p>
                        <hr class="is-small">
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
  `, {
    notes: { markdown: `
## Usage
We use the \`\card-group\` to create a grouped grid of cards.
  `}})
