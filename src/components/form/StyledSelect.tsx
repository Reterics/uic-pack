import React, {CSSProperties, ReactEventHandler} from 'react'
import {StyledSelectOption} from './StyledMultiSelect'

export const stringsToOptions = (
  strings: string[],
  names?: string[]
): StyledSelectOption[] => {
  return strings.map((string, index) => {
    return {value: string, name: names ? names[index] : string}
  })
}

export interface StyledSelectProps {
  value?: string | number | readonly string[]
  onSelect?: ReactEventHandler<HTMLSelectElement>
  type?: string
  name?: string
  label?: string | number | boolean
  options: StyledSelectOption[]
  className?: string,
  style?: CSSProperties,
  compact?: boolean
}

export function StyledSelect({
  value,
  onSelect,
  name,
  label,
  options,
  compact,
  style
}: Readonly<StyledSelectProps>) {
  return (
    <div
      className={
        compact
          ? 'w-full group flex flex-row items-center justify-between'
          : 'relative z-0 w-full group'
      }
      style={style}
    >
      {label !== false && (
        <label
          htmlFor={name}
          className={
            compact
              ? 'block mr-1 text-sm font-medium text-left text-gray-700 dark:text-gray-300'
              : 'block mb-1 text-sm font-medium text-left text-gray-700 dark:text-gray-300'
          }
        >
          {label || name}
        </label>
      )}
      <select
        name={name}
        id={name}
        value={value}
        onChange={onSelect}
        className={
          (compact ? 'px-2 py-1.5 w-fit' : 'px-3 py-2 w-full') +
          ' block text-sm text-gray-900 bg-white border border-gray-300 rounded-md shadow-sm' +
          ' focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700' +
          ' dark:text-white dark:border-gray-600 dark:focus:ring-blue-500 dark:focus:border-blue-500'
        }
        required
      >
        {options.map((option, index) => (
          <option key={`${name}_${option.value}_${index}`} value={option.value}>
            {option.name}
          </option>
        ))}
      </select>
    </div>
  )
}
