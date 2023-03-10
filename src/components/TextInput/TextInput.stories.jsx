import React from 'react';
import { action } from '@storybook/addon-actions';

import TextInput from './TextInput';

export default {
  title: 'Form/TextInput',
  component: TextInput,
};

const Template = (args) => <TextInput {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: 'Text Input Label',
  value: '',
  onChange: action('text-input-changed'),
};

export const Filled = Template.bind({});
Filled.args = {
  label: 'Text Input Label',
  value: 'Hello, world!',
  onChange: action('text-input-changed'),
};

export const Error = Template.bind({});
Error.args = {
  label: 'Text Input Label',
  value: '',
  onChange: action('text-input-changed'),
  error: 'Please enter a valid value',
};

export const Disabled = Template.bind({});
Disabled.args = {
  label: 'Text Input Label',
  value: '',
  onChange: action('text-input-changed'),
  disabled: true,
};
