/** @type {import('@storybook/core-common').StorybookConfig} */
module.exports = {
  framework: '@storybook/react',
  addons: [
    '@storybook/addon-essentials',
  ],
  stories: [
    '../src/**/*.stories.mdx',
    '../src/**/*.stories.@(ts|tsx)',
  ],
  core: {
    disableTelemetry: true,
  },
};
