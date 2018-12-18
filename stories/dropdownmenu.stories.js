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


The drop down uses the following variables:

| Variable name                                       || Default value                      |
|:----------------------------------------------------||-----------------------------------:|
| \`$stencila-dropdown-content-background-color\`     || \`$blue\`                          |
| \`$stencila-dropdown-header-triangle\`              || \`$blue\`                          |
| \`$stencila-dropdown-header-background\`            || \`$blue\`                          |
| \`$stencila-dropdown-header-hover\`                 || \`$denim\`                         |
| \`$stencila-dropdown-header-color\`                 || \`$white\`                         |
| \`$stencila-dropdown-item-color\`                   || \`$black\`                         |
| \`$stencila-dropdown-item-background-color\`        || \`$white\`                         |
| \`$stencila-dropdown-item-hover-border-color\`      || \`$green\`                         |
| \`$stencila-dropdown-item-border-color\`            || \`$white-lilac\`                   |
| \`$stencila-dropdown-item-active-color\`            || \`$blue\`                          |
| \`$stencila-dropdown-item-active-background-color\` || \`$white-smoke\`                   |
| \`$stencila-dropdown-item-active-border-color\`     || \`$blue\`                          |
| \`$stencila-dropdown-content-shadow\`               || \`2px 2px 20px rgba($black, 0.1)\` |
| \`$stencila-dropdown-font-weight\`                  || \`$weight-normal\`                 |
| \`$stencila-dropdown-close-color\`                  || \`$white\`                         |
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
