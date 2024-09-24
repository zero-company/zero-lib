'use client'
import { cn, Button, ButtonProps } from '@/components/shadcn'
import { GRADIENTS } from '@/lib'

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
          'text-xs text-white gap-2 flex-1',
          GRADIENTS[gradient],
          className,
        )}
      >
        {children}
      </Button>
    )
  )
}
