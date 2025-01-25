import React from 'react'
import {Meta, StoryFn} from '@storybook/react'
import {StyledSelect, StyledSelectProps} from './StyledSelect.tsx'
import {StyledSelectOption} from './StyledMultiSelect.tsx'

export default {
  title: 'Components/StyledSelect',
  component: StyledSelect,
} as Meta

const demoOptions: StyledSelectOption[] = [
  {name: 'Option 1', value: 'option1'},
  {name: 'Option 2', value: 'option2'},
  {name: 'Option 3', value: 'option3'},
]

const Template: StoryFn<StyledSelectProps> = args => <StyledSelect {...args} />

export const Default = Template.bind({})
Default.args = {
  label: 'Simple Select',
  name: 'simpleSelect',
  options: demoOptions,
  value: 'option1',
  onSelect: e => console.log('Selected:', e.currentTarget.value),
}
