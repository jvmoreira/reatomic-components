import styled from 'styled-components';
import { ThemedProps } from '@/theme';
import { booleanPropInterpolation } from '@/style/utils';
import { baseStyle, BaseStyleProps } from '@/style/base-style';
import { textStyle, TextStyleProps } from '@/style/text-style';

export interface TextProps extends BaseStyleProps, TextStyleProps {
  bold?: boolean;
  italic?: boolean;
}

export const Text = styled.span<ThemedProps<TextProps>>`
  ${baseStyle};
  ${textStyle};
  font-weight: ${booleanPropInterpolation('bold', 'bold')};
  font-style: ${booleanPropInterpolation('italic', 'italic')};
`;
