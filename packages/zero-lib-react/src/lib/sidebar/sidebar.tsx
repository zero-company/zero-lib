'use client'
import { cn, Icon, ZeroLogo } from '@/lib'
import {
  LuSettings,
  LuUserCircle2,
  LuSearch,
  LuList,
  LuHome,
} from 'react-icons/lu'
import { HEADER_SIDEBAR_SIZE, BORDER_COLOR } from '@/lib'

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
        <p className='p-2'>zero-lib</p>
        <div />
      </div>
    </div>
  )
}
