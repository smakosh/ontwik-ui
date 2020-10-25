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
        options: ['primary', 'secondary', 'ghost']
      }
    },
    size: {
      name: 'size',
      type: { name: 'string', required: false },
      description: 'Button size',
      control: {
        type: 'select',
        options: ['xlarge', 'large', 'medium', 'small' ]
      }
    },
    state: {
      name: 'state',
      type: { name: 'string', required: false },
      description: 'Button state',
      control: {
        type: 'select',
        options: ['success', 'danger', 'warning', false]
      }
    },
    disabled: {
      name: 'disabled',
      type: { name: 'boolean', required: false },
      description: 'Button disabled',
      control: {
        type: 'inline-radio',
        options: [true, false]
      }
    },
    wide: {
      name: 'wide',
      type: { name: 'boolean', required: false },
      description: 'Button wide',
      control: {
        type: 'inline-radio',
        options: [true, false ]
      }
    },
    uppercase: {
      name: 'uppercase',
      type: { name: 'boolean', required: false },
      description: 'Button text uppercase',
      control: {
        type: 'inline-radio',
        options: [true, false ]
      }
    },
    color: {
      name: 'color',
      type: { name: 'string', required: false },
      description: 'Button text color',
      control: {
        type: 'color'
      }
    },
    bg: {
      name: 'bg',
      type: { name: 'string', required: false },
      description: 'Button background color',
      control: {
        type: 'color'
      }
    },
    borderColor: {
      name: 'borderColor',
      type: { name: 'string', required: false },
      description: 'Button border color',
      control: {
        type: 'color'
      }
    },
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
