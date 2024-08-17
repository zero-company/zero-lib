import Link from 'next/link'
import { SidebarPortal } from '@/lib'

export default function Home() {
  return (
    <main className=''>
      <SidebarPortal>
        <p>inside home portal</p>
      </SidebarPortal>
      <p className='p-2'>HomePage</p>
      <Link href='/'>Home</Link>
      <Link href='/docs'>Docs</Link>
    </main>
  )
}
