'use client'
import { AppLayout, Icon, ZeroLogo } from '@/lib'
import {
  LuSettings,
  LuUserCircle2,
  LuSearch,
  LuList,
  LuHome,
  LuChevronRight,
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
          <div className='p-2'>
            <p>zero-docs</p>
          </div>
        }
        sidebarTabs={{
          defaultTab: 'zero',
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
            {
              id: 'list',
              icon: <Icon reactIcon={<LuList />} />,
              content: <div>list</div>,
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
