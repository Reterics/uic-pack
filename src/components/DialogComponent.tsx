import React, {MouseEventHandler, useRef} from 'react'
import {DraggableDiv} from './DraggableDiv'
import {BsXLg} from 'react-icons/bs'
import {titleBarClasses, windowClasses} from '../twStyles'

export const controlButtonClasses = `
    w-6 h-6 flex items-center justify-center
    hover:bg-gray-200
    cursor-pointer p-1
  `

interface DialogButtonProps {
  children?: React.ReactNode | string
  onClick?: MouseEventHandler<HTMLButtonElement>
}

export function DialogButton({children, onClick}: DialogButtonProps) {
  return (
    <button
      type='button'
      onClick={onClick}
      className='w-full border border-zinc-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-2.5 py-2.5 text-center bg-primary-600 hover:bg-primary-700 focus:ring-primary-800'
    >
      {children}
    </button>
  )
}

export interface DialogComponentProps {
  title?: string
  children?: React.ReactNode | string
  onClose?: (value: boolean | HTMLDivElement | null) => void
  buttons?: DialogButtonProps[]
}

export function DialogComponent({
  title,
  children,
  onClose,
  buttons,
}: DialogComponentProps) {
  const dialogRef = useRef<HTMLDivElement>(null)
  const posRef = useRef<{x: number; y: number}>({
    x: window.innerWidth / 2 - 140,
    y: window.innerHeight / 4,
  })

  return (
    <DraggableDiv
      ref={dialogRef}
      pos={posRef}
      handle='.title-bar'
      className='confirmation-modal'
    >
      <div className={windowClasses + ' flex flex-col w-full h-full min-w-80'}>
        <div
          className={`title-bar flex items-center justify-between ${titleBarClasses}`}
        >
          <div className='flex items-center space-x-2 ml-1'>
            <span className='font-bold text-sm'>{title ?? 'Confirmation'}</span>
          </div>
          <div className='flex items-center'>
            <button
              className={controlButtonClasses}
              onClick={() => onClose && onClose(false)}
              title='Close'
            >
              <BsXLg />
            </button>
          </div>
        </div>

        <div className='flex flex-1 overflow-auto p-2'>{children}</div>
        {buttons && buttons.map(button => <DialogButton {...button} />)}
      </div>
    </DraggableDiv>
  )
}
