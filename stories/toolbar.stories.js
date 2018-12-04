import { storiesOf } from '@storybook/html'
import { withNotes } from '@storybook/addon-notes'

storiesOf('Component/Toolbar', module)
  .addDecorator(withNotes)

  .add('Toolbar', () => `
<div class="container">
  <div class="tool-bar has-box-shadow">
    <div class="buttons">
        <a class="button is-toolbar">
          <span>H<sub>1</sub></span>
        </a>

        <a class="button is-toolbar is-active">
          <span>B</span>
        </a>

        <a class="button is-toolbar">
          <span>H<sub>2</sub></span>
        </a>

        <a class="button is-toolbar">
          <span><em>i</em></span>
        </a>

        <a class="button is-toolbar">
          <span>H<sub>3</sub></span>
        </a>

        <a class="button is-toolbar">
          <span>x<sub>2</sub></span>
        </a>

        <a class="button is-toolbar">
          <span>P</span>
        </a>

        <a class="button is-toolbar">
          <span>x<sup>2</sup></span>
        </a>

        <a class="button last-button is-toolbar">
            <span class="icon lnr lnr-cloud"></span>
        </a>
    </div>
    <hr>

    <div class="drop-downs">
        <a class="drop-down">
            <span>Insert</span>
            <span class="icon lnr lnr-chevron-down"></span>
        </a>
        <hr>
        <a class="drop-down is-active">
            <span>View</span>
            <span class="icon lnr lnr-chevron-down"></span>
        </a>
    </div>
  </div>
</div>
  `, {
    notes: { markdown: `
## Usage
A toolbar for picking tools to use.

## Options
Can be displayed vertically by adding a \`is-vertical\` class.

## Variables
--
  `}})
  .add('Vertical toolbar', () => `
  <div class="container">
    <div class="tool-bar is-vertical has-box-shadow">
      <div class="buttons">
          <a class="button is-toolbar">
            <span>H<sub>1</sub></span>
          </a>

          <a class="button is-toolbar is-active">
            <span>B</span>
          </a>

          <a class="button is-toolbar">
            <span>H<sub>2</sub></span>
          </a>

          <a class="button is-toolbar">
            <span><em>i</em></span>
          </a>

          <a class="button is-toolbar">
            <span>H<sub>3</sub></span>
          </a>

          <a class="button is-toolbar">
            <span>x<sub>2</sub></span>
          </a>

          <a class="button is-toolbar">
            <span>P</span>
          </a>

          <a class="button is-toolbar">
            <span>x<sup>2</sup></span>
          </a>

          <a class="button last-button is-toolbar">
              <span class="icon lnr lnr-cloud"></span>
          </a>
      </div>
      <hr>

      <div class="drop-downs">
          <a class="drop-down">
              <span>Insert</span>
              <span class="icon lnr lnr-chevron-down"></span>
          </a>
          <hr>
          <a class="drop-down is-active">
              <span>View</span>
              <span class="icon lnr lnr-chevron-down"></span>
          </a>
      </div>
    </div>
  </div>`)
