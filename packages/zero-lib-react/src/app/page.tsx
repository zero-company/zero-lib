import Link from 'next/link'

export default function Home() {
  return (
    <main className=''>
      <p className='p-2'>HomePage</p>
      <Link href='/'>Home</Link>
      <Link href='/docs'>Docs</Link>
    </main>
  )
}
