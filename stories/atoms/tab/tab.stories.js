import { storiesOf } from '@storybook/html'
import readme from '../../../packages/components/src/components/tab/readme.md'

storiesOf('Atoms/Tab', module)
  .addParameters({
    readme: {
      sidebar: readme
    }
  })
  .add(
    'default',
    () =>
      `<ul role="tablist"><li role="presentation" ><a role="tab" tabindex="-1" href="#">Hello World</a></li></ul>`
  )
  .add(
    'active',
    () =>
      `<ul role="tablist"><li role="presentation"><a role="tab" aria-selected="true" tabindex="-1" href="#">Hello World</a></li></ul>`
  )
