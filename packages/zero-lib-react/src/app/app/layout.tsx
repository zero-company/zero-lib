'use client'
import {
  AppLayoutV3,
  AppLayoutV4,
  IconV2,
  MenuV2,
  Footer,
  Header,
  ZERO_LINKS,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarMenuItemV1Collapsible,
  SidebarGroupV1CollapsibleSub,
  SupportCardV2,
  SocialCard,
  AppHeaderV4,
  NavCollapsibleV4,
} from '@/lib'
import {
  LuList,
  LuUser,
  LuLock,
  LuCircleUserRound,
  LuAsterisk,
  LuMousePointerClick,
  LuNavigationOff,
  LuInfo,
  LuBookOpen,
  LuLogIn,
  LuLogOut,
  LuUserPlus,
  LuMail,
} from 'react-icons/lu'
import { FaFacebookF, FaGithub, FaTwitter, FaGlobe } from 'react-icons/fa6'
import { GlobalSidebarTabs } from '@/components'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import {
  AudioWaveform,
  BookOpen,
  Bot,
  Command,
  Frame,
  GalleryVerticalEnd,
  Map,
  PieChart,
  Settings2,
  SquareTerminal,
} from 'lucide-react'

type Props = {
  children: React.ReactNode
}

export default function Layout({ children }: Props) {
  const pathname = usePathname()
  const pathnameDepth1 = pathname.split('/')[1]

  const SidebarGroupMain = () => (
    <SidebarGroup>
      <SidebarGroupContent>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton>
              <LuList />
              Components
            </SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarMenuButton disabled>
              <LuBookOpen />
              Docs
            </SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarMenuButton>
              <LuInfo />
              About
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  )

  const SidebarGroupMiscNestedCollapsible = () => (
    <SidebarGroup>
      <SidebarGroupContent>
        <SidebarMenu>
          <SidebarGroupV1CollapsibleSub
            sidebarMenuButtonChildren={'Nested Collapsible'}
            menuSubButtons={[
              {
                text: 'OnClick',
                onClick: () => console.log('onClick'),
              },
              {
                text: 'Disabled',
                onClick: () => console.log('disabled'),
                disabled: true,
              },
            ]}
          />
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  )

  const SidebarGroupForms = () => (
    <SidebarGroup>
      <SidebarGroupContent>
        <SidebarMenu>
          <SidebarMenuItemV1Collapsible
            defaultOpen
            sidebarMenuButtonChildren={'Auth Forms'}
            menuSubButtons={[
              {
                text: 'Sign In',
                href: `/${pathnameDepth1}/signin`,
              },
              {
                text: 'Sign Up',
                href: `/${pathnameDepth1}/signup`,
              },
              {
                text: 'Forgot Password',
                href: `/${pathnameDepth1}/forgotpassword`,
              },
            ]}
          />
        </SidebarMenu>
        <SidebarMenu>
          <SidebarMenuItemV1Collapsible
            defaultOpen
            sidebarMenuButtonChildren={'Misc'}
            menuSubButtons={[
              {
                text: 'OnClick',
                onClick: () => console.log('onClick'),
              },
              {
                text: 'Disabled',
                onClick: () => console.log('disabled'),
                disabled: true,
              },
              {
                text: 'OnClick',
                onClick: () => console.log('onClick'),
              },
              {
                sidebarMenuSubChildren: <SidebarGroupMiscNestedCollapsible />,
              },
            ]}
          />
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  )

  const data = {
    user: {
      name: 'shadcn',
      email: 'm@example.com',
      avatar: '/avatars/shadcn.jpg',
    },
    teams: [
      {
        name: 'Acme Inc',
        logo: GalleryVerticalEnd,
        plan: 'Enterprise',
      },
      {
        name: 'Acme Corp.',
        logo: AudioWaveform,
        plan: 'Startup',
      },
      {
        name: 'Evil Corp.',
        logo: Command,
        plan: 'Free',
      },
    ],
    navMain: [
      {
        title: 'Main',
        url: '#',
        icon: SquareTerminal,
        isActive: true,
        items: [
          {
            title: 'Components',
            url: '/app',
          },
          {
            title: 'Docs',
            url: '/app/docs',
          },
          {
            title: 'About',
            url: '/app/about-app',
          },
        ],
      },
      {
        title: 'Auth Forms',
        url: '#',
        icon: Bot,
        items: [
          {
            title: 'Sign In',
            url: '#',
          },
          {
            title: 'Sign Up',
            url: '#',
          },
          {
            title: 'Forgot Password',
            url: '#',
          },
        ],
      },
      {
        title: 'Misc',
        url: '#',
        icon: Settings2,
        items: [
          {
            title: 'OnClick',
            url: '#',
          },
          {
            title: 'Disabled',
            url: '#',
          },
        ],
      },
    ],
    projects: [
      {
        name: 'Design Engineering',
        url: '#',
        icon: Frame,
      },
      {
        name: 'Sales & Marketing',
        url: '#',
        icon: PieChart,
      },
      {
        name: 'Travel',
        url: '#',
        icon: Map,
      },
    ],
  }

  return (
    <>
      <AppLayoutV4
        body={children}
        header={<Header />}
        sidebarProps={{
          header: <AppHeaderV4 />,
          content: (
            <>
              <NavCollapsibleV4 items={data.navMain} />
              <SidebarGroupMain />
            </>
          ),
          contentFooter: (
            <>
              <SupportCardV2 />
              <SocialCard />
              <Footer />
            </>
          ),
        }}
        sidebarGroups={
          <>
            <SidebarGroupMain />
            <SidebarGroupForms />
          </>
        }
        sidebar={
          <>
            <MenuV2
              options={[
                {
                  children: 'Components',
                  icon: <LuList />,
                  href: `/${pathnameDepth1}`,
                },
                {
                  children: 'Docs',
                  icon: <LuBookOpen />,
                  href: `/${pathnameDepth1}/docs`,
                  disabled: true,
                },
                {
                  children: 'About',
                  icon: <LuInfo />,
                  href: `/${pathnameDepth1}/about-app`,
                },
              ]}
            />
            <MenuV2
              options={[
                {
                  children: 'User',
                  icon: <LuUser />,
                  subMenu: (
                    <MenuV2
                      options={[
                        {
                          children: 'Account',
                          icon: <LuCircleUserRound />,
                          href: `/${pathnameDepth1}/account`,
                          disabled: true,
                        },
                        {
                          children: 'Sign In',
                          icon: <LuLogIn />,
                          href: `/${pathnameDepth1}/signin`,
                        },
                        {
                          children: 'Sign Out',
                          icon: <LuLogOut />,
                          disabled: true,
                        },
                        {
                          children: 'Sign Up',
                          icon: <LuUserPlus />,
                          href: `/${pathnameDepth1}/signup`,
                        },
                        {
                          children: 'Forgot Password',
                          icon: <LuLock />,
                          href: `/${pathnameDepth1}/forgotpassword`,
                        },
                        {
                          children: 'Verified Email',
                          icon: <LuMail />,
                          href: `/${pathnameDepth1}/verifiedemail`,
                        },
                        {
                          children: 'Reset Password',
                          icon: <LuAsterisk />,
                          href: `/${pathnameDepth1}/resetpassword?resetPasswordToken=my-project`,
                        },
                      ]}
                    />
                  ),
                },
                {
                  children: 'Email',
                  icon: <LuMail />,
                  href: `/${pathnameDepth1}/email`,
                },
              ]}
            />
            <MenuV2
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
            <SupportCardV2 />
            <SocialCard />
            <Footer />
          </>
        }
      />
    </>
  )
}
