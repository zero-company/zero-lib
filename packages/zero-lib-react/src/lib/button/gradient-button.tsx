'use client'
import { cn, Button, ButtonProps } from '@/components/shadcn'

const gradients = {
  deepPurpleToBlue: 'bg-gradient-to-tr from-mdeeppurple-a400 to-mblue-a400',
  deepPurpleToPurple: 'bg-gradient-to-tr from-mdeeppurple-a400 to-mpurple-a700',
} as const

type Props = {
  size?: ButtonProps['size']
  className?: string
  children: React.ReactNode
  gradient: keyof typeof gradients
}

export const GradientButton = ({
  children,
  className,
  size = 'sm',
  gradient = 'deepPurpleToBlue',
}: Props) => {
  return (
    children && (
      <Button
        size={size}
        className={cn(
          'text-xs text-white gap-2 flex-1',
          gradients[gradient],
          className,
        )}
      >
        {children}
      </Button>
    )
  )
}
