module.exports = {
  // stories: ['../stories/**/*.stories.@(ts|js|mdx)'],
  presets: ['@storybook/addon-docs/preset'],
  addons: [
    '@storybook/addon-controls',
    '@storybook/addon-a11y/register',
    '@storybook/addon-backgrounds/register',
    '@storybook/addon-options/register',
    '@storybook/addon-storysource/register',
    '@storybook/addon-viewport/register',
    '@storybook/addon-cssresources/register',
    'storybook-addon-root-attribute/register',
  ],
}
