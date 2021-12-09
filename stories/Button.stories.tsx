import React from 'react';
import {
  ArgsTable,
  Description,
  Primary,
  Title,
} from '@storybook/addon-docs';
import { Meta, Story } from '@storybook/react/types-6-0';
import { Button as ButtonComponent, ButtonProps } from './Button';

export default {
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  component: ButtonComponent,
  parameters: {
    docs: {
      page: () => (
        <>
          <Title />
          <Description />
          <Primary />
          <ArgsTable />
        </>
      ),
    },
  },
  title: 'Example/Button',
} as Meta;

export const ButtonParentComponent: Story<ButtonProps> = (args) => (
  <>
    <h1>hello world</h1>
    <ButtonComponent {...args} />
  </>
);
