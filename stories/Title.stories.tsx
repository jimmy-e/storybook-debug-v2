import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';
import { Title as TitleComponent, TitleProps } from './Title';

export default {
  component: TitleComponent,
} as Meta;

export const Title: Story<TitleProps> = (args) => <TitleComponent label="sample title" {...args} />;
