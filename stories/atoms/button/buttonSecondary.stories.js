import { storiesOf } from "@storybook/html"

storiesOf("Atoms/Button/Secondary", module)
  .add("with text", () => `<button class="secondary">Hello World</button>`)
  .add("with emoji", () => `<button class="secondary">😀 😎 👍 💯</button>`)
