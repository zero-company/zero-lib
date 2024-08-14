'use client'
import { cn, HEADER_SIDEBAR_SIZE } from '@/lib'
import { LuChevronLeft } from 'react-icons/lu'
import { Button } from '@/components/ui/button'

type Props = {
  className?: string
}

export const Header = ({ className }: Props) => {
  return (
    <div
      className={cn('flex divide-x *:h-full', HEADER_SIDEBAR_SIZE.H, className)}
    >
      <Button size='sm' variant='ghost' className='text-lg'>
        <LuChevronLeft />
      </Button>
      <div className='flex-1 p-2'>
        <p>zero-lib</p>
      </div>
    </div>
  )
}
