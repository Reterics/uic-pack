import React from 'react'
import {Meta, StoryFn} from '@storybook/react'
import {StyledInput, StyledInputProps} from './StyledInput.tsx'

export default {
  title: 'Components/StyledInput',
  component: StyledInput,
} as Meta

const Template: StoryFn<StyledInputProps> = (args: StyledInputProps) => (
  <StyledInput {...args} />
)

export const Default = Template.bind({})
Default.args = {
  label: 'Username',
  placeholder: 'Enter your username',
}

export const Email = Template.bind({})
Email.args = {
  label: 'Email',
  type: 'email',
  placeholder: 'john@example.com',
}

export const WithPattern = Template.bind({})
WithPattern.args = {
  label: 'Zip Code',
  pattern: '\\d{5}',
  placeholder: '12345',
}
