'use client'
import {
  AppLayoutV2,
  IconV2,
  Menu,
  SupportCard,
  Footer,
  Header,
  ZeroLogo,
  Button,
  GradientButton,
} from '@/lib'
import {
  LuList,
  LuHome,
  LuLayoutGrid,
  LuSettings,
  LuUserCircle2,
  LuSearch,
  LuMousePointerClick,
  LuNavigationOff,
  LuInfo,
  LuBookOpen,
} from 'react-icons/lu'
import {
  GlobalSidebarTabs,
  SUPPORT_ZERO_LINK,
  JOIN_COMMUNITY_LINK,
} from '@/components'
import Link from 'next/link'

type Props = {
  children: React.ReactNode
}

export default function Layout({ children }: Props) {
  return (
    <>
      <AppLayoutV2
        body={children}
        header={<Header />}
        sidebar={
          <>
            <Menu
              options={[
                {
                  children: 'Components',
                  icon: <LuList />,
                  href: '/zero',
                },
                {
                  children: 'Docs',
                  icon: <LuBookOpen />,
                  href: '/zero/docs',
                  disabled: true,
                },
                {
                  children: 'About',
                  icon: <LuInfo />,
                  href: '/zero/about',
                  disabled: true,
                },
              ]}
            />
            <Menu
              options={[
                {
                  children: 'OnClick',
                  icon: <LuMousePointerClick />,
                  onClick: () => window.alert('Clicked OnClick'),
                },
                {
                  children: 'Disabled',
                  icon: <LuNavigationOff />,
                  disabled: true,
                },
              ]}
            />
          </>
        }
        footer={
          <>
            <div className='flex p-2 gap-2'>
              <Link href={SUPPORT_ZERO_LINK} className='flex-1' target='_blank'>
                <GradientButton className='w-full'>Support Zero</GradientButton>
              </Link>
              <Link
                href={JOIN_COMMUNITY_LINK}
                className='flex-1'
                target='_blank'
              >
                <GradientButton gradient='purple2' className='w-full'>
                  Join Community
                </GradientButton>
              </Link>
            </div>
            <Footer />
          </>
        }
      />
    </>
  )
}
