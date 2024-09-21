'use client'
import { Button } from '@/components/shadcn'
import { IconV2 } from '@/lib'
import Link from 'next/link'

type Option = {
  children?: React.ReactNode
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

const MenuButton = ({ option }: { option: Option }) => (
  <Button
    size='sm'
    className='text-xs gap-2 justify-start h-8 p-2 pl-8 w-full'
    variant='ghost'
    disabled={option.disabled}
    onClick={option.onClick}
  >
    {option.icon && (
      <span className='-ml-6'>
        <IconV2 reactIcon={option.icon} size='sm' />
      </span>
    )}
    {option.children}
  </Button>
)

export const Menu = ({ label, options }: Props) => {
  return (
    <div className='flex flex-col p-1'>
      {label && (
        <p className='text-xs text-muted-foreground pb-1 pl-2'>{label}</p>
      )}
      {options.map((option, key) =>
        option.href && !option.onClick ? (
          <Link key={key} href={option.href || ''}>
            <MenuButton option={option} />
          </Link>
        ) : (
          <MenuButton key={key} option={option} />
        ),
      )}
    </div>
  )
}
