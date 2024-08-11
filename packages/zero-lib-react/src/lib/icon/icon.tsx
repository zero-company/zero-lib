'use client'

import { cn } from '@/lib/utils'
import { FaQuestion } from '@react-icons/all-files/fa/FaQuestion'
import { IconContext } from '@react-icons/all-files'

const sizeVariants = {
  default: 'size-10',
  sm: 'size-5',
  md: 'size-10',
} as const

const iconSizeVariants: { [key in keyof typeof sizeVariants]: string } = {
  default: 'size-5',
  sm: 'size-3',
  md: 'size-5',
} as const

type Props = {
  reactIcon?: React.ReactNode
  text?: string
  tooltipString?: string
  direction?: 'top' | 'bottom' | 'left' | 'right'
  size?: keyof typeof sizeVariants
}

export const Icon = ({ size = 'default', reactIcon }: Props) => {
  return (
    <IconContext.Provider
      value={{
        className: cn(
          'group-hover/icon:brightness-150',
          iconSizeVariants[size],
        ),
      }}
    >
      <button
        id='Icon'
        className={cn(
          'flex shrink-0 justify-center items-center group/icon',
          sizeVariants[size],
        )}
      >
        {reactIcon || <FaQuestion />}
      </button>
    </IconContext.Provider>
  )
}
