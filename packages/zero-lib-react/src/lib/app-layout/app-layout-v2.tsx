'use client'
import {
  cn,
  Sidebar,
  Header,
  BORDER_COLOR,
  HEADER_SIDEBAR_SIZE,
  Icon,
  SidebarTabsProps,
} from '@/lib'
import { LuMenu } from 'react-icons/lu'
import { Button } from '@/components/ui/button'
import { useState } from 'react'

type Props = {
  sidebar?: React.ReactNode
  header?: React.ReactNode
  page?: React.ReactNode
  body?: React.ReactNode
}

export const AppLayoutV2 = ({ header, sidebar, body }: Props) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  return (
    <div
      id='AppLayoutV2'
      className='flex divide-x w-screen h-screen bg-zinc-900 text-zinc-400 text-xs leading-none overflow-clip'
    >
      <div
        className={cn(
          'transition-all w-screen sm:w-64 divide-y flex flex-col shrink-0',
          !isSidebarOpen && '-ml-[100vw] sm:ml-0',
        )}
      >
        <div className='flex divide-x'>
          <Button
            size='sm'
            variant='ghost'
            className={cn(HEADER_SIDEBAR_SIZE.SIZE)}
            onClick={() => setIsSidebarOpen(false)}
          >
            <Icon reactIcon={<LuMenu />} />
          </Button>
          <Header header={header} />
        </div>
        {sidebar}
        <div />
      </div>

      <div
        className={cn(
          'flex-1 flex flex-col divide-y sm:-mt-px w-screen shrink-0',
          BORDER_COLOR,
        )}
      >
        <div className='flex sm:hidden divide-x'>
          <Button
            size='sm'
            variant='ghost'
            className={cn(HEADER_SIDEBAR_SIZE.SIZE)}
            onClick={() => setIsSidebarOpen(true)}
          >
            <Icon reactIcon={<LuMenu />} />
          </Button>
          <Header header={header} />
        </div>

        {body}
        <div />
      </div>
    </div>
  )
}
