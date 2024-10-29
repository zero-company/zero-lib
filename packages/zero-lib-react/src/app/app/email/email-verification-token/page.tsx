'use client'
import { renderEmailVerificationTokenEmail, Textarea } from '@/lib'
import { useState } from 'react'

export default function Page() {
  const [html, setHtml] = useState<string | null>(null)
  renderEmailVerificationTokenEmail().then(html => setHtml(html))

  // max-w-screen-sm
  return (
    <>
      <div className='flex flex-col overflow-y-auto max-w-4xl w-full'>
        <p>Email Verification Token</p>
        {html && <iframe className='h-[40rem]' srcDoc={html} />}
        <Textarea className='h-[40rem]' readOnly value={html || 'null'} />
      </div>
    </>
  )
}
