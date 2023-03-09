import React from 'react';
import Typography from './Typography';

export default {
  title: 'Display/Typography',
  component: Typography,
  argTypes: {
    variant: {
      options: ['heading', 'subheading', 'body', 'caption', 'button', 'link'],
      control: { type: 'select' },
    },
    element: {
      control: { type: 'text' },
    },
    children: {
        control: { type: 'text' }
    }
  },
};

const args = {
  variant: 'body',
  element: 'p',
  children: 'Typography text'
};

export const HeadingTypography = () => (
  <Typography {...args} variant="heading" element="h1" children="Click me!" />
);
HeadingTypography.storyName = 'Heading Typography';
