'use client'
import { cn, Button, ButtonProps } from '@/components/shadcn'
import { GRADIENTS } from '@/lib'

const TEXTSIZES = {
  sm: 'text-xs',
  lg: 'text-md',
  default: 'text-sm',
  icon: 'text-sm',
}

type Props = {
  size?: ButtonProps['size']
  className?: string
  children: React.ReactNode
  gradient?: keyof typeof GRADIENTS
}

export const GradientButton = ({
  children,
  className,
  size = 'sm',
  gradient = 'purple1',
}: Props) => {
  return (
    children && (
      <Button
        size={size}
        className={cn(
          'text-white',
          TEXTSIZES[size || 'default'],
          GRADIENTS[gradient],
          className,
        )}
      >
        {children}
      </Button>
    )
  )
}
