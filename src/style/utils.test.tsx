import React from 'react';
import styled from 'styled-components';
import { render, RenderResult } from '@testing-library/react';
import { defaultTheme, ThemedProps } from '../theme';
import { booleanPropInterpolation, primaryColorInterpolation, propValueInterpolation } from './utils';

const fontFamilyDefaultValue = 'sans-serif';

describe('primaryColorInterpolation', () => {
  test('applies primary color rule', () => {
    const { container } = renderSampleComponent();
    expect(container.firstChild).toHaveStyleRule('color', defaultTheme.colors.primary);
  });
});

describe('propValueInterpolation', () => {
  test('applies default value when prop is not provided', () => {
    const { container } = renderSampleComponent();
    expect(container.firstChild).toHaveStyleRule('font-family', fontFamilyDefaultValue);
  });

  test('applies value from prop when it is provided', () => {
    const fontFamily = 'cursive';
    const { container } = renderSampleComponent({ fontFamily });
    expect(container.firstChild).toHaveStyleRule('font-family', fontFamily);
  });
});

describe('booleanPropInterpolation', () => {
  test('does not apply value when prop is not provided', () => {
    const { container } = renderSampleComponent();
    expect(container.firstChild).not.toHaveStyleRule('display');
  });
  test('does not apply value when prop is set to false', () => {
    const { container } = renderSampleComponent({ displayFlex: false });
    expect(container.firstChild).not.toHaveStyleRule('display');
  });

  test('applies value from prop when it is set as true', () => {
    const { container } = renderSampleComponent({ displayFlex: true });
    expect(container.firstChild).toHaveStyleRule('display', 'flex');
  });
});

function renderSampleComponent(props: SampleComponentProps = {}): RenderResult {
  return render(<SampleComponent {...props} theme={defaultTheme} />);
}

interface SampleComponentProps {
  fontFamily?: string;
  displayFlex?: boolean;
}

type ThemedSampleComponentProps = ThemedProps<SampleComponentProps>;

const SampleComponent = styled.div<ThemedSampleComponentProps>`
  color: ${primaryColorInterpolation};
  font-family: ${propValueInterpolation('fontFamily', fontFamilyDefaultValue)};
  display: ${booleanPropInterpolation('displayFlex', 'flex')};
`;
