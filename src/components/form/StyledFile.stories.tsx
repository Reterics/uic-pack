import React, {useState} from 'react'
import {Meta, StoryFn} from '@storybook/react'
import {StyledFile, StyledFileProps} from './StyledFile.js'

export default {
  title: 'Components/StyledFile',
  component: StyledFile,
} as Meta

const Template: StoryFn<StyledFileProps> = args => {
  const [file, setFile] = useState<File | null>(null)

  return (
    <>
      <StyledFile
        {...args}
        onChange={selectedFile => {
          setFile(selectedFile)
          console.log('File chosen:', selectedFile)
        }}
      />
      {file && <p>File name: {file.name}</p>}
    </>
  )
}

export const Default = Template.bind({})
Default.args = {
  name: 'exampleFile',
  label: 'Upload Image',
  preview: true,
  accept: 'image/*',
}
