'use client'

import { ZeroLogo } from '../zero/zero-logo'

export const SplashPage = () => {
  return (
    <div className='flex h-screen flex-col justify-center items-center'>
      <ZeroLogo className='size-24 text-white mb-4' />
      <h1 className='tracking-widest text-xl'>zero</h1>
    </div>
  )
}
