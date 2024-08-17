'use client'

import { cn } from '@/lib/utils'
import { FaQuestion } from 'react-icons/fa'
import { IconContext } from 'react-icons'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip'

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
  tooltipContent?: React.ReactNode
  direction?: 'top' | 'bottom' | 'left' | 'right'
  size?: keyof typeof sizeVariants
}

/**
 * https://react-icons.github.io/react-icons/
 */
export const Icon = ({
  size = 'default',
  reactIcon,
  direction,
  tooltipContent,
}: Props) => {
  return (
    <IconContext.Provider
      value={{
        className: cn(
          'group-hover/icon:brightness-150',
          iconSizeVariants[size],
        ),
      }}
    >
      <TooltipProvider delayDuration={0}>
        <Tooltip>
          <TooltipTrigger asChild>
            <button
              id='Icon'
              className={cn(
                'flex shrink-0 justify-center items-center group/icon',
                sizeVariants[size],
              )}
            >
              {reactIcon || <FaQuestion />}
            </button>
          </TooltipTrigger>
          {tooltipContent && (
            <TooltipContent side={direction}>{tooltipContent}</TooltipContent>
          )}
        </Tooltip>
      </TooltipProvider>
    </IconContext.Provider>
  )
}
