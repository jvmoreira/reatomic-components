import { Interpolation, InterpolationValue } from 'styled-components';
import { ThemedProps, ThemeProps } from '@/theme';

type ThemeInterpolation = Interpolation<ThemeProps>;

export function propValueInterpolation<T, K extends keyof T>(
  attr: K,
  defaultValue?: InterpolationValue,
): Interpolation<T> {
  return (props) => props[attr] || defaultValue;
}

function isThemeValueKey<K extends keyof ThemeProps['theme']>(
  value: string | number | symbol,
  themeKey: K,
  theme: ThemeProps['theme'],
): value is keyof ThemeProps['theme'][K] {
  return value in theme.colors;
}

export function themedPropValueInterpolation<
  T extends keyof ThemeProps['theme'],
  P,
  K extends keyof P,
>(
  themeKey: T,
  propAttr: K,
  defaultValue?: InterpolationValue,
): Interpolation<ThemedProps<P>> {
  return (props) => {
    const propAttrValue = (props[propAttr] || '') as string | number | symbol;
    return isThemeValueKey(propAttrValue, themeKey, props.theme)
      ? `${props.theme[themeKey][propAttrValue]}`
      : propValueInterpolation(propAttr, defaultValue);
  };
}

export function booleanPropInterpolation<K extends string, T extends Partial<Record<K, boolean>>>(
  attr: K,
  value: InterpolationValue,
): Interpolation<T> {
  return (props) => props[attr] && value;
}

export const primaryColorInterpolation: ThemeInterpolation = (props) => {
  return props.theme.colors.primary;
};
