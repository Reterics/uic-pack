export const windowClasses = `
    text-sm
    border border-gray-400
    shadow-lg
    bg-gray-50
    text-gray-500 dark:text-gray-400
  `

export const titleBarClasses = `
    border-b border-gray-300
    cursor-move
    select-none
    text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400
  `

export const buttonBaseClasses = `
    px-4 py-2 text-sm font-medium text-gray-900
    bg-white border-gray-200 
    hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2
    focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800
    dark:border-gray-700 dark:text-white dark:hover:text-white
    dark:hover:bg-gray-700 dark:focus:ring-blue-500 dark:focus:text-white
`

export const buttonClasses = `
    border rounded-md ${buttonBaseClasses}
`

export const groupedButtonLeftClasses = `
    border rounded-s-md ${buttonBaseClasses}
`

export const groupedButtonMiddleClasses = `
    border-t border-b border-r ${buttonBaseClasses}
`

export const groupedButtonRightClasses = `
    border rounded-e-md ${buttonBaseClasses}
`
