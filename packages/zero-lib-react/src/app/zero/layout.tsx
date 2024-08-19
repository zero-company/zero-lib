'use client'
import { AppLayout, Icon, ZeroLogo } from '@/lib'
import {
  LuSettings,
  LuUserCircle2,
  LuSearch,
  LuList,
  LuHome,
} from 'react-icons/lu'

type Props = {
  children: React.ReactNode
}

export default function Layout({ children }: Props) {
  return (
    <>
      <AppLayout
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
              id: 'zero',
              icon: <Icon reactIcon={<ZeroLogo />} />,
              content: <div>zero</div>,
            },
            {
              id: 'home',
              icon: <Icon reactIcon={<LuHome />} />,
              content: <div>home</div>,
            },
          ],
          bottom: [
            {
              id: 'search',
              icon: <Icon reactIcon={<LuSearch />} />,
              content: <div>search</div>,
            },
            {
              id: 'user',
              icon: <Icon reactIcon={<LuUserCircle2 />} />,
              content: <div>user</div>,
            },
            {
              id: 'settings',
              icon: <Icon reactIcon={<LuSettings />} />,
              content: <div>settings</div>,
            },
          ],
        }}
      />
    </>
  )
}
