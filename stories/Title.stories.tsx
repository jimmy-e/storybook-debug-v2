import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';
import { Title as TitleComponent, TitleProps } from './Title';
import { LinkTo, linkTo } from '@storybook/addon-links';

export default {
  component: TitleComponent,
} as Meta;

export const Title: Story<TitleProps> = (args) => {
  console.log('*******');
  console.log(window.location);
  console.log('*******');
  return (
    <>
      <div style={{ display: 'flex', flexDirection: 'column'}}>
        <a href="/?path=/story/title--title" onClick={(event) => event.preventDefault()}>LINK</a>
        <a href="/?path=/docs/title--title" onClick={(event) => event.preventDefault()}>DOCS</a>
        <button onClick={() => window.location.replace('http://localhost:6006/?path=/story/title--title')}>LINK</button>
        <button onClick={() => window.location.replace('http://localhost:6006/?path=/docs/title--title')}>DOCS</button>
        <a href="/?path=/story/title--title" onClick={() => 'return false;'}>LINK</a>
        <a href="/?path=/docs/title--title" onClick={() => 'return false;'}>DOCS</a>
        <a href="/?path=/story/title--title">LINK</a>
        <a href="/?path=/docs/title--title">DOCS</a>
      </div>
      <LinkTo story="Button">Click THIS Me</LinkTo>
      <button onClick={() => linkTo('Button')}>Click Me</button>
      <h1>foo bar</h1>
      <TitleComponent label="sample title" {...args} />
    </>
  );
}
