'use client'
import {
  cn,
  Header,
  BORDER_COLOR,
  HEADER_SIDEBAR_SIZE,
  Icon,
  ZeroLogo,
} from '@/lib'
import { LuPanelLeftOpen, LuPanelLeftClose } from 'react-icons/lu'
import { Button } from '@/components/ui/button'
import { useState } from 'react'

type Props = {
  sidebar?: React.ReactNode
  header?: React.ReactNode
  footer?: React.ReactNode
  page?: React.ReactNode
  body?: React.ReactNode
}

export const AppLayoutV2 = ({ header, footer, sidebar, body }: Props) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  return (
    <div
      id='AppLayoutV2'
      className='flex divide-x w-screen h-screen leading-none overflow-clip'
    >
      <div
        className={cn(
          'transition-all w-screen sm:w-64 divide-y flex flex-col shrink-0 overflow-y-auto',
          !isSidebarOpen && '-ml-[100vw] sm:ml-0',
        )}
      >
        <div className='flex divide-x'>
          <Button
            size='sm'
            variant='ghost'
            className={cn(HEADER_SIDEBAR_SIZE.SIZE, 'flex sm:hidden')}
            onClick={() => setIsSidebarOpen(false)}
          >
            <Icon reactIcon={<LuPanelLeftClose />} />
          </Button>
          <Header header={header} />
          <Icon reactIcon={<ZeroLogo />} />
        </div>
        {sidebar}
        <div className='flex-1' />
        {footer}
      </div>

      <div
        className={cn(
          'flex-1 flex flex-col divide-y sm:-mt-px w-screen min-w-[100vw] sm:min-w-0 shrink-0',
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
            <Icon reactIcon={<LuPanelLeftOpen />} />
          </Button>
          <Header header={header} />
          <Icon reactIcon={<ZeroLogo />} />
        </div>
        <div className='overflow-y-auto'>{body}</div>
      </div>
    </div>
  )
}
