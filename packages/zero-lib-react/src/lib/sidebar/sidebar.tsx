'use client'
import { cn, HEADER_SIDEBAR_SIZE } from '@/lib'
import { Tabs, TabsTrigger, TabsContent, TabsList } from '@/components/ui/tabs'

export type SidebarTabProps = {
  id: string
  icon: React.ReactNode
  content?: React.ReactNode
  onClick?: () => void
  disabled?: boolean
}

export type SidebarTabsProps = {
  defaultTab?: string
  top?: SidebarTabProps[]
  bottom?: SidebarTabProps[]
}

type Props = {
  className?: string
  header?: React.ReactNode
  tabs?: SidebarTabsProps
}

export const SidebarTabTrigger = (
  props: {
    key: number
  } & SidebarTabProps,
) => {
  const { content, icon, ...buttonProps } = props
  return props.onClick ? (
    <button {...buttonProps}>{icon}</button>
  ) : (
    <TabsTrigger
      value={props.id}
      className={cn(
        'p-0 data-[state=active]:bg-inherit',
        'focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-ring focus-visible:ring-offset-0',
      )}
      {...buttonProps}
    >
      {icon}
    </TabsTrigger>
  )
}

export const Sidebar = ({ className, header, tabs }: Props) => {
  const topTabs = tabs?.top || []
  const bottomTabs = tabs?.bottom || []

  return (
    <Tabs
      id='Sidebar'
      defaultValue={tabs?.defaultTab}
      orientation='vertical'
      className={cn('w-64 flex flex-row divide-x', className)}
    >
      <TabsList
        className={cn(
          'p-0 bg-inherit flex flex-col h-screen overflow-y-auto justify-normal',
          HEADER_SIDEBAR_SIZE.W,
        )}
      >
        {topTabs.map((tabProps, key) => (
          <SidebarTabTrigger {...tabProps} key={key} />
        ))}
        <div className='flex-1' />
        {bottomTabs.map((tabProps, key) => (
          <SidebarTabTrigger {...tabProps} key={key} />
        ))}
      </TabsList>
      <div className='flex-1 flex flex-col divide-y'>
        <div className={cn('flex divide-x *:h-full', HEADER_SIDEBAR_SIZE.H)}>
          <div className='flex-1'>
            {header || (
              <div className='p-2'>
                <p>zero</p>
              </div>
            )}
          </div>
        </div>
        {[...topTabs, ...bottomTabs].map((tab, key) => (
          <TabsContent key={key} value={tab.id} className='m-0 divide-y'>
            {tab.content}
          </TabsContent>
        ))}
        <div />
      </div>
    </Tabs>
  )
}
