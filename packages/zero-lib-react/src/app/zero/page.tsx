import Link from 'next/link'

export default function Home() {
  return (
    <main className=''>
      <p className='p-2'>ZeroPage</p>
      <Link href='/'>Home</Link>
      <Link href='/zero'>Home</Link>
      <Link href='/docs'>Docs</Link>
    </main>
  )
}
