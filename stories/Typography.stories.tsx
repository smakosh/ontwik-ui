import React, { FC } from 'react';
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

const Template: Story<TypographyProps> = (args) => (
  <OntwikProvider>
    <Typography {...args}>What is Lorem Ipsum?</Typography>
  </OntwikProvider>
);

const SecondaryTemplate: Story<TypographyProps> = (args) => (
  <OntwikProvider>
    <Typography {...args}>
      Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      Lorem Ipsum has been the industry's standard dummy text ever since the
      1500s, when an unknown printer took a galley of type and scrambled it to
      make a type specimen book. It has survived not only five centuries, but
      also the leap into electronic typesetting, remaining essentially
      unchanged. It was popularised in the 1960s with the release of Letraset
      sheets containing Lorem Ipsum passages, and more recently with desktop
      publishing software like Aldus PageMaker including versions of Lorem
      Ipsum.
    </Typography>
  </OntwikProvider>
);

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const Title = Template.bind({});
export const Subtitle = Template.bind({});
export const Paragraph = SecondaryTemplate.bind({});
export const Content = SecondaryTemplate.bind({});
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
