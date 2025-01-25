import React, {useState, ChangeEvent} from 'react'
import {Meta, StoryFn} from '@storybook/react'

import {FormRow} from './FormRow.tsx'
import {StyledInput} from './StyledInput.tsx'
import {StyledSelect} from './StyledSelect.tsx'
import {StyledMultiSelect, StyledSelectOption} from './StyledMultiSelect.tsx'
import {StyledFile} from './StyledFile.js'

export default {
  title: 'Components/FormRow',
} as Meta

const Template: StoryFn = () => {
  const [inputValue, setInputValue] = useState('')
  const [selectValue, setSelectValue] = useState('option1')
  const [multiValue, setMultiValue] = useState<string[]>([])
  const [file, setFile] = useState<File | null>(null)

  const multiOptions: StyledSelectOption[] = [
    {name: 'Option A', value: 'optionA'},
    {name: 'Option B', value: 'optionB'},
    {name: 'Option C', value: 'optionC'},
  ]

  return (
    <form className='space-y-4 max-w-sm'>
      <FormRow>
        <StyledInput
          label='Your Name'
          name='exampleName'
          value={inputValue}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setInputValue(e.target.value)
          }
        />
        <StyledSelect
          label='Pick One'
          name='exampleSelect'
          value={selectValue}
          onSelect={e => setSelectValue(e.currentTarget.value)}
          options={[
            {name: 'Option 1', value: 'option1'},
            {name: 'Option 2', value: 'option2'},
            {name: 'Option 3', value: 'option3'},
          ]}
        />
      </FormRow>

      <FormRow>
        <StyledMultiSelect
          label='Multi-Select'
          name='exampleMulti'
          value={multiValue}
          onSelect={vals => setMultiValue(vals)}
          options={multiOptions}
        />
        <StyledFile
          name='exampleFile'
          label='Upload File'
          preview
          accept='image/*'
          onChange={selectedFile => setFile(selectedFile)}
        />
      </FormRow>
      {file && <p>Chosen file: {file.name}</p>}
    </form>
  )
}

export const Default = Template.bind({})
