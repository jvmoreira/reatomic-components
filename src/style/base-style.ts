import { CSSProperties } from 'react';
import { css } from 'styled-components';
import { propValueInterpolation } from './utils';

export interface BaseStyleProps {
  margin?: CSSProperties['margin'];
  padding?: CSSProperties['padding'];
}

export const baseStyle = css<BaseStyleProps>`
  margin: ${propValueInterpolation('margin', 0)};
  padding: ${propValueInterpolation('padding', 0)};
  font-family: inherit;
  font-size: inherit;
  font-weight: inherit;
  box-sizing: border-box;
`;
