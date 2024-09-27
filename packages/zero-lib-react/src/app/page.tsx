'use client'
import { SplashPage } from '@/lib'

export default function Home() {
  return (
    <>
      <head>
        <meta httpEquiv='refresh' content='0; url=/zero/' />
      </head>
      <main className='flex w-screen h-screen'>
        <SplashPage />
      </main>
    </>
  )
}
