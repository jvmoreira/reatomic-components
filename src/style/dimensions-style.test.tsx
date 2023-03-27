import React  from 'react';
import styled, { CSSProperties } from 'styled-components';
import { render, RenderResult } from '@testing-library/react';
import { dimensionsStyle, DimensionsStyleProps } from './dimensions-style';

const rulesProvider: Array<[string, keyof DimensionsStyleProps]> = [
  ['width', 'width'],
  ['height', 'height'],
  ['min-width', 'minWidth'],
  ['min-height', 'minHeight'],
  ['max-width', 'maxWidth'],
  ['max-height', 'maxHeight'],
];

const valuesProvider: Array<CSSProperties['width' | 'height']> = [
  'inherit', '0', '100px', '50%', '100%',
];

describe.each(rulesProvider)('%s rule', (cssRule, propName) => {
  test.each([undefined, ''])(`does not apply ${cssRule} rule when prop ${propName} is %p`, (value) => {
    const { container } = renderSampleComponent({ [propName]: value });
    expect(container.firstChild).not.toHaveStyleRule(cssRule);
  });

  test.each(valuesProvider)(`applies ${cssRule} value %p from prop ${propName}`, (value) => {
    const { container } = renderSampleComponent({ [propName]: value });
    expect(container.firstChild).toHaveStyleRule(cssRule, value);
  });
});

function renderSampleComponent(props: DimensionsStyleProps = {}): RenderResult {
  return render(<SampleComponent {...props} />);
}

const SampleComponent = styled.div<DimensionsStyleProps>`
  ${dimensionsStyle};
`;
