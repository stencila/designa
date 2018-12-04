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

When you want to use this style from another repo, but do active dev here, `npm link` can be very useful. Setup this repo to be linked to from other repos:

```bash
sudo npm link
```

Then in the other repo link to this repo: 

```bash
npm link @stencila/style
```

When you have finished making the changes you need in this repo, commit with a `feat` or `fix` commit so that a new version gets published on NPM:

```bash
git add .
git commit -m 'fix:....'
```

Wait for the CI build to finish and the new version to be published (click the NPM badge above), then reinstall `@stencila/style` in the other repo so that the link is broken and the new version added to your `package.json`:

```bash
npm install --save @stencila/style
```


Please use [conventional changelog](https://github.com/conventional-changelog/conventional-changelog) style commit messages e.g. `docs(readme): fixed spelling mistake`. [`semantic-release`](https://github.com/semantic-release/semantic-release) is enabled to automate version management: minor version releases are done if any `feat(...)` commits are pushed, patch version releases are done if any `fix(...)` commits are pushed. See [the specifications](https://www.conventionalcommits.org/en/v1.0.0-beta.2/) for full details.

Package builds and Storybook generation are done on [Travis CI](https://travis-ci.org/stencila/style). Releases are made to [NPM](https://www.npmjs.com/package/@stencila/style) and [Github Releases](https://github.com/stencila/style/releases).
