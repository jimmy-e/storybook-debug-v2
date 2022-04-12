import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';
import { Button as ButtonComponent, ButtonProps } from './Button';

export default {
  component: ButtonComponent,
} as Meta;

export const Button: Story<ButtonProps> = (args) => <ButtonComponent {...args} />;
