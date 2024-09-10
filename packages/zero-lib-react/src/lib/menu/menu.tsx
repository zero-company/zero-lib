'use client'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import { buttonVariants } from '@/components/ui/button'
import { Label } from '@/components/ui/label'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'

type Props = {}

/* 
TODO: CheckMenu
TODO: RadioMenu
TODO: ExpandMenu
TODO: Label
TODO: Notif badge count
*/

export const Menu = ({}: Props) => {
  return (
    <div>
      <div className='pl-8'>
        <span className='absolute left-2'></span>
        <p className='pb-2 text-xs text-muted-foreground'>Menu</p>
        <RadioGroup defaultValue='comfortable' className='-ml-6'>
          <div className='flex items-center space-x-2'>
            <RadioGroupItem value='default' id='r1' />
            <Label htmlFor='r1' className='text-xs'>
              Default
            </Label>
          </div>
          <div className='flex items-center space-x-2'>
            <RadioGroupItem value='comfortable' id='r2' />
            <Label htmlFor='r2' className='text-xs'>
              Comfortable
            </Label>
          </div>
          <div className='flex items-center space-x-2'>
            <RadioGroupItem value='compact' id='r3' />
            <Label htmlFor='r3' className='text-xs'>
              Compact
            </Label>
          </div>
        </RadioGroup>
      </div>
    </div>
  )
}
