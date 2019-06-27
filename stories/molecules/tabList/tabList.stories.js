import { storiesOf } from "@storybook/html"

storiesOf("Molecules/Tab List", module)
  .add(
    "Single Tab",
    () =>
      `<ul role="tablist"><li role="presentation" class="tab"><a role="tab" tabindex="-1" href="#">Overview</a></li>
      </ul>`
  )
  .add(
    "Two Tabs",
    () =>
      `<ul role="tablist"><li role="presentation" class="tab"><a role="tab" tabindex="-1" href="#">Overview</a></li>
      <li role="presentation" class="tab active"><a role="tab" tabindex="-1" href="#">Files</a></li>
      </ul>`
  )
  .add(
    "Multiple Tabs",
    () =>
      `<ul role="tablist"><li role="presentation" class="tab"><a role="tab" tabindex="-1" href="#">Overview</a></li>
      <li role="presentation" class="tab active"><a role="tab" tabindex="-1" href="#">Files</a></li>
      <li role="presentation" class="tab"><a role="tab" tabindex="-1" href="#">Activity</a></li>
      <li role="presentation" class="tab"><a role="tab" tabindex="-1" href="#">Sharing</a></li>
      <li role="presentation" class="tab"><a role="tab" tabindex="-1" href="#">Settings</a></li></ul>`
  )
