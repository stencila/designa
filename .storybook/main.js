module.exports = {
  stories: ['../stories/**/*.stories.@(ts|js|mdx)'],
  addons: [
    '@storybook/addon-docs',
    '@storybook/addon-controls',
    '@storybook/addon-a11y',
    '@storybook/addon-backgrounds',
    '@storybook/addon-storysource',
    '@storybook/addon-measure',
    '@storybook/addon-outline',
    '@storybook/addon-viewport',
  ],
  staticDirs: [
    { from: '../packages/components/dist', to: '/components' },
    { from: '../packages/style-stencila/dist', to: '/style-stencila' },
    { from: '../packages/style-stencila/dist', to: '/style-material' },
  ],
  features: {
    postcss: false,
  },
  core: {
    builder: 'webpack5',
  },
}
