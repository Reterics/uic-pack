import React from 'react'
import {Meta, StoryFn} from '@storybook/react'
import {DialogComponent, DialogComponentProps} from './DialogComponent.tsx'

export default {
  title: 'Components/DialogComponent',
  component: DialogComponent,
} as Meta

const Template: StoryFn<DialogComponentProps> = args => (
  <DialogComponent {...args} />
)

export const Default = Template.bind({})
Default.args = {
  open: true,
  title: 'Sample Dialog',
  children: 'This is a sample dialog content.',
}
