'use client'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import { buttonVariants } from '@/components/ui/button'
import { Label } from '@/components/ui/label'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { Button } from '@/components/ui/button'

type Option = {
  name: string
  icon?: React.ReactNode
  disabled?: boolean
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
      <span className='absolute left-2'></span>
      {label && <p className='pb-2 text-xs text-muted-foreground'>{label}</p>}
      {options.map((option, key) => (
        <Button
          key={key}
          size='sm'
          className='text-xs gap-2 justify-start h-8 p-2 pl-8'
          variant='ghost'
        >
          {option.name}
        </Button>
      ))}
    </div>
  )
}
