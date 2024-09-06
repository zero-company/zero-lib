import { IconV2 } from '@/lib'
import { Button } from '@/components/ui/button'
import { LuList, LuHome } from 'react-icons/lu'

export const SupportCard = () => {
  return (
    <div className='flex p-2 gap-2 '>
      <Button
        size='sm'
        className='text-xs text-white gap-2 bg-gradient-to-tr from-mdeeppurple-a400 to-mpurple-a700 flex-1'
      >
        Support Zero
      </Button>
      <Button
        size='sm'
        className='text-xs text-white gap-2 bg-gradient-to-tr from-mdeeppurple-a400 to-mblue-a400 flex-1'
      >
        Join Community
      </Button>
    </div>
  )
}
