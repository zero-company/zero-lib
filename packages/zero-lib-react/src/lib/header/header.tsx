'use client'
import { cn, HEADER_SIDEBAR_SIZE, ZeroLogo, Icon } from '@/lib'
import { Button } from '@/components/ui/button'
import { usePathname } from 'next/navigation'

type Props = {
  className?: string
  header?: React.ReactNode
  title?: string
  subtitle?: string
}

export const Header = ({ className, header, title, subtitle }: Props) => {
  const pathname = usePathname()

  return (
    <div
      className={cn(
        'flex flex-1 *:h-full divide-x text-xs',
        HEADER_SIDEBAR_SIZE.H,
        className,
      )}
    >
      <div className='flex-1'>
        {header || (
          <div className='p-1'>
            <p className='tracking-wider'>{title || pathname.substring(1)}</p>
            <p className='tracking-wider text-muted-foreground'>
              {subtitle || '----'}
            </p>
          </div>
        )}
      </div>
    </div>
  )
}
