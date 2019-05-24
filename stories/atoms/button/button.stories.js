import { withA11y } from "@storybook/addon-a11y"
import { storiesOf } from "@storybook/html"

storiesOf("Atoms/Button", module)
  .addDecorator(withA11y)
  .add("with text", () => `<button class="myClass">Hello World</button>`)
  .add("with emoji", () => {
    const button = document.createElement("button")
    button.innerText = "😀 😎 👍 💯"
    return button
  })
