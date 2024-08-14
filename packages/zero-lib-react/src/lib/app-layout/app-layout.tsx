'use client'

import { Triangle, Home } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '@/components/ui/drawer'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@/components/ui/tooltip'
import {
  cn,
  Icon,
  ZeroLogo,
  Sidebar,
  Header,
  HEADER_SIDEBAR_SIZE,
  BORDER_COLOR,
} from '@/lib'
import {
  LuSettings,
  LuUserCircle2,
  LuSearch,
  LuList,
  LuHome,
} from 'react-icons/lu'

type Props = {
  sidebarPrimary?: React.ReactNode
  sidebarSecondary?: React.ReactNode
  header?: React.ReactNode
  page?: React.ReactNode
}

export const AppLayout = ({ header }: Props) => {
  return (
    <div
      id='AppLayout'
      className='flex divide-x w-screen h-screen bg-zinc-900 text-zinc-400 text-xs leading-none'
    >
      <Sidebar />
      <div className={cn('flex-1 flex flex-col divide-y', BORDER_COLOR)}>
        <Header />
        <p className='p-2'>AppContent</p>
      </div>
    </div>
  )
}
