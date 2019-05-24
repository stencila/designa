import { storiesOf } from "@storybook/html"

storiesOf("Atoms/Pre", module)
  .add("with text", () => "<pre>Hello World</pre>")
  .add("testing", () => "<p>Hello World</p>")
