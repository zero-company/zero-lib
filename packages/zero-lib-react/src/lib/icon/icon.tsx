import { cn } from '@/lib/utils'
import { CircleHelp } from 'lucide-react'

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
  divClass?: string
  spanClass?: string
  children?: React.ReactNode
  lucideIcon?: React.ReactElement
  //symbol?: MaterialSymbol | 'zero'
  text?: string
  tooltipString?: string
  direction?: 'top' | 'bottom' | 'left' | 'right'
  size?: keyof typeof sizeVariants
}

export const Icon = ({ size = 'default' }: Props) => {
  return (
    <button
      id='Icon'
      className={cn(
        'flex shrink-0 justify-center items-center group/icon',
        sizeVariants[size],
      )}
    >
      <CircleHelp
        className={cn(
          'group-hover/icon:*:brightness-150',
          iconSizeVariants[size],
        )}
      />
    </button>
  )
}
