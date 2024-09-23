'use client'
import { cn, Button, ButtonProps } from '@/components/shadcn'

const gradients = {
  purple1: 'bg-gradient-to-tr from-mdeeppurple-a400 to-mblue-a400',
  purple2: 'bg-gradient-to-tr from-mdeeppurple-a400 to-mpurple-a700',
  indigo1: 'bg-gradient-to-tr from-indigo-600 to-purple-500',
  blue1: 'bg-gradient-to-br from-[#868cff] to-[#4318ff]',
  orange1: 'bg-gradient-to-br from-[#FFC837] to-[#FF6108]',
  orange2: 'bg-gradient-to-br from-[#FF9966] to-[#FF5E62]',
  red1: 'bg-gradient-to-br from-[#FF416C] to-[#FF4B2B]',
  pink1: 'bg-gradient-to-br from-[#EC008C] to-[#FC6767]',
  pink2: 'bg-gradient-to-br from-[#F857A6] to-[#FF5858]',
} as const

type Props = {
  size?: ButtonProps['size']
  className?: string
  children: React.ReactNode
  gradient?: keyof typeof gradients
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
          gradients[gradient],
          className,
        )}
      >
        {children}
      </Button>
    )
  )
}
