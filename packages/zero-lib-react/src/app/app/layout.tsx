'use client'
import {
  AppLayoutV3,
  IconV2,
  Menu,
  MenuV2,
  SupportCard,
  Footer,
  Header,
  ZeroLogo,
  Button,
  GradientButton,
  ZERO_LINKS,
  SidebarProvider,
  SidebarTrigger,
  SidebarV2,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  Collapsible,
  CollapsibleTrigger,
  CollapsibleContent,
  SidebarMenuSub,
  SidebarMenuSubItem,
  SidebarMenuSubButton,
  SidebarGroupV1Collapsible,
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
  LuChevronRight,
} from 'react-icons/lu'
import { FaFacebookF, FaGithub, FaTwitter, FaGlobe } from 'react-icons/fa6'
import { GlobalSidebarTabs } from '@/components'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

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

  const SidebarGroupForms = () => (
    <SidebarGroup>
      <SidebarGroupContent>
        <SidebarMenu>
          <Collapsible className='group/collapsible' defaultOpen={true}>
            <SidebarMenuItem>
              <CollapsibleTrigger asChild>
                <SidebarMenuButton>
                  <span>Auth Forms</span>
                  <LuChevronRight className='transition-transform ml-auto group-data-[state=open]/collapsible:rotate-90' />
                </SidebarMenuButton>
              </CollapsibleTrigger>
              <CollapsibleContent>
                <SidebarMenuSub>
                  <SidebarMenuSubItem>
                    <SidebarMenuSubButton asChild>
                      <a href={'/'}>
                        <span>Sign In</span>
                      </a>
                    </SidebarMenuSubButton>
                  </SidebarMenuSubItem>
                  <SidebarMenuSubItem>
                    <SidebarMenuSubButton asChild>
                      <a href={'/'}>
                        <span>Sign Up</span>
                      </a>
                    </SidebarMenuSubButton>
                  </SidebarMenuSubItem>
                  <SidebarMenuSubItem>
                    <SidebarMenuSubButton asChild>
                      <a href={'/'}>
                        <span>Forgot Password</span>
                      </a>
                    </SidebarMenuSubButton>
                  </SidebarMenuSubItem>
                </SidebarMenuSub>
              </CollapsibleContent>
            </SidebarMenuItem>
          </Collapsible>
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  )

  const SidebarGroupForm2 = () => (
    <SidebarGroupV1Collapsible
      disabled
      defaultOpen
      inTriggerButton={'Auth Forms 2'}
      menuSubButtons={[
        {
          text: 'Sign In',
          onClick: () => console.log('click'),
        },
        {
          text: 'Sign Up',
        },
        {
          text: 'Forgot Password',
        },
      ]}
    />
  )

  return (
    <>
      <AppLayoutV3
        body={children}
        header={<Header />}
        sidebarGroups={
          <>
            <SidebarGroupMain />
            <SidebarGroupForms />
            <SidebarGroupForm2 />
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
            <div className='flex p-2 gap-2'>
              <Link
                href={ZERO_LINKS.buymeacoffee}
                className='flex-1'
                target='_blank'
              >
                <GradientButton className='w-full'>Support Zero</GradientButton>
              </Link>
              <Link
                href={ZERO_LINKS.discord}
                className='flex-1'
                target='_blank'
              >
                <GradientButton gradient='purple2' className='w-full'>
                  Join Community
                </GradientButton>
              </Link>
            </div>
            <div className='h-8 divide-x flex *:flex *:flex-1 *:justify-center *:h-full *:p-2'>
              <Link
                href={ZERO_LINKS.website}
                className='flex-1'
                target='_blank'
              >
                <IconV2 size='sm' reactIcon={<FaGlobe />} />
              </Link>
              <Link href={ZERO_LINKS.github} className='flex-1' target='_blank'>
                <IconV2 size='sm' reactIcon={<FaGithub />} />
              </Link>
              <Link
                href={ZERO_LINKS.twitter}
                className='flex-1'
                target='_blank'
              >
                <IconV2 size='sm' reactIcon={<FaTwitter />} />
              </Link>
              <Link
                href={ZERO_LINKS.facebook}
                className='flex-1'
                target='_blank'
              >
                <IconV2 size='sm' reactIcon={<FaFacebookF />} />
              </Link>
            </div>
            <Footer />
          </>
        }
      />
    </>
  )
}
