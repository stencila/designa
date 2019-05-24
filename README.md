# Styla

> 🎨 Stencila's visual design resources and style guide

This is the place for Stencila's visual design resources (e.g. CSS, icons,
logos) and style guide. The resources here will be reused across a number of
other repositories including our main website
([`stencila/website`](https://github.com/stencila/website)) and the hub
([`stencila/hub`](https://github.com/stencila/hub)).

---

## Table of Contents

- [Table of Contents](#Table-of-Contents)
- [Design Philosophy](#Design-Philosophy)
- [Quick Start](#Quick-Start)
- [Development](#Development)
  - [Commit Messages](#Commit-Messages)
- [Browser Support](#Browser-Support)

---

## Design Philosophy

A goal that we strive to achieve is to have semantic and accessible
presentational markup, i.e. HTML, remain unchanged as we apply different
themes to it.

For in depth outline, please see [this
issue](https://github.com/stencila/style/issues/9).

## Quick Start

1. `git clone git@github.com:stencila/style.git styla && cd styla`
2. `npm install`
3. `npm run bootstrap`
4. `npm run build`
5. `npm run storybook`

## Development

To get started with development, clone this repo:

`git clone git@github.com:stencila/style.git`

Then install the necessary Node packages:

`npm install && npm run bootstrap`

Start Storybook and watch for CSS changes inside `/packages/*`

`npm run dev`

> 😩 Note that you will currently have to manually reload, or disable/enable the desired "CSS Resource" in Storybook after making changes to see the results. A fix for this is high on the priority list.

### Commit Messages

Please use [conventional
changelog](https://github.com/conventional-changelog/conventional-changelog)
style commit messages e.g. `docs(readme): fixed spelling mistake`.
[`semantic-release`](https://github.com/semantic-release/semantic-release) is
enabled to automate version management: minor version releases are done if
any `feat(...)` commits are pushed, patch version releases are done if any
`fix(...)` commits are pushed. See [the
specifications](https://www.conventionalcommits.org/en/v1.0.0-beta.2/) for
full details.

Package builds and Storybook generation are done on [Travis
CI](https://travis-ci.org/stencila/style). Releases are made to
[NPM](https://www.npmjs.com/package/@stencila/style) and [Github
Releases](https://github.com/stencila/style/releases).

## Browser Support

We aim to maintain browser support parity with React, namely popualr browsers
according to CanIUse, including IE9 and above.

> React supports all popular browsers, including Internet Explorer 9 and
> above, although some polyfills are required for older browsers such as IE 9
> and IE 10. > _https://reactjs.org/docs/react-dom.html#browser-support_
