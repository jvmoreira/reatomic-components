import React from 'react';
import styled from 'styled-components';
import { render, RenderResult } from '@testing-library/react';
import { defaultTheme, ThemedProps } from '@/theme';
import {
  booleanPropInterpolation,
  primaryColorInterpolation,
  propValueInterpolation,
  themedPropValueInterpolation,
} from './utils';

const fontFamilyDefaultValue = 'sans-serif';
const backgroundColorDefaultValue = 'green';

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

describe('themedPropValueInterpolation', () => {
  test('applies default color when color prop is not provided', () => {
    const { container } = renderSampleComponent();
    expect(container.firstChild).toHaveStyleRule('background-color', backgroundColorDefaultValue);
  });

  test('applies color from theme when color prop is a theme color', () => {
    const { container } = renderSampleComponent({ backgroundColor: 'primary' });
    expect(container.firstChild).toHaveStyleRule('background-color', defaultTheme.colors.primary);
  });

  test('applies color from color prop value when it is not a theme color', () => {
    const { container } = renderSampleComponent({ backgroundColor: 'red' });
    expect(container.firstChild).toHaveStyleRule('background-color', 'red');
  });
});

function renderSampleComponent(props: SampleComponentProps = {}): RenderResult {
  return render(<SampleComponent {...props} theme={defaultTheme} />);
}

interface SampleComponentProps {
  fontFamily?: string;
  displayFlex?: boolean;
  backgroundColor?: string;
}

type ThemedSampleComponentProps = ThemedProps<SampleComponentProps>;

const SampleComponent = styled.div<ThemedSampleComponentProps>`
  color: ${primaryColorInterpolation};
  font-family: ${propValueInterpolation('fontFamily', fontFamilyDefaultValue)};
  display: ${booleanPropInterpolation('displayFlex', 'flex')};
  background-color: ${themedPropValueInterpolation('colors', 'backgroundColor', backgroundColorDefaultValue)};
`;
