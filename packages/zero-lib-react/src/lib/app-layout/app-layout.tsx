'use client'
import {
  cn,
  Sidebar,
  Header,
  BORDER_COLOR,
  HEADER_SIDEBAR_SIZE,
  Icon,
  ZeroLogo,
  SidebarTabsProps,
} from '@/lib'
import { LuChevronLeft, LuChevronRight } from 'react-icons/lu'
import { Button } from '@/components/ui/button'
import { useState } from 'react'

type Props = {
  sidebar?: React.ReactNode
  header?: React.ReactNode
  page?: React.ReactNode
  body?: React.ReactNode
  sidebarTabs?: SidebarTabsProps
}

export const AppLayout = ({ header, sidebar, body, sidebarTabs }: Props) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  return (
    <div
      id='AppLayout'
      className='flex divide-x w-screen h-screen bg-zinc-900 text-zinc-400 text-xs leading-none overflow-clip'
    >
      <div>
        <Sidebar
          className='w-screen sm:w-64'
          tabs={sidebarTabs}
          header={
            <div className='flex divide-x'>
              <Header header={header} />
              <Button
                size='sm'
                variant='ghost'
                className={cn('text-lg sm:hidden', HEADER_SIDEBAR_SIZE.SIZE)}
                onClick={() => setIsSidebarOpen(false)}
              >
                <LuChevronRight />
              </Button>
            </div>
          }
        />
      </div>

      <div
        className={cn('flex-1 flex flex-col divide-y sm:-mt-px', BORDER_COLOR)}
      >
        <div className='flex sm:hidden divide-x'>
          <Button
            size='sm'
            variant='ghost'
            className={cn('text-lg', HEADER_SIDEBAR_SIZE.SIZE)}
            onClick={() => setIsSidebarOpen(true)}
          >
            <LuChevronLeft />
          </Button>
          <Header header={header} />
        </div>

        {body}
        <div />
      </div>
    </div>
  )
}
