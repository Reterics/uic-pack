import React, {useState} from 'react'
import {Meta, StoryFn} from '@storybook/react'
import {ContextMenu, ContextMenuEntry, useContextMenu} from './ContextMenu.tsx'
import {BsFloppyFill, BsPencilSquare} from 'react-icons/bs'

export default {
  title: 'Components/ContextMenu',
  component: ContextMenu,
} as Meta

const Template: StoryFn = () => {
  const {x, y, visible, openContextMenu, closeContextMenu} = useContextMenu()
  const [message, setMessage] = useState<string>('')

  const handleContextMenu = (event: React.MouseEvent) => {
    openContextMenu(event)
  }

  const handleClick = (action: string) => {
    setMessage(action)
    closeContextMenu()
  }

  return (
    <div
      onContextMenu={handleContextMenu}
      style={{
        width: '100%',
        height: '200px',
        border: '1px dashed gray',
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <p style={{width: '100%', textAlign: 'center'}}>
        Right-click anywhere inside this box to see the ContextMenu
      </p>
      <ContextMenu x={x} y={y} visible={visible} onClose={closeContextMenu}>
        <ContextMenuEntry
          icon={<BsFloppyFill />}
          onClick={() => handleClick('Action 1')}
        >
          Action 1
        </ContextMenuEntry>
        <ContextMenuEntry
          icon={<BsPencilSquare />}
          onClick={() => handleClick('Action 2')}
        >
          Action 2
        </ContextMenuEntry>
        <ContextMenuEntry onClick={() => handleClick('Action 3')}>
          Action 3
        </ContextMenuEntry>
      </ContextMenu>
      {message && (
        <p style={{marginTop: '1rem', width: '100%'}}>You clicked: {message}</p>
      )}
    </div>
  )
}

export const Default = Template.bind({})
