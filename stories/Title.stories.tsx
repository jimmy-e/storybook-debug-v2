import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';
import { Title as TitleComponent, TitleProps } from './Title';

export default {
  component: TitleComponent,
} as Meta;

export const Title: Story<TitleProps> = (args) => {
  return (
    <>
      <div style={{ display: 'flex', flexDirection: 'column'}}>
        <a href="/?path=/story/title--title">CANVAS</a>
        <a href="/?path=/docs/title--title">DOCS</a>
      </div>
      <TitleComponent label="sample title" {...args} />
    </>
  );
}
