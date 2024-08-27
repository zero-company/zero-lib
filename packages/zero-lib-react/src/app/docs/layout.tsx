'use client'
import { AppLayout, Icon } from '@/lib'
import { LuList, LuHome } from 'react-icons/lu'
import { GlobalSidebarTabs } from '@/components'

type Props = {
  children: React.ReactNode
}

export default function Layout({ children }: Props) {
  return (
    <>
      <AppLayout
        body={children}
        header={
          <div className='p-2'>
            <p>zero-docs</p>
          </div>
        }
        sidebarTabs={{
          defaultTab: 'home',
          top: [
            {
              id: 'home',
              icon: <Icon reactIcon={<LuHome />} />,
              content: <div>home</div>,
            },
            {
              id: 'list',
              icon: <Icon reactIcon={<LuList />} />,
              content: <div>list</div>,
            },
          ],
          bottom: [...GlobalSidebarTabs],
        }}
      />
    </>
  )
}
