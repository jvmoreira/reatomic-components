import React, { ReactElement } from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Default as DefaultContainer } from '../container/container.stories';
import { FlexContainer } from './flex-container';

export default {
  title: 'Atoms/FlexContainer',
  component: FlexContainer,
} as ComponentMeta<typeof FlexContainer>;

const Template: ComponentStory<typeof FlexContainer> = (args): ReactElement => (
  <FlexContainer {...args}>
    <div>Flex Item 1</div>
    <div>Flex Item 2</div>
    <div>Flex Item 3</div>
  </FlexContainer>
);

export const Row = Template.bind({});
Row.args = {
  ...DefaultContainer.args,
  padding: 0,
  flexFlow: 'row nowrap',
  gap: '30px',
  justifyContent: 'center',
  alignItems: 'center',
};

export const Column = Template.bind({});
Column.args = {
  ...DefaultContainer.args,
  padding: 0,
  flexFlow: 'column nowrap',
  gap: '30px',
  justifyContent: 'center',
  alignItems: 'center',
};
