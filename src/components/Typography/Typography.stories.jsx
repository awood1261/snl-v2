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
  <Typography {...args} variant="heading" element="h1" children="Heading Text" />
);
HeadingTypography.storyName = 'Heading Typography';

export const SubHeadingTypography = () => (
  <Typography {...args} variant="subheading" element="h2" children="Subheading Text" />
);
SubHeadingTypography.storyName = 'Subheading Typography';

export const BodyTypography = () => (
  <Typography {...args} variant="body" element="p" children="Body Text" />
);
BodyTypography.storyName = 'Body Typography';

export const CaptionTypography = () => (
  <Typography {...args} variant="caption" element="span" children="Caption Text" />
);
CaptionTypography.storyName = 'Caption Typography';

export const ButtonTypography = () => (
  <Typography {...args} variant="button" element="button" children="Button Text" />
);
ButtonTypography.storyName = 'Button Typography';

export const LinkTypography = () => (
  <Typography {...args} variant="link" element="a" children="Link Text" />
);
LinkTypography.storyName = 'Link Typography';
