import { ThemedStyledProps, ThemeProps as StyledThemeProps } from 'styled-components';

type Theme = typeof defaultTheme;

export type ThemeProps = StyledThemeProps<Theme>;
export type ThemedProps<P> = ThemedStyledProps<P, Theme>;

export const defaultTheme = {
  colors: {
    primary: '#3178C6',
  },
};
