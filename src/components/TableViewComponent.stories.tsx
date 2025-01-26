import React, {useState, ChangeEvent} from 'react'
import {Meta, StoryFn} from '@storybook/react'
import {TableViewComponent, TableViewActions} from './TableViewComponent.tsx'

export default {
  title: 'Components/TableViewComponent',
} as Meta

const demoTableData = new Array(10).fill(null).map((_d, i) => ({
  id: (i + 1).toString(),
  name: 'Name ' + (i + 1),
  highlighted: i === 3,
  amount: 400 + i,
  date: new Date(),
}))

const Template: StoryFn = () => {
  const tableLines = demoTableData.map(item => {
    const lineArray = [
      item.id,
      item.name,
      item.amount,
      item.date.toISOString().split('T')[0],
      TableViewActions({
        onRemove: () => null,
        onEdit: () => null,
        onPrint: () => null,
        onSave: () => null,
      }),
    ]

    lineArray[-1] = item.highlighted ? 1 : 0

    return lineArray
  })
  console.error(tableLines, demoTableData)
  return (
    <div className='w-full h-dvh'>
      <TableViewComponent
        lines={tableLines}
        isHighlighted={item => {
          return !!item[-1]
        }}
        header={[
          'ID',
          {
            value: 'Name',
            type: 'text',
            sortable: true,
            editable: true,
          },
          {
            value: 'Amount',
            type: 'number',
            sortable: true,
            editable: true,
          },
          {
            value: 'Date',
            type: 'text',
          },
          'Actions',
        ]}
        onChange={(_index, _col, _value) => null}
      />
    </div>
  )
}

export const Default = Template.bind({})
