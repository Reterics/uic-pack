import React, {useState, useEffect, useRef} from 'react'

export interface MenuBarItem {
  name?: string
  label: string
  icon?: React.ReactNode
  onClick?: (item: MenuBarItem) => void
  separator?: boolean
  items?: MenuBarItem[]
  className?: string
}

export interface MenuBarProps {
  model: MenuBarItem[]
}

export function MenuBar({model}: Readonly<MenuBarProps>) {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)
  const outsideRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (
        outsideRef.current &&
        !outsideRef.current.contains(e.target as HTMLElement)
      ) {
        setOpenDropdown(null)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  const handleMenuClick = (item: MenuBarItem) => {
    if (typeof item.onClick === 'function') {
      item.onClick(item)
    }
    if (!item.items) {
      setOpenDropdown(null)
    }
  }

  const toggleDropdown = (itemLabel?: string) => {
    const label = itemLabel ?? null
    setOpenDropdown(prev => (prev === label ? null : label))
  }

  return (
    <div
      ref={outsideRef}
      className='flex items-center space-x-4 h-full w-full bg-zinc-100 text-zinc-900'
    >
      {model.map(item => {
        const hasDropdown = item.items && Array.isArray(item.items)

        if (item.separator) {
          return (
            <div key='separator' className='w-px h-4 bg-zinc-300 mx-2'></div>
          )
        }

        return (
          <div className='relative' key={item.label}>
            <button
              onClick={() =>
                hasDropdown ? toggleDropdown(item.label) : handleMenuClick(item)
              }
              className={`text-sm font-medium hover:bg-zinc-200 px-2 py-1 rounded transition-colors ${
                item.className ?? ''
              }`}
            >
              {item.icon} {item.icon ? <div className='mr-2'></div> : undefined}
              {item.label}
            </button>
            {hasDropdown && openDropdown === item.label && (
              <div className='absolute left-0 top-full mt-1 w-32 bg-zinc-100 border border-zinc-300 rounded shadow z-50'>
                <ul className='flex flex-col'>
                  {item.items?.map((subItem, index) => {
                    if (subItem.separator) {
                      return (
                        <li
                          key='sub_separator'
                          className='border-t border-zinc-300 my-1'
                        ></li>
                      )
                    }
                    return (
                      <li
                        key={subItem.label ?? index}
                        onClick={() => handleMenuClick(subItem)}
                        className='hover:bg-zinc-200 px-2 pt-2 pb-1 cursor-pointer text-sm flex items-center'
                      >
                        {subItem.icon ? (
                          <div className='pe-1'>{subItem.icon}</div>
                        ) : undefined}
                        {subItem.label}
                      </li>
                    )
                  })}
                </ul>
              </div>
            )}
          </div>
        )
      })}
    </div>
  )
}
