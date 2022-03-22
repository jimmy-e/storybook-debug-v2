import React from 'react';
import {
  ArgsTable,
  Description,
  Primary,
  Title,
} from '@storybook/addon-docs';
import { Meta, Story } from '@storybook/react/types-6-0';
import { Button, ButtonProps } from './Button';

export const ButtonDocs: Story<ButtonProps> = (args) => <Button {...args} />;

export default {
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  component: Button,
  parameters: {
    docs: {
      page: () => (
        <>
          <Title />
          <Description />
          <Primary name="Button Docs"/>
          <ArgsTable story="^" />
        </>
      ),
    },
  },
  title: 'Example/Button Folder',
} as Meta;

export const ButtonComponent: Story<ButtonProps> = (args) => (
  <>
    <h1>hello world</h1>
    <Button {...args} />
  </>
);
