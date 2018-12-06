import { storiesOf } from '@storybook/html'
import { withNotes } from '@storybook/addon-notes'

storiesOf('Component/Dropdown', module)
  .addDecorator(withNotes)

  .add('Dropdown menu', () => `
<div class="container">
    <div class="dropdown is-new-menu is-active is-hoverable">
        <div class="dropdown-trigger">
            <button class="button is-text is-active" aria-haspopup="true" aria-controls="dropdown-menu">
              <span>Dropdown button</span>
              <span class="icon lnr lnr-chevron-down is-small"></span>
            </button>
        </div>
        <div class="dropdown-menu" id="dropdown-menu" role="menu">
            <div class="dropdown-content">
                <header class="dropdown-header">
                    <span>Add:</span>
                    <button class="button is-plain icon lnr lnr-cross close-button"></button>
                </header>
                <div class="dropdown-items">
                    <a href="#" class="dropdown-item"><img src="images/doc-icon.svg" width="26" height="30" alt="" class="logo"> <span>Doc</span></a>
                    <a class="dropdown-item"><img src="images/sheet-icon.svg" width="26" height="30" alt="" class="logo"> <span>Sheet</span></a>
                    <a href="#" class="dropdown-item is-active"><img src="images/slide-icon.svg" width="26" height="30" alt="" class="logo"> <span>Slide</span></a>
                </div>
            </div>
        </div>
    </div>
</div>
  `, {
    notes: { markdown: `
## Usage
A dropdown menu. Must include the class \`is-new-menu\` to override Bulma's default styles.

## Options
Can be aligned to the right via use of the \`is-right-aligned\` class on the \`dropdown-menu\` element.

## Variables
--
  `}})
  .add('Dropdown menu - right aligned', () => `
<div class="container">
    <div class="dropdown is-new-menu is-active is-hoverable">
        <div class="dropdown-trigger">
            <button class="button is-text is-active" aria-haspopup="true" aria-controls="dropdown-menu">
              <span>Dropdown button</span>
              <span class="icon lnr lnr-chevron-down is-small"></span>
            </button>
        </div>
        <div class="dropdown-menu is-right-aligned" id="dropdown-menu" role="menu">
            <div class="dropdown-content">
                <header class="dropdown-header">
                    <span>Add:</span>
                    <button class="button is-plain icon lnr lnr-cross close-button"></button>
                </header>
                <div class="dropdown-items">
                    <a href="#" class="dropdown-item"><img src="images/doc-icon.svg" width="26" height="30" alt="" class="logo"> <span>Doc</span></a>
                    <a class="dropdown-item"><img src="images/sheet-icon.svg" width="26" height="30" alt="" class="logo"> <span>Sheet</span></a>
                    <a href="#" class="dropdown-item is-active"><img src="images/slide-icon.svg" width="26" height="30" alt="" class="logo"> <span>Slide</span></a>
                </div>
            </div>
        </div>
    </div>
</div>`, {
  notes: { markdown: `
## Usage
A dropdown menu with the menu aligned to the right of the trigger

## Options
--

## Variables
--
`}})
