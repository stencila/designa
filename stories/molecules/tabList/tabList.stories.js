import { html } from 'lit-html'

export default {
  title: 'Molecules/Tab List',
  component: 'stencila-tab-list'
}

export const singleTab = () =>
  html`
    <ul role="tablist">
      <li role="presentation">
        <a role="tab" aria-selected="true" tabindex="0" href="#">Overview</a>
      </li>
    </ul>
  `

export const twoTabs = () =>
  html`
    <ul role="tablist">
      <li role="presentation">
        <a role="tab" tabindex="-1" href="#">Overview</a>
      </li>
      <li role="presentation">
        <a role="tab" aria-selected="true" tabindex="0" href="#">Files</a>
      </li>
    </ul>
  `

export const multipleTabs = () =>
  html`
    <ul role="tablist">
      <li role="presentation">
        <a role="tab" tabindex="-1" href="#">Overview</a>
      </li>
      <li role="presentation">
        <a role="tab" aria-selected="true" tabindex="0" href="#">Files</a>
      </li>
      <li role="presentation">
        <a role="tab" tabindex="-1" href="#">Activity</a>
      </li>
      <li role="presentation">
        <a role="tab" tabindex="-1" href="#">Sharing</a>
      </li>
      <li role="presentation">
        <a role="tab" tabindex="-1" href="#">Settings</a>
      </li>
    </ul>
  `
