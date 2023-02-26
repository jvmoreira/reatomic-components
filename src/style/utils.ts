import { ThemeProps } from '../theme';
import { Interpolation, InterpolationValue } from 'styled-components';

type ThemeInterpolation = Interpolation<ThemeProps>;

export function propValueInterpolation<K extends string, T extends Partial<Record<K, InterpolationValue>>>(
  attr: K,
  defaultValue?: InterpolationValue,
): Interpolation<T> {
  return (props) => props[attr] || defaultValue;
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
