'use client'
import { AppLayoutV2, Icon, IconV2, Menu } from '@/lib'
import {
  LuList,
  LuHome,
  LuLayoutGrid,
  LuSettings,
  LuUserCircle2,
  LuSearch,
} from 'react-icons/lu'
import { GlobalSidebarTabs } from '@/components'
import { Button } from '@/components/ui/button'
import { Mail } from 'lucide-react'

type Props = {
  children: React.ReactNode
}

export default function Layout({ children }: Props) {
  return (
    <>
      <AppLayoutV2
        body={children}
        header={
          <div className='p-1'>
            <p>zero-docs</p>
          </div>
        }
        sidebar={
          <>
            <div className='flex flex-col items-start p-1 *:w-full'>
              <Button
                size='sm'
                className='text-xs gap-2 justify-start h-8 px-2'
                variant='ghost'
              >
                <IconV2 reactIcon={<LuHome />} size='sm' /> Browse
              </Button>
              <Button
                size='sm'
                className='text-xs gap-2 justify-start h-8 px-2'
                variant='ghost'
              >
                <IconV2 reactIcon={<LuList />} size='sm' /> Outline
              </Button>
            </div>

            <Menu
              options={[
                { name: 'Apps', icon: <LuLayoutGrid /> },
                { name: 'Search', icon: <LuSearch />, disabled: true },
                { name: 'User', icon: <LuUserCircle2 />, disabled: true },
                { name: 'Settings', icon: <LuSettings />, disabled: true },
              ]}
            />
          </>
        }
      />
    </>
  )
}
