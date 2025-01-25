import React from 'react'
import {Meta, StoryFn} from '@storybook/react'
import {
  StyledMultiSelect,
  StyledMultiSelectProps,
  StyledSelectOption,
} from './StyledMultiSelect.tsx'

export default {
  title: 'Components/StyledMultiSelect',
  component: StyledMultiSelect,
} as Meta

const demoOptions: StyledSelectOption[] = [
  {name: 'Option A', value: 'optionA'},
  {name: 'Option B', value: 'optionB'},
  {name: 'Option C', value: 'optionC'},
]

const Template: StoryFn<StyledMultiSelectProps> = args => (
  <StyledMultiSelect {...args} />
)

export const Default = Template.bind({})
Default.args = {
  label: 'Select Options',
  name: 'multiSelectExample',
  options: demoOptions,
  value: [],
  onSelect: selected => console.log('Selected: ', selected),
}
