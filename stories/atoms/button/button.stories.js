import { storiesOf } from "@storybook/html"

storiesOf("Atoms/Button/Primary", module)
  .add("with text", () => `<button class="myClass">Hello World</button>`)
  .add("with emoji", () => `<button class="myClass">😀 😎 👍 💯</button>`)
