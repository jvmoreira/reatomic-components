import React, { ReactElement } from 'react';
import { FlexContainer } from './atoms/flex-container';
import { Container } from './atoms/container';

export function App(): ReactElement {
  return (
    <FlexContainer display="center">
      <Container>
        abc
      </Container>
    </FlexContainer>
  );
}
