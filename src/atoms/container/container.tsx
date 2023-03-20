import styled, { CSSProperties } from 'styled-components';
import { propValueInterpolation, themedPropValueInterpolation } from '@/style/utils';
import { baseStyle, BaseStyleProps } from '@/style/base-style';
import { dimensionsStyle, DimensionsStyleProps } from '@/style/dimensions-style';
import { ThemedProps, ThemeProps } from '@/theme';

export interface ContainerProps extends BaseStyleProps, DimensionsStyleProps {
  color?: CSSProperties['color'] | keyof ThemeProps['theme']['colors'];
  background?: CSSProperties['background'] | keyof ThemeProps['theme']['colors'];
  border?: CSSProperties['border'];
  borderRadius?: CSSProperties['borderRadius'];
  display?: CSSProperties['display'];
  position?: CSSProperties['position'];
  overflow?: CSSProperties['overflow'];
  wordWrap?: CSSProperties['wordWrap'];
}

export const Container = styled.div<ThemedProps<ContainerProps>>`
  ${baseStyle};
  ${dimensionsStyle};
  color: ${themedPropValueInterpolation('colors', 'color')};
  background: ${themedPropValueInterpolation('colors', 'background')};
  border: ${propValueInterpolation('border')};
  border-radius: ${propValueInterpolation('borderRadius')};
  display: ${propValueInterpolation('display')};
  position: ${propValueInterpolation('position')};
  overflow: ${propValueInterpolation('overflow')};
  word-wrap: ${propValueInterpolation('wordWrap')};
`;
