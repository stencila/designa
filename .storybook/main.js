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
    '../packages/components/dist',
    '../packages/style-stencila/dist',
    // TODO: Allow switching between themes via Storybook toolbar
    // '../packages/style-material/dist',
  ],
  features: {
    postcss: false,
  },
}
