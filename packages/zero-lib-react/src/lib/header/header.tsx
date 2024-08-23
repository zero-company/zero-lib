'use client'
import { cn, HEADER_SIDEBAR_SIZE, ZeroLogo, Icon } from '@/lib'
import { LuChevronLeft, LuChevronRight } from 'react-icons/lu'
import { Button } from '@/components/ui/button'

type Props = {
  className?: string
  header?: React.ReactNode
}

export const Header = ({ className, header }: Props) => {
  return (
    <div
      id='Header'
      className={cn('flex flex-1 *:h-full', HEADER_SIDEBAR_SIZE.H, className)}
    >
      <Icon
        reactIcon={<ZeroLogo />}
        className='-mr-2'
        hoverBrightness={false}
      />
      {header || (
        <div className='flex-1 p-2'>
          <p>zero-lib</p>
        </div>
      )}
    </div>
  )
}
