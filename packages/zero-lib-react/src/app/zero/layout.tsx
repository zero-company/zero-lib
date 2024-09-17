'use client'
import { AppLayoutV2, IconV2, Menu, SupportCard, Footer } from '@/lib'
import {
  LuList,
  LuHome,
  LuLayoutGrid,
  LuSettings,
  LuUserCircle2,
  LuSearch,
} from 'react-icons/lu'
import { GlobalSidebarTabs } from '@/components'
import { Button } from '@/components/ui/button'
import { usePathname } from 'next/navigation'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

type Props = {
  children: React.ReactNode
}

export default function Layout({ children }: Props) {
  const pathname = usePathname()

  return (
    <>
      <AppLayoutV2
        body={children}
        header={
          <div className='p-1'>
            <p className='tracking-wider'>{pathname.substring(1)}</p>
            <p className='tracking-wider text-muted-foreground'>----</p>
          </div>
        }
        sidebar={
          <>
            <div className='flex flex-col items-start p-1 *:w-full'>
              <Button
                size='sm'
                className='text-xs gap-2 justify-start h-8 px-2'
                variant='ghost'
              >
                <IconV2 reactIcon={<LuHome />} size='sm' /> Browse
              </Button>
              <Button
                size='sm'
                className='text-xs gap-2 justify-start h-8 px-2'
                variant='ghost'
              >
                <IconV2 reactIcon={<LuList />} size='sm' /> Outline
              </Button>
            </div>

            <Menu
              options={[
                { name: 'Apps', icon: <LuLayoutGrid />, href: '/apps' },
                {
                  name: 'Search',
                  icon: <LuSearch />,
                  href: '/search',
                  disabled: true,
                },
                {
                  name: 'User',
                  icon: <LuUserCircle2 />,
                  href: '/user',
                  disabled: true,
                },
                {
                  name: 'Settings',
                  icon: <LuSettings />,
                  href: '/settings',
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
