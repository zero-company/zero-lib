'use client'

import { Settings, Triangle, Home, List } from 'lucide-react'
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
import { cn, Icon } from '@/lib'
import { FaCog } from '@react-icons/all-files/fa/FaCog'

const HEADER_SIDEBAR_SIZE = { SIZE: 'size-10', W: 'w-10', H: 'h-10' }
const BORDER_COLOR = 'border-zinc-200/[.08]'

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
      className='flex divide-x w-screen h-screen bg-zinc-900 text-zinc-400'
    >
      <div className={cn('flex flex-col', HEADER_SIDEBAR_SIZE.W, BORDER_COLOR)}>
        <div
          className={cn(
            'flex justify-center items-center',
            HEADER_SIDEBAR_SIZE.SIZE,
          )}
        >
          <Triangle className='size-5' />
        </div>
        <div
          className={cn(
            'flex justify-center items-center',
            HEADER_SIDEBAR_SIZE.SIZE,
          )}
        >
          <Home className='size-5' />
        </div>
        <div
          className={cn(
            'flex justify-center items-center',
            HEADER_SIDEBAR_SIZE.SIZE,
          )}
        >
          <List className='size-5' />
        </div>
        <div className='flex-1' />
        <Icon size='sm' reactIcon={<FaCog />} />
        <Icon />
        <div
          className={cn(
            'flex justify-center items-center',
            HEADER_SIDEBAR_SIZE.SIZE,
          )}
        >
          <Settings className='size-5' />
        </div>
        <div />
      </div>

      <div className={cn('flex-1 flex flex-col divide-y', BORDER_COLOR)}>
        <div className={HEADER_SIDEBAR_SIZE.H}>
          <h1>AppLayout</h1>
        </div>
        <h1>AppContent</h1>
      </div>
    </div>
  )
}
