import { storiesOf } from '@storybook/html'

storiesOf('Atoms/Tab', module)
  .add(
    'default',
    () =>
      `<ul role="tablist"><li role="presentation" ><a role="tab" tabindex="-1" href="#">Hello World</a></li></ul>`
  )
  .add(
    'active',
    () =>
      `<ul role="tablist"><li role="presentation" aria-selected="true"><a role="tab" tabindex="-1" href="#">Hello World</a></li></ul>`
  )
