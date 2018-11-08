import { storiesOf } from '@storybook/html'

storiesOf('Config', module)
  .add('Colours', () => `
  <div class="container">
    <h1 class="is-size-1 has-text-weight-bold">Colours</h1>
    <ul class="list-style--disc">
        <li>Standard Bulma Colours</li>
        <li><code>Stencila</code> Brand colours</li>
    </ul>

    <section class="storybook-section">
        <h2 class="has-text-weight-bold storybook-section__header">Brand Colours</h2>
        <div class="columns">
            <div class="colour-swatch column is-flex flex-direction-column align-centre">
                <div class="swatch has-background-blue"></div>
                <span class="tag is-blue">blue</span>
            </div>
            <div class="colour-swatch column is-flex flex-direction-column align-centre">
                <div class="swatch has-background-denim"></div>
                <span class="tag is-denim">denim</span>
            </div>
            <div class="colour-swatch column is-flex flex-direction-column align-centre">
                <div class="swatch has-background-mariner"></div>
                <span class="tag is-mariner">mariner</span>
            </div>
            <div class="colour-swatch column is-flex flex-direction-column align-centre">
                <div class="swatch has-background-green"></div>
                <span class="tag is-green">green</span>
            </div>
            <div class="colour-swatch column is-flex flex-direction-column align-centre">
                <div class="swatch has-background-pink"></div>
                <span class="tag is-pink">pink</span>
            </div>
        </div>
    </section>

    <section class="storybook-section">
        <h2 class="has-text-weight-bold storybook-section__header">Bulma Colours</h2>
        <div class="columns flex-wrap">
            <div class="colour-swatch column is-flex flex-direction-column align-centre">
                <div class="swatch has-background-white"></div>
                <span class="tag is-white">white</span>
            </div>
            <div class="colour-swatch column is-flex flex-direction-column align-centre">
                <div class="swatch has-background-black"></div>
                <span class="tag is-black">black</span>
            </div>
            <div class="colour-swatch column is-flex flex-direction-column align-centre">
                <div class="swatch has-background-light"></div>
                <span class="tag is-light">light</span>
            </div>
            <div class="colour-swatch column is-flex flex-direction-column align-centre">
                <div class="swatch has-background-dark"></div>
                <span class="tag is-dark">dark</span>
            </div>
            <div class="colour-swatch column is-flex flex-direction-column align-centre">
                <div class="swatch has-background-primary"></div>
                <span class="tag is-primary">primary</span>
            </div>
            <div class="colour-swatch column is-flex flex-direction-column align-centre">
                <div class="swatch has-background-info"></div>
                <span class="tag is-info">info</span>
            </div>
            <div class="colour-swatch column is-flex flex-direction-column align-centre">
                <div class="swatch has-background-info"></div>
                <span class="tag is-info">info</span>
            </div>
            <div class="colour-swatch column is-flex flex-direction-column align-centre">
                <div class="swatch has-background-link"></div>
                <span class="tag is-link">link</span>
            </div>
            <div class="colour-swatch column is-flex flex-direction-column align-centre">
                <div class="swatch has-background-success"></div>
                <span class="tag is-success">success</span>
            </div>
            <div class="colour-swatch column is-flex flex-direction-column align-centre">
                <div class="swatch has-background-warning"></div>
                <span class="tag is-warning">warning</span>
            </div>



            <div class="colour-swatch column is-flex flex-direction-column align-centre">
                <div class="swatch has-background-danger"></div>
                <span class="tag is-danger">danger</span>
            </div>
            <div class="colour-swatch column is-flex flex-direction-column align-centre">
                <div class="swatch has-background-black-bis"></div>
                <span class="tag is-black-bis">black-bis</span>
            </div>
            <div class="colour-swatch column is-flex flex-direction-column align-centre">
                <div class="swatch has-background-black-ter"></div>
                <span class="tag is-black-ter">black-ter</span>
            </div>
            <div class="colour-swatch column is-flex flex-direction-column align-centre">
                <div class="swatch has-background-grey-darker"></div>
                <span class="tag is-grey-darker">grey-darker</span>
            </div>
            <div class="colour-swatch column is-flex flex-direction-column align-centre">
                <div class="swatch has-background-grey-dark"></div>
                <span class="tag is-grey-dark">grey-dark</span>
            </div>
            <div class="colour-swatch column is-flex flex-direction-column align-centre">
                <div class="swatch has-background-grey"></div>
                <span class="tag is-grey">grey</span>
            </div>
            <div class="colour-swatch column is-flex flex-direction-column align-centre">
                <div class="swatch has-background-grey-light"></div>
                <span class="tag is-grey-light">grey-light</span>
            </div>
            <div class="colour-swatch column is-flex flex-direction-column align-centre">
                <div class="swatch has-background-grey-lighter"></div>
                <span class="tag is-grey-lighter">grey-lighter</span>
            </div>
            <div class="colour-swatch column is-flex flex-direction-column align-centre">
                <div class="swatch has-background-white-ter"></div>
                <span class="tag is-white-ter">white-ter</span>
            </div>
            <div class="colour-swatch column is-flex flex-direction-column align-centre">
                <div class="swatch has-background-white-bis"></div>
                <span class="tag is-white-bis">white-bis</span>
            </div>
        </div>
    </section>
  </div>
  `)
