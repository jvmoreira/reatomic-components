import React  from 'react';
import styled from 'styled-components';
import { render, RenderResult } from '@testing-library/react';
import { displayFlexStyle, DisplayFlexStyleProps } from './display-flex-style';

const props: Required<DisplayFlexStyleProps> = {
  flexDirection: 'column',
  flexWrap: 'wrap',
  flexFlow: 'column wrap',
  gap: '10px',
  justifyContent: 'center',
  alignItems: 'flex-end',
  alignContent: 'space-between',
};

test('applies flex rules when props are set', () => {
  const { container } = renderSampleComponent(props);
  expect(container.firstChild).toHaveStyleRule('flex-direction', props.flexDirection);
  expect(container.firstChild).toHaveStyleRule('flex-wrap', props.flexWrap);
  expect(container.firstChild).toHaveStyleRule('flex-flow', props.flexFlow);
  expect(container.firstChild).toHaveStyleRule('gap', props.gap);
  expect(container.firstChild).toHaveStyleRule('justify-content', props.justifyContent);
  expect(container.firstChild).toHaveStyleRule('align-items', props.alignItems);
  expect(container.firstChild).toHaveStyleRule('align-content', props.alignContent);
});

function renderSampleComponent(props: DisplayFlexStyleProps = {}): RenderResult {
  return render(<SampleComponent {...props} />);
}

const SampleComponent = styled.div<DisplayFlexStyleProps>`
  ${displayFlexStyle};
`;
