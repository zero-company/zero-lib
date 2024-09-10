'use client'
import { AppLayoutV2, Icon, IconV2, Menu } from '@/lib'
import { LuList, LuHome } from 'react-icons/lu'
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
          <div className='p-2'>
            <p>zero-docs</p>
          </div>
        }
        sidebar={
          <>
            <div className='flex flex-col items-start p-2 *:w-full'>
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
            <div className='p-2'>
              <Menu />
            </div>
          </>
        }
      />
    </>
  )
}
