import { storiesOf } from '@storybook/html'
import readme from '../../../packages/components/src/components/tabList/readme.md'

const storyName = 'Molecules/Tab List'

storiesOf(storyName, module)
  .addParameters({
    readme: {
      sidebar: readme
    }
  })
  .add(
    'Single Tab',
    () =>
      `<ul role="tablist"><li role="presentation"  aria-selected="true"><a role="tab" tabindex="-1" href="#">Overview</a></li>
      </ul>`
  )
  .add(
    'Two Tabs',
    () =>
      `<ul role="tablist"><li role="presentation" ><a role="tab" tabindex="-1" href="#">Overview</a></li>
      <li role="presentation" aria-selected="true"><a role="tab" tabindex="-1" href="#">Files</a></li>
      </ul>`
  )
  .add(
    'Multiple Tabs',
    () =>
      `<ul role="tablist"><li role="presentation" ><a role="tab" tabindex="-1" href="#">Overview</a></li>
      <li role="presentation" aria-selected="true"><a role="tab" tabindex="-1" href="#">Files</a></li>
      <li role="presentation" ><a role="tab" tabindex="-1" href="#">Activity</a></li>
      <li role="presentation" ><a role="tab" tabindex="-1" href="#">Sharing</a></li>
      <li role="presentation" ><a role="tab" tabindex="-1" href="#">Settings</a></li></ul>`
  )

const tabs = ['Overview', 'Files', 'Activity', 'Sharing', 'Settings']

storiesOf(storyName + '/Web Components', module)
  .add('Single Tab', () => {
    const el = document.createElement('stencila-tab-list')
    el.tabs = [tabs[0]]
    return el
  })
  .add('Two Tabs', () => {
    const el = document.createElement('stencila-tab-list')
    el.tabs = tabs.slice(0, 2)
    return el
  })
  .add('Multiple Tabs', () => {
    const el = document.createElement('stencila-tab-list')
    el.tabs = tabs
    return el
  })
