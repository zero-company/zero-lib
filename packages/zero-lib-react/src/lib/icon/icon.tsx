import { cn } from '@/lib/utils'
import { cva, type VariantProps } from 'class-variance-authority'

const parseVariants = cva('flex justify-center items-center', {
  variants: {
    status: {
      default: 'bg-primary text-primary-foreground hover:bg-primary/90',
      disabled:
        'bg-destructive text-destructive-foreground hover:bg-destructive/90',
    },
    size: {
      default: 'h-10 px-4 py-2',
      sm: 'h-9 rounded-md px-3',
    },
  },
  defaultVariants: {
    status: 'default',
    size: 'default',
  },
})

type Props = {
  divClass?: string
  spanClass?: string
  children?: React.ReactNode
  lucideIcon?: React.ReactElement
  //symbol?: MaterialSymbol | 'zero'
  text?: string
  tooltipString?: string
  direction?: 'top' | 'bottom' | 'left' | 'right'
}

export const Icon = ({}: Props) => {
  return (
    <div>
      <h1>Icon</h1>
    </div>
  )
}
