'use client'
import {
  cn,
  Sidebar,
  Header,
  BORDER_COLOR,
  HEADER_SIDEBAR_SIZE,
  Icon,
  SidebarTabsProps,
  ZeroLogo,
  Footer,
  SupportCard,
} from '@/lib'
import { LuMenu, LuPanelLeftOpen, LuPanelLeftClose } from 'react-icons/lu'
import { Button } from '@/components/ui/button'
import { useState } from 'react'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

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
        <div className='hidden'>
          <Select>
            <SelectTrigger className='w-[180px]'>
              <SelectValue placeholder='Select a fruit' />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Fruits</SelectLabel>
                <SelectItem value='apple'>Apple</SelectItem>
                <SelectItem value='banana'>Banana</SelectItem>
                <SelectItem value='blueberry'>Blueberry</SelectItem>
                <SelectItem value='grapes'>Grapes</SelectItem>
                <SelectItem value='pineapple'>Pineapple</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
        <SupportCard />
        <Footer />
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
        {body}
      </div>
    </div>
  )
}
