## `stencila/style` : Stencila's visual design resources and style guide

This is the place for Stencila's visual design resources (e.g. CSS, icons, logos) and style guide. The resources here will be reused across a number of other repositores including our main website ([`stencila/website`](https://github.com/stencila/website)) and the hub ([`stencila/hub`](https://github.com/stencila/hub)).

To get started with development, clone this repo:

```bash
git clone git@github.com:stencila/style.git
```

Then install the necessary Node packages:

```bash
npm install
```

Build SASS into CSS using the `watch` NPM script:

```bash
npm run watch
```

In a separate console, run Storybook and refresh your browser when you make changes to the CSS (Storybook automatically refreshes when you make changes to the stories):

```bash
npm run storybook
```
