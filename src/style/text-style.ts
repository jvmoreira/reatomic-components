import { css } from 'styled-components';
import { CSSProperties } from 'react';
import { propValueInterpolation, themedPropValueInterpolation } from './utils';
import { ThemeProps } from '../theme';

export interface TextStyleProps {
  color?: CSSProperties['color'] | keyof ThemeProps['theme']['colors'];
  size?: CSSProperties['fontSize'];
  align?: CSSProperties['textAlign'];
  fontFamily?: CSSProperties['fontFamily'];
  fontStyle?: CSSProperties['fontStyle'];
  fontWeight?: CSSProperties['fontWeight'];
  textDecoration?: CSSProperties['textDecoration'];
}

export const textStyle = css<TextStyleProps>`
  color: ${themedPropValueInterpolation('colors', 'color')};
  font-size: ${propValueInterpolation('size')};
  text-align: ${propValueInterpolation('align')};
  font-family: ${propValueInterpolation('fontFamily')};
  font-style: ${propValueInterpolation('fontStyle')};
  font-weight: ${propValueInterpolation('fontWeight')};
  text-decoration: ${propValueInterpolation('textDecoration')};
`;
