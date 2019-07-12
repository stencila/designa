import { storiesOf } from '@storybook/html'

storiesOf('Atoms/Code', module).add(
  'default',
  () => '<code>const id = (x: unknown) => x</code>'
)
