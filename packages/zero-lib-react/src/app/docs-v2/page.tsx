import Link from 'next/link'
import Docs from '@/components/markdown/docs.mdx'

export default function Page() {
  return (
    <main className='prose prose-invert p-2'>
      <Docs />
    </main>
  )
}
