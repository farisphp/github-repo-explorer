import React from 'react'
import cn from 'classnames'
import { ImSpinner2 } from 'react-icons/im'

function Spinner({ className }: React.HTMLAttributes<HTMLDivElement>) {
  return <ImSpinner2 className={cn('animate-spin', className)} />
}

export default Spinner
