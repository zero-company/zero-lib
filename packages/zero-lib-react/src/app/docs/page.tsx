import Link from 'next/link'
import Docs from '@/components/markdown/docs.mdx'
import { SidebarPortal } from '@/lib'

export default function Page() {
  return (
    <main className='prose prose-invert'>
      <Link href='/'>Home</Link>
      <Link href='/docs'>Docs</Link>
      <Docs />
    </main>
  )
}
