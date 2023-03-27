import { css } from 'styled-components';
import { CSSProperties } from 'react';
import { propValueInterpolation } from './utils';

export interface DimensionsStyleProps {
  width?: CSSProperties['width'];
  height?: CSSProperties['height'];
  minWidth?: CSSProperties['minWidth'];
  minHeight?: CSSProperties['minHeight'];
  maxWidth?: CSSProperties['maxWidth'];
  maxHeight?: CSSProperties['maxHeight'];
}

export const dimensionsStyle = css<DimensionsStyleProps>`
  width: ${propValueInterpolation('width')};
  height: ${propValueInterpolation('height')};
  min-width: ${propValueInterpolation('minWidth')};
  min-height: ${propValueInterpolation('minHeight')};
  max-width: ${propValueInterpolation('maxWidth')};
  max-height: ${propValueInterpolation('maxHeight')};
`;
