'use client'
import { renderEmailVerificationTokenEmail } from '@/lib'
import { useState } from 'react'

export default function Page() {
  const [html, setHtml] = useState<string | null>(null)
  renderEmailVerificationTokenEmail().then(html => setHtml(html))

  return (
    <>
      {console.log(html)}
      <div className='flex flex-col overflow-y-auto max-w-screen-sm w-full h-[100rem]'>
        <p>Email Verification Token</p>
        {html && <iframe className='h-full' srcDoc={html} />}
      </div>
      <div />
    </>
  )
}
