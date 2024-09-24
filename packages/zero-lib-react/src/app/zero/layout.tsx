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
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  Input,
  Label,
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
            <SupportCard />
            <Footer />
          </>
        }
      />
    </>
  )
}
