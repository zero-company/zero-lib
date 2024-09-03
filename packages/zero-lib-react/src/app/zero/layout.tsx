'use client'
import { AppLayoutV1, Icon } from '@/lib'
import { LuHome } from 'react-icons/lu'
import { GlobalSidebarTabs } from '@/components'

type Props = {
  children: React.ReactNode
}

export default function Layout({ children }: Props) {
  return (
    <>
      <AppLayoutV1
        body={children}
        header={
          <div className='flex-1 p-2'>
            <p>zero</p>
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
          ],
          bottom: [...GlobalSidebarTabs],
        }}
      />
    </>
  )
}
