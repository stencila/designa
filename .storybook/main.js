module.exports = {
  stories: ['../stories/**/*.stories.@(ts|js|mdx)'],
  addons: [
    '@storybook/addon-docs',
    '@storybook/addon-controls',
    '@storybook/addon-a11y',
    '@storybook/addon-backgrounds',
    '@storybook/addon-storysource',
    '@storybook/addon-viewport',
  ],
  features: {
    postcss: false,
  },
}
