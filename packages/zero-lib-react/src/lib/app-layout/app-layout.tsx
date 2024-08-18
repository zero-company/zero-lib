'use client'

import { cn, Sidebar, Header, BORDER_COLOR, Icon, ZeroLogo } from '@/lib'

type Props = {
  sidebar?: React.ReactNode
  header?: React.ReactNode
  page?: React.ReactNode
  body?: React.ReactNode
  sidebarTabs?: { icon: React.ReactNode; content: React.ReactNode }[]
}

export const AppLayout = ({ header, sidebar, body, sidebarTabs }: Props) => {
  return (
    <div
      id='AppLayout'
      className='flex divide-x w-screen h-screen bg-zinc-900 text-zinc-400 text-xs leading-none'
    >
      <Sidebar className='hidden sm:flex' tabs={sidebarTabs} header={header} />
      <div
        className={cn('flex-1 flex flex-col divide-y sm:-mt-px', BORDER_COLOR)}
      >
        <Header className='flex sm:hidden' header={header} />
        {body}
        <div />
      </div>
    </div>
  )
}
