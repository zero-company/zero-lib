'use client'
import Link from 'next/link'
import { IconV2, cn } from '@/lib'
import { buttonVariants } from '@/components/ui/button'
import { Label } from '@/components/ui/label'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { Button } from '@/components/ui/button'
import {
  LuList,
  LuHome,
  LuLayoutGrid,
  LuSettings,
  LuUserCircle2,
  LuSearch,
} from 'react-icons/lu'

type Option = {
  name: string
  icon?: React.ReactNode
  disabled?: boolean
  onClick?: () => void
  href?: string
}

type Props = {
  label?: string
  options: Option[]
}

/* 
TODO: CheckMenu
TODO: RadioMenu
TODO: ExpandMenu
TODO: Label
TODO: Notif badge count
*/

export const Menu = ({ label, options }: Props) => {
  return (
    <div className='flex flex-col p-1'>
      {label && (
        <p className='text-xs text-muted-foreground pb-1 pl-2'>{label}</p>
      )}
      {options.map((option, key) => (
        <Button
          key={key}
          size='sm'
          className='text-xs gap-2 justify-start h-8 p-2 pl-8'
          variant='ghost'
          disabled={option.disabled}
          onClick={option.onClick}
        >
          {option.icon && (
            <span className='absolute -ml-6'>
              <IconV2 reactIcon={option.icon} size='sm' />
            </span>
          )}
          {option.name}
        </Button>
      ))}
    </div>
  )
}
