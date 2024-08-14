'use client'
import { cn, HEADER_SIDEBAR_SIZE } from '@/lib'

type Props = {
  className?: string
}

export const Header = ({ className }: Props) => {
  return (
    <div className={cn(HEADER_SIDEBAR_SIZE.H, className)}>
      <p className='p-2'>zero-lib</p>
    </div>
  )
}
