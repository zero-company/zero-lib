'use client'
import {
  AppLayoutV2,
  IconV2,
  Menu,
  SupportCard,
  Footer,
  Header,
  ZeroLogo,
} from '@/lib'
import {
  LuList,
  LuHome,
  LuLayoutGrid,
  LuSettings,
  LuUserCircle2,
  LuSearch,
  LuAppWindow,
} from 'react-icons/lu'
import { GlobalSidebarTabs } from '@/components'

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
                  children: 'Browse',
                  icon: <LuHome />,
                  onClick: () => console.log('click'),
                },
                {
                  children: 'App',
                  icon: <LuAppWindow />,
                },
                {
                  children: 'Zero',
                  icon: <IconV2 reactIcon={<ZeroLogo />} size='sm' />,
                  href: '/about-zero',
                },
              ]}
            />
            <Menu
              options={[
                {
                  children: 'Apps',
                  icon: <LuLayoutGrid />,
                  //href: '/apps'
                },
                {
                  children: 'Search',
                  icon: <LuSearch />,
                  //href: '/search',
                  disabled: true,
                },
                {
                  children: 'User',
                  icon: <LuUserCircle2 />,
                  //href: '/user',
                  disabled: true,
                },
                {
                  children: 'Settings',
                  icon: <LuSettings />,
                  //href: '/settings',
                  disabled: true,
                },
              ]}
            />
          </>
        }
        footer={
          <>
            <SupportCard />
            <Footer />
          </>
        }
      />
    </>
  )
}
