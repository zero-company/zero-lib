'use client'
import {
  AppLayoutV2,
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
  SidebarV2,
} from '@/lib'
import {
  LuList,
  LuUser,
  LuLock,
  LuUserCircle2,
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

type Props = {
  children: React.ReactNode
}

export default function Layout({ children }: Props) {
  const pathname = usePathname()
  const pathnameDepth1 = pathname.split('/')[1]

  return (
    <>
      <SidebarProvider>
        <AppLayoutV2
          body={children}
          header={<Header />}
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
                            icon: <LuUserCircle2 />,
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
                  <GradientButton className='w-full'>
                    Support Zero
                  </GradientButton>
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
                <Link
                  href={ZERO_LINKS.github}
                  className='flex-1'
                  target='_blank'
                >
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
      </SidebarProvider>
    </>
  )
}
