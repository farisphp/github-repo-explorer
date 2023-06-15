import React from 'react'
import cn from 'classnames'
import Spinner from 'components/Spinner'

function Button({
  children,
  isLoading
}: React.PropsWithChildren & { isLoading?: boolean }) {
  return (
    <button
      className="-ml-0.5 h-full rounded-e-lg bg-black py-2.5 pr-5 text-white disabled:opacity-50 sm:pl-5 sm:pr-10"
      disabled={isLoading}
    >
      <span className="flex items-center">
        <Spinner className={cn('mr-1 h-0', { 'h-auto': isLoading })} />
        {children}
      </span>
    </button>
  )
}

export default Button
