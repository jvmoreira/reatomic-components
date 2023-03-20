import React, { ReactElement } from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Container } from './container';

export default {
  title: 'Atoms/Container',
  component: Container,
} as ComponentMeta<typeof Container>;

const Template: ComponentStory<typeof Container> = (args): ReactElement => (
  <Container {...args}>Container Content</Container>
);

export const Default = Template.bind({});
Default.args = {
  margin: 'auto',
  padding: '80px 150px',
  width: '500px',
  height: '300px',
  color: 'white',
  background: 'primary',
  border: '5px solid lime',
  borderRadius: '8px',
};
