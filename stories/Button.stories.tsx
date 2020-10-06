import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Button, OntwikProvider } from '../src';
import {ButtonProps} from '../src/interfaces'

const meta: Meta = {
  title: 'Button',
  component: Button,
  argTypes: {
    variant: {
      name: 'variant',
      type: { name: 'string', required: false },
      description: 'Button variant',
      control: {
        type: 'select',
        options: ['primary', 'secondary', 'cta', 'blank']
      }
    },
    size: {
      name: 'Size',
      type: { name: 'string', required: false },
      description: 'Button size',
      control: {
        type: 'select',
        options: ['xlarge', 'large', 'medium', 'small' ]
      }
    },
    state: {
      name: 'State',
      type: { name: 'string', required: false },
      description: 'Button state',
      control: {
        type: 'inline-radio',
        options: ['success', 'danger', 'warning', false]
      }
    },
    disabled: {
      name: 'Disabled',
      type: { name: 'boolean', required: false },
      description: 'Button disabled',
      control: {
        type: 'inline-radio',
        options: [true, false]
      }
    }
  },
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const Template: Story<ButtonProps> = args => <OntwikProvider>
  <Button {...args}>Primary</Button>
</OntwikProvider>;

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const Default = Template.bind({});

Default.args = {
  variant: 'primary',
  size: 'large'
};
