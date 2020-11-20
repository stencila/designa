[![Storybook](https://raw.githubusercontent.com/storybooks/brand/master/badge/badge-storybook.svg)](https://stencila.github.io/designa/) ![Built With Stencil](https://img.shields.io/badge/-Built%20With%20Stencil-16161d.svg?logo=data%3Aimage%2Fsvg%2Bxml%3Bbase64%2CPD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjIuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCA1MTIgNTEyIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MTIgNTEyOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI%2BCjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI%2BCgkuc3Qwe2ZpbGw6I0ZGRkZGRjt9Cjwvc3R5bGU%2BCjxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik00MjQuNywzNzMuOWMwLDM3LjYtNTUuMSw2OC42LTkyLjcsNjguNkgxODAuNGMtMzcuOSwwLTkyLjctMzAuNy05Mi43LTY4LjZ2LTMuNmgzMzYuOVYzNzMuOXoiLz4KPHBhdGggY2xhc3M9InN0MCIgZD0iTTQyNC43LDI5Mi4xSDE4MC40Yy0zNy42LDAtOTIuNy0zMS05Mi43LTY4LjZ2LTMuNkgzMzJjMzcuNiwwLDkyLjcsMzEsOTIuNyw2OC42VjI5Mi4xeiIvPgo8cGF0aCBjbGFzcz0ic3QwIiBkPSJNNDI0LjcsMTQxLjdIODcuN3YtMy42YzAtMzcuNiw1NC44LTY4LjYsOTIuNy02OC42SDMzMmMzNy45LDAsOTIuNywzMC43LDkyLjcsNjguNlYxNDEuN3oiLz4KPC9zdmc%2BCg%3D%3D&colorA=16161d&style=flat-square)

# `@stencila/components`

# Stencil

Stencil is a compiler for building fast web apps using Web Components.

Stencil combines the best concepts of the most popular frontend frameworks into a compile-time rather than run-time tool. Stencil takes TypeScript, JSX, a tiny virtual DOM layer, efficient one-way data binding, an asynchronous rendering pipeline (similar to React Fiber), and lazy-loading out of the box, and generates 100% standards-based Web Components that run in any browser supporting the Custom Elements v1 spec.

Stencil components are just Web Components, so they work in any major framework or with no framework at all.

## Naming Components

Web Component tags may not be CamelCased and they must include a hyphen (`-`) in the name.
Please follow the pattern of `<stencila-(component-type)>`, for example `<stencila-tab-list>`.

## Using these components

### Add to your project

There are two ways to load these components into your project, a `script` tag in an HTML file, or as a Node module.

#### Script tag

- Put the following script tags in the head of your HTML document:

```js
<script type="module" src="https://unpkg.com/@stencila/components@latest/dist/stencila-components/stencila-components.esm.js"></script>
<script type="text/javascript" nomodule="true" src="https://unpkg.com/@stencila/components@latest/dist/stencila-components/stencila-components.js"></script>
```

- Then you can use the element anywhere in your HTML, HTML template, JSX, etc.

In modern browsers supporting the `module` attribute, only the components used on the page will be requested and lazy-loaded, keeping the page size low.

#### Node module

- Run `npm install @stencila/components --save`
- Import the package in your main/top-level file: `import '@stencila/components'`
- Stencil will automatically setup the lazy-loading capabilities for the Stencil library. Then you can use the element anywhere in your template, JSX, HTML etc.

### Using and customizing components

The best reference for how to use and combine these components is our [component library](https://stencila.github.io/designa/).
The source code for the stories is written using simple [`lit-html`](https://lit-html.polymer-project.org) syntax and [can be found here](../../stories).

For general overview of working with WebComponents using plain JavaScript, the [StencilJS website](https://stenciljs.com/docs/javascript) provides a good introduction.

### Integrating with other web frameworks

Please visit the [StencilJS documentation](https://stenciljs.com/docs/overview) for up to date documentation.
