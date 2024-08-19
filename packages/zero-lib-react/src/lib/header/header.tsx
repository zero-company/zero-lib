'use client'
import { cn, HEADER_SIDEBAR_SIZE } from '@/lib'
import { LuChevronLeft, LuChevronRight } from 'react-icons/lu'
import { Button } from '@/components/ui/button'

type Props = {
  className?: string
  header?: React.ReactNode
}

export const Header = ({ className, header }: Props) => {
  return (
    <div
      className={cn(
        'flex flex-1 divide-x *:h-full',
        HEADER_SIDEBAR_SIZE.H,
        className,
      )}
    >
      {header || (
        <div className='flex-1 p-2'>
          <p>zero-lib</p>
        </div>
      )}
    </div>
  )
}
