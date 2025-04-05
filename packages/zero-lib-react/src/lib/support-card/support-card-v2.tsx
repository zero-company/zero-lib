'use client'
import { cn, GradientButton, ZERO_LINKS } from '@/lib'

export const SupportCardV2 = ({
  className,
  ...props
}: React.ComponentProps<'div'>) => {
  return (
    <div className={cn('flex p-2 gap-2', className)} {...props}>
      <a href={ZERO_LINKS.buymeacoffee} className='flex-1' target='_blank'>
        <GradientButton className='w-full cursor-pointer'>
          Support Zero
        </GradientButton>
      </a>
      <a href={ZERO_LINKS.discord} className='flex-1' target='_blank'>
        <GradientButton gradient='purple2' className='w-full cursor-pointer'>
          Join Community
        </GradientButton>
      </a>
    </div>
  )
}

export const SupportCardV2Icon = () => {
  return <div></div>
}
