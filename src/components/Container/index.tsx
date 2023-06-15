import React from 'react'
import cn from 'classnames'

function Container({
  children,
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn('mx-auto px-3 xl:px-0 max-w-5xl', className)} {...props}>
      {children}
    </div>
  )
}

export default Container
