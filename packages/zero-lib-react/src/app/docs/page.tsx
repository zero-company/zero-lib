import Link from 'next/link'
import Docs from '@/components/markdown/docs.mdx'
import { SidebarPortal } from '@/lib'

export default function Page() {
  return (
    <main className='prose prose-invert'>
      <SidebarPortal>
        <p>inside docs portal</p>
      </SidebarPortal>
      <Link href='/'>Home</Link>
      <Link href='/docs'>Docs</Link>
      <Docs />
    </main>
  )
}
