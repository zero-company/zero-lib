'use client'
import { renderEmailVerificationTokenEmail, Textarea } from '@/lib'
import { useState, useEffect } from 'react'

export default function Page() {
  const [html, setHtml] = useState<string | null>(null)

  useEffect(() => {
    renderEmailVerificationTokenEmail().then(html => setHtml(html))
  })

  // max-w-screen-sm
  return (
    <>
      <div className='flex flex-col overflow-y-auto max-w-4xl w-full *:shrink-0'>
        <div className='p-4'>
          <p>Email Verification Token</p>
          <Textarea className='h-[10rem] ' readOnly value={html || 'null'} />
        </div>
        {html && <iframe className='h-[80rem]' srcDoc={html} />}
      </div>
    </>
  )
}
