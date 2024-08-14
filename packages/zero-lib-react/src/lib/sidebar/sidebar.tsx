'use client'
import { cn, Icon, ZeroLogo, HEADER_SIDEBAR_SIZE, BORDER_COLOR } from '@/lib'
import {
  LuSettings,
  LuUserCircle2,
  LuSearch,
  LuList,
  LuHome,
  LuChevronRight,
} from 'react-icons/lu'
import { Button } from '@/components/ui/button'

type Props = {
  className?: string
}

export const Sidebar = ({ className }: Props) => {
  return (
    <div className={cn('w-64 flex divide-x', className)}>
      <div
        className={cn(
          'flex flex-col w-10',
          HEADER_SIDEBAR_SIZE.W,
          BORDER_COLOR,
        )}
      >
        <Icon reactIcon={<ZeroLogo />} />
        <Icon reactIcon={<LuHome />} />
        <Icon reactIcon={<LuList />} />
        <div className='flex-1' />
        <Icon reactIcon={<LuSearch />} />
        <Icon reactIcon={<LuUserCircle2 />} />
        <Icon reactIcon={<LuSettings />} />
      </div>

      <div className={cn('flex-1 flex flex-col divide-y')}>
        <div className={cn('flex divide-x *:h-full', HEADER_SIDEBAR_SIZE.H)}>
          <div className='flex-1 p-2'>
            <p>zero-lib</p>
          </div>
          <Button size='sm' variant='ghost' className='sm:hidden'>
            <LuChevronRight />
          </Button>
        </div>

        <div />
      </div>
    </div>
  )
}
