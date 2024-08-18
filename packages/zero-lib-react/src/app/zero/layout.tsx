'use client'
import { AppLayout, Icon, ZeroLogo } from '@/lib'

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
          top: [
            {
              icon: <Icon reactIcon={<ZeroLogo />} />,
              content: <div>zero</div>,
            },
            {
              icon: <Icon reactIcon={<ZeroLogo />} />,
              content: <div>zero2</div>,
            },
          ],
        }}
      />
    </>
  )
}
