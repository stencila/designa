import { storiesOf } from '@storybook/html'
import { withNotes } from '@storybook/addon-notes'

storiesOf('Modifiers', module)
  .addDecorator(withNotes)

  .add('Global', () => ``, {
    notes: {markdown: `
## Usage
A series of global modifiers to manipulate elements regardless of context.


| Modifier name                        || Description                                                 |
|:-------------------------------------||:------------------------------------------------------------|
| \`has-box-shadow\`                   || Adds a light shadow to an element                           |
| \`has-nowrap\`                       || Disables text wrapping on an element                        |
| \`hide_text\`                        || Removes display of text from an element                     |
| \`margin-{dirction}-auto\`           || Sets margin of an element to auto in supplied direction     |
| \`is-full-width\`                    || Sets element width to 100%                                  |
| \`border-{direction}-{colour-name}\` || Adds a 1px border of \`colour-name\` in specified direction |
| \`is-borderless\`                    || removes all borders                                         |
`}
  })

  .add('Positional', () => ``, {
    notes: {markdown: `
## Usage
A series of positional (largely flex based) modifiers:

| Modifier name             || Model  || Description                                                              |
|:--------------------------||:------:||:-------------------------------------------------------------------------|
| \`flex-end\`              || Flex   || Justifies content to the end                                             |
| \`flex-space-between\`    || Flex   || Items spaced with even gaps between them                                 |
| \`flex-justify-centre\`   || Flex   || Items aligned to the centre                                              |
| \`flex-grow-contents\`    || Flex   || Enables an element to fill available space                               |
| \`no-flex-grow\`          || Flex   || Disables element filling available space                                 |
| \`flex-shrink\`           || Flex   || Enables flex elements to shrink based on available space                 |
| \`no-flex-shrink\`        || Flex   || Disables flex shrinking                                                  |
| \`flex-direction-column\` || Flex   || Sets the flex direction to column                                        |
| \`flex-wrap\`             || Flex   || Allow flex items to wrap (particularly helpful with column/grid layouts) |
| \`align-flex-end\`        || Flex   || Align child elements to the end of the parent                            |
| \`align-flex-start\`      || Flex   || Align child elements to the start of the parent                          |
| \`align-centre\`          || Flex   || Align child elements to the centre of the parent                         |
| \`self-flex-end\`         || Flex   || Align an element to the end                                              |
| \`is-fixed-full-width\`   || Box    || create a fixed item 100% of screen height & width                        |
`}
  })
