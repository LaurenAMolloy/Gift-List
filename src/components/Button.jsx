import React from 'react'
import classNames from 'classnames'

export default function Button({
  children,
  primary,
  secondary,
  success,
  rounded,
  ...rest
}) {
    const classes = classNames(rest.className, 'flex items-center px-3 py-1.5 border', {
      'border-blue-500 bg-blue-500 text-white': primary,
      'border-gray-500 bg-gray-500 text-white': secondary,
      'border-green-500 bg-green-500 text-white': success,
      'rounded-full': rounded,
    }   
    )

  return (
    <button {...rest} className={classes}>{children}</button>
  )
}
