import React from 'react';
import Button from './Button';

export default {
  title: 'Actions/Button',
  component: Button,
  argTypes: {
    size: {
      options: ['small', 'medium', 'large'],
      control: { type: 'radio' },
    },
    style: {
      options: ['primary', 'secondary', 'tertiary'],
      control: { type: 'select' },
    },
    url: {
      control: { type: 'text' },
    },
    isDisabled: {
      control: { type: 'boolean' },
    },
    text: {
      control: { type: 'text' },
    },
  },
};

const args = {
  size: 'medium',
  style: 'primary',
  url: '',
  isDisabled: false,
  text: 'Button',
};

export const SmallPrimaryButton = () => (
  <Button {...args} size="small" style="primary" text="Click me!" />
);
SmallPrimaryButton.storyName = 'Small Primary Button';

export const MediumSecondaryButton = () => (
  <Button {...args} size="medium" style="secondary" text="Save" />
);
MediumSecondaryButton.storyName = 'Medium Secondary Button';

export const LargeTertiaryButton = () => (
  <Button {...args} size="large" style="tertiary" text="Cancel" />
);
LargeTertiaryButton.storyName = 'Large Tertiary Button';

export const SmallPrimaryLink = () => (
  <Button {...args} size="small" style="primary" url="https://google.com" text="Google" />
);
SmallPrimaryLink.storyName = 'Small Primary Link';

export const MediumDisabledButton = () => (
  <Button {...args} size="medium" style="primary" isDisabled text="Click me!" />
);
MediumDisabledButton.storyName = 'Medium Disabled Button';
