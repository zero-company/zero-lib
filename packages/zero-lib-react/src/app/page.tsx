import Link from 'next/link'

export default function Home() {
  return (
    <>
      <head>
        <meta http-equiv='refresh' content='0; url=/zero/' />
      </head>
      <main className=''>
        <p className='p-2'>HomePage</p>
        <Link href='/'>Home</Link>
        <Link href='/docs'>Docs</Link>
      </main>
    </>
  )
}
