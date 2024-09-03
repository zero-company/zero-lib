'use client'
import { AppLayoutV2, Icon } from '@/lib'
import { LuList, LuHome } from 'react-icons/lu'
import { GlobalSidebarTabs } from '@/components'

type Props = {
  children: React.ReactNode
}

export default function Layout({ children }: Props) {
  return (
    <>
      <AppLayoutV2
        body={children}
        header={
          <div className='p-2'>
            <p>zero-docs</p>
          </div>
        }
        sidebar={
          <>
            <div className='p-2'>
              <h1>Home</h1>
            </div>
            <div className='p-2'>
              <h1>List</h1>
            </div>
          </>
        }
      />
    </>
  )
}
