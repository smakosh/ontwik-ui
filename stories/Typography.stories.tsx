import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Typography, OntwikProvider } from '../src';
import { TypographyProps } from '../src/interfaces';


const meta: Meta = {
  title: 'Typography',
  component: Typography,
  argTypes: {
    variant: {
      name: 'variant',
      type: { name: 'string', required: false },
      description: 'Typography variant',
      control: {
        type: 'select',
        options: ['title', 'subtitle', 'paragraph', 'content'],
      },
    },
    bold: {
      name: 'bold',
      type: { name: 'boolean', required: false },
      description: 'Typography bold',
      control: {
        type: 'inline-radio',
        options: [true, false],
      },
    },
    align: {
      name: 'align',
      type: { name: 'string', required: false },
      description: 'Typography alignment',
      control: {
        type: 'select',
        options: ['left', 'center', 'right'],
      },
    },
  },
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const Template: Story<TypographyProps> = args => {
  return (
    <OntwikProvider>
      <Typography {...args}>Title</Typography>
    </OntwikProvider>
  );
};

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const Title = Template.bind({});
export const Subtitle = Template.bind({});
export const Paragraph = Template.bind({});
export const Content = Template.bind({});
export const Default = Template.bind({});

Title.args = {
  variant: 'title',
};

Subtitle.args = {
  variant: 'subtitle',
};

Paragraph.args = {
  variant: 'paragraph',
};

Content.args = {
  variant: 'content',
};

Default.args = {};