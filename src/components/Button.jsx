import React from 'react'
import classNames from 'classnames'
import { GoSync } from 'react-icons/go'

export default function Button({
  children,
  primary,
  secondary,
  success,
  rounded,
  loading,
  ...rest
}) {
    const classes = classNames(rest.className, 'flex items-center px-3 py-1.5 border', {
      'opacity': loading,
      'border-blue-500 bg-blue-500 text-white': primary,
      'border-gray-500 bg-gray-500 text-white': secondary,
      'border-green-500 bg-green-500 text-white': success,
      'rounded-full': rounded,
    }   
    )

  return (
    <button {...rest} disabled={loading} className={classes}>
      {loading ? <GoSync className="animateSpin"/>: children}
      </button>
  )
}
