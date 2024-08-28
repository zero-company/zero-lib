'use client'
import { cn } from '@/lib'
import { TabsTrigger as ShadcnTabsTrigger } from '@/components/ui/tabs'

export const TabsTrigger = (props: {
  key: number
  children: React.ReactNode
  value: string
  onClick?: () => void
}) => {
  return props.onClick ? (
    <button {...props}>{props.children}</button>
  ) : (
    <ShadcnTabsTrigger
      className={cn(
        'p-0 data-[state=active]:bg-inherit',
        'focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-ring focus-visible:ring-offset-0',
      )}
      {...props}
    >
      {props.children}
    </ShadcnTabsTrigger>
  )
}
