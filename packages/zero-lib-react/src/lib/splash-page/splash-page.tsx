'use client'
import { ZeroLogo } from '../zero/zero-logo'
import { cn } from '@/lib'

type Props = {
  className?: string
}

export const SplashPage = ({ className }: Props) => {
  return (
    <div
      className={cn(
        'flex-1 flex flex-col justify-center items-center',
        className,
      )}
    >
      <ZeroLogo className='size-24 text-white mb-4 m-auto' />
    </div>
  )
}
