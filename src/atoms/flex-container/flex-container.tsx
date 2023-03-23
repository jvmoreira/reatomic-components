import styled from 'styled-components';
import { ThemedProps } from '@/theme';
import { DisplayFlexStyleProps, displayFlexStyle } from '@/style/display-flex-style';
import { ContainerProps, Container } from '../container';

export interface FlexContainerProps extends Omit<ContainerProps, 'display'>, DisplayFlexStyleProps {
}

export const FlexContainer = styled(Container).attrs({ display: 'flex' })<ThemedProps<FlexContainerProps>>`
  ${displayFlexStyle};
`;
