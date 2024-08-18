'use client'
import { cn, Icon, ZeroLogo, HEADER_SIDEBAR_SIZE, BORDER_COLOR } from '@/lib'
import {
  LuSettings,
  LuUserCircle2,
  LuSearch,
  LuChevronRight,
} from 'react-icons/lu'
import { Button } from '@/components/ui/button'
import { Tabs, TabsTrigger, TabsContent, TabsList } from '@/components/ui/tabs'

export type SidebarTabsProps = {
  top?: { icon: React.ReactNode; content: React.ReactNode }[]
  bottom?: { icon: React.ReactNode; content: React.ReactNode }[]
}

type Props = {
  className?: string
  header?: React.ReactNode
  tabs?: SidebarTabsProps
}

export const Sidebar = ({ className, header, tabs }: Props) => {
  return (
    <div className={cn('w-64 flex divide-x', className)}>
      <div
        className={cn(
          'flex flex-col w-10 overflow-y-auto',
          HEADER_SIDEBAR_SIZE.W,
          BORDER_COLOR,
        )}
      >
        {tabs?.top?.map((tab, key) => <span key={key}>{tab.icon}</span>)}
        <div className='flex-1' />
        <Icon reactIcon={<LuSearch />} />
        <Icon reactIcon={<LuUserCircle2 />} />
        <Icon reactIcon={<LuSettings />} />
      </div>

      <div className={cn('flex-1 flex flex-col divide-y')}>
        <div className={cn('flex divide-x *:h-full', HEADER_SIDEBAR_SIZE.H)}>
          {header || (
            <div className='flex-1 p-2'>
              <p>zero-lib</p>
            </div>
          )}
          <Button size='sm' variant='ghost' className='sm:hidden'>
            <LuChevronRight />
          </Button>
        </div>
        <Tabs
          defaultValue='1'
          orientation='vertical'
          className='flex flex-row divide-x'
        >
          <TabsList className='p-0 bg-inherit flex flex-col h-auto'>
            <TabsTrigger
              value='1'
              className='p-0 data-[state=active]:bg-inherit'
            >
              <Icon reactIcon={<LuSearch />} />
            </TabsTrigger>
            <TabsTrigger
              value='2'
              className='p-0 data-[state=active]:bg-inherit'
            >
              <Icon reactIcon={<LuUserCircle2 />} />
            </TabsTrigger>
            <TabsTrigger
              value='3'
              className='p-0 data-[state=active]:bg-inherit'
            >
              <Icon reactIcon={<LuSettings />} />
            </TabsTrigger>
          </TabsList>
          <TabsContent value='1' className='m-0'>
            1
          </TabsContent>
          <TabsContent value='2' className='m-0'>
            2
          </TabsContent>
          <TabsContent value='3' className='m-0'>
            3
          </TabsContent>
        </Tabs>
        <div />
      </div>
    </div>
  )
}
