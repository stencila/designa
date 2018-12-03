## Stencila's visual design resources and style guide

[![Build](https://travis-ci.org/stencila/schema.svg?branch=master)](https://travis-ci.org/stencila/style)
[![NPM](http://img.shields.io/npm/v/@stencila/style.svg?style=flat)](https://www.npmjs.com/package/@stencila/style)
[![Docs](https://img.shields.io/badge/style-guide-blue.svg)](https://stencila.github.io/style/)
[![Community](https://img.shields.io/badge/join-community-green.svg)](https://community.stenci.la)
[![Chat](https://badges.gitter.im/stencila/stencila.svg)](https://gitter.im/stencila/stencila)


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

Please use [conventional changelog](https://github.com/conventional-changelog/conventional-changelog) style commit messages e.g. `docs(readme): fixed spelling mistake`. [`semantic-release`](https://github.com/semantic-release/semantic-release) is enabled to automate version management: minor version releases are done if any `feat(...)` commits are pushed, patch version releases are done if any `fix(...)` commits are pushed. See [the specifications](https://www.conventionalcommits.org/en/v1.0.0-beta.2/) for full details.

Package builds and Storybook generation are done on [Travis CI](https://travis-ci.org/stencila/style). Releases are made to [NPM](https://www.npmjs.com/package/@stencila/style) and [Github Releases](https://github.com/stencila/style/releases).
