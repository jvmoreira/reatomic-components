import React from 'react';
import styled from 'styled-components';
import { render, RenderResult } from '@testing-library/react';
import { baseStyle, BaseStyleProps } from './base-style';

test('applies default rules', () => {
  const { container } = renderSampleComponent();
  expect(container.firstChild).toHaveStyleRule('font-family', 'inherit');
  expect(container.firstChild).toHaveStyleRule('font-size', 'inherit');
  expect(container.firstChild).toHaveStyleRule('font-weight', 'inherit');
  expect(container.firstChild).toHaveStyleRule('box-sizing', 'border-box');
});

describe('margin rule', () => {
  test('applies margin 0 by default', () => {
    const { container } = renderSampleComponent();
    expect(container.firstChild).toHaveStyleRule('margin', '0');
  });

  test('applies margin value from prop', () => {
    const margin = '20px';
    const { container } = renderSampleComponent({ margin });
    expect(container.firstChild).toHaveStyleRule('margin', margin);
  });
});

describe('padding rule', () => {
  test('applies padding 0 by default', () => {
    const { container } = renderSampleComponent();
    expect(container.firstChild).toHaveStyleRule('padding', '0');
  });

  test('applies padding value from prop', () => {
    const padding = '20px';
    const { container } = renderSampleComponent({ padding });
    expect(container.firstChild).toHaveStyleRule('padding', padding);
  });
});

function renderSampleComponent(props: BaseStyleProps = {}): RenderResult {
  return render(<SampleComponent {...props} />);
}

const SampleComponent = styled.div<BaseStyleProps>`
  ${baseStyle};
`;
