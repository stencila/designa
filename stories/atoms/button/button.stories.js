import { storiesOf } from "@storybook/html";

storiesOf("Atoms/Button/Primary", module)
  .add("with text", () => `<button>Hello World</button>`)
  .add("with emoji", () => `<button>😀 😎 👍 💯</button>`);
