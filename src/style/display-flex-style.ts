import { css } from 'styled-components';
import { CSSProperties } from 'react';
import { propValueInterpolation } from './utils';

export interface DisplayFlexStyleProps {
  flexFlow?: CSSProperties['flexFlow'];
  flexDirection?: CSSProperties['flexDirection'];
  flexWrap?: CSSProperties['flexWrap'];
  gap?: CSSProperties['gap'];
  justifyContent?: CSSProperties['justifyContent'];
  alignItems?: CSSProperties['alignItems'];
  alignContent?: CSSProperties['alignContent'];
}

export const displayFlexStyle = css<DisplayFlexStyleProps>`
  flex-flow: ${propValueInterpolation('flexFlow')};
  flex-direction: ${propValueInterpolation('flexDirection')};
  flex-wrap: ${propValueInterpolation('flexWrap')};
  gap: ${propValueInterpolation('gap')};
  justify-content: ${propValueInterpolation('justifyContent')};
  align-items: ${propValueInterpolation('alignItems')};
  align-content: ${propValueInterpolation('alignContent')};
`;
