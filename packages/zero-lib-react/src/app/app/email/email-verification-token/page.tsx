'use client'
import { renderEmailVerificationTokenEmail, Textarea } from '@/lib'
import { useState } from 'react'

export default function Page() {
  const [html, setHtml] = useState<string | null>(null)
  renderEmailVerificationTokenEmail().then(html => setHtml(html))

  return (
    <>
      <div className='flex flex-col overflow-y-auto max-w-screen-sm w-full'>
        <p>Email Verification Token</p>
        {html && <iframe className='h-[40rem]' srcDoc={html} />}
        <Textarea className='h-[40rem]' value={html || 'null'} />
      </div>
      <div />
    </>
  )
}
