'use client'
import { cn, HEADER_SIDEBAR_SIZE, ZeroLogo, Icon } from '@/lib'
import { Button } from '@/components/ui/button'

type Props = {
  className?: string
  header?: React.ReactNode
}

export const Header = ({ className, header }: Props) => {
  return (
    <div
      id='Header'
      className={cn(
        'flex flex-1 *:h-full divide-x text-xs',
        HEADER_SIDEBAR_SIZE.H,
        className,
      )}
    >
      <div className='flex-1'>
        {header || (
          <div className='p-2'>
            <p>zero-lib</p>
          </div>
        )}
      </div>
    </div>
  )
}
