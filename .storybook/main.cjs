const path = require('path');

/** @type {import('@storybook/core-common').StorybookConfig} */
module.exports = {
  framework: '@storybook/react',
  addons: [
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
  ],
  stories: [
    '../src/**/*.stories.mdx',
    '../src/**/*.stories.@(ts|tsx)',
  ],
  core: {
    disableTelemetry: true,
  },
  webpackFinal: async (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      "@": path.resolve(__dirname, "../src")
    }
    return config;
  }
};
