import React  from 'react';
import { DecoratorFn } from '@storybook/react';
import { ThemeProvider } from 'styled-components';
import { defaultTheme } from '@/theme';

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

export const decorators: DecoratorFn[] = [
  (Story) => (
    <ThemeProvider theme={defaultTheme}>
      <Story />
    </ThemeProvider>
  )
];
