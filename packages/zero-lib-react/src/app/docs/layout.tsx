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
          <div className='flex-1 p-2'>
            <p>zero-docs</p>
          </div>
        }
        sidebarTabs={{
          top: [
            {
              icon: <Icon reactIcon={<ZeroLogo />} />,
              content: <div>zero</div>,
            },
            {
              icon: <Icon reactIcon={<LuHome />} />,
              content: <div>home</div>,
            },
            {
              icon: <Icon reactIcon={<LuList />} />,
              content: <div>list</div>,
            },
          ],
        }}
      />
    </>
  )
}
