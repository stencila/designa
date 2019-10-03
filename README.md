# Designa

> 🎨 Stencila's visual design resources and style guide

This is the place for Stencila's visual design resources (e.g. CSS, icons,
logos) and style guide. The resources here will be reused across a number of
other repositories including our main [`website`](https://github.com/stencila/website), the
[`hub`](https://github.com/stencila/hub), and [`thema`](https://github.com/stencila/thema).

## Packages

This repository is a [monorepo](https://en.wikipedia.org/wiki/Monorepo), and contains the following packages:

- [brand](./packages/brand): Stencila branding elements such as fonts, logos, and illustrations.
- [style-stencila](./packages/style-stencila): CSS for styling semantic HTML markup in Stencila's proprietary visual language.
- [style-material](./packages/style-material): CSS for styling semantic HTML markup in Google's Material Design visual language.
- [components](./packages/components): Web Components built using [StencilJS](https://stenciljs.com), styled using the `style-*` packages listed above.

---

## Table of Contents

- [Packages](#packages)
- [Table of Contents](#table-of-contents)
- [Design Philosophy](#design-philosophy)
- [Quick Start](#quick-start)
- [Development](#development)
  - [Adding Components](#adding-components)
  - [Commit Messages](#commit-messages)
- [Browser Support](#browser-support)
- [External Resources](#external-resources)
- [Acknowledgments](#acknowledgments)

---

## Design Philosophy

A goal that we strive to achieve is to have semantic and accessible
presentational markup, i.e. HTML, remain unchanged as we apply different
themes to it.

For in depth outline, please see [this
issue](https://github.com/stencila/designa/issues/9).

## Quick Start

1. `git clone git@github.com:stencila/designa.git && cd designa`
2. `npm install`
3. `npm run bootstrap`
4. `npm run build`
5. `npm run storybook`

## Development

To get started with development, clone this repo:

`git clone git@github.com:stencila/designa.git`

Then install the necessary Node packages:

`npm install && npm run bootstrap`

Start Storybook and watch for changes inside `/packages/*`

`npm run dev`

> 😩 Note that you will currently have to manually reload, or disable/enable the desired "CSS Resource" in Storybook after making changes to see the results. A fix for this is high on the priority list.

### Adding Components

Create a [new Storybook story](https://storybook.js.org/docs/basics/writing-stories/)
and avoid using CSS classes as much as possible. Use semantic HTML tags and WAI-ARIA
attributes instead. See the [External Resources](#External-Resources) section
below for useful references.

Once the story is written, you will need to add appropriate styles for each design system.
Currently we support:

- Stencila's own design system
- Material Design system

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
CI](https://travis-ci.org/stencila/designa). Releases are made to the sub-packages
found inside the packages directory.

## Browser Support

We aim to maintain browser support parity with React, namely popular browsers
according to CanIUse, including IE9 and above.

> React supports all popular browsers, including Internet Explorer 9 and
> above, although some polyfills are required for older browsers such as IE 9
> and IE 10. > _https://reactjs.org/docs/react-dom.html#browser-support_

## External Resources

- [WAI-ARIA](https://www.w3.org/TR/wai-aria-practices-1.1)
- [Inclusive Components](https://inclusive-components.design)
- [TailwindCSS](https://tailwindcss.com)

## Acknowledgments

We rely on many tools and services for which we are grateful ❤ to their developers and contributors for all their time and energy.

| Tool                                                                                                                    | Use                                                                                                |
| ----------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| <a href="Sauce Labs"><img src="./.github/PoweredBySauceLabs.svg" width="150" alt="Testing powered by Sauce Labs" /></a> | Cross-browser Testing Platform and Open Source <3 Provided by [Sauce Labs](https://saucelabs.com). |
