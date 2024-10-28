'use client'
import { renderEmailVerificationTokenEmail } from '@/lib'
import { useState } from 'react'

export default function Page() {
  const [html, setHtml] = useState('')
  renderEmailVerificationTokenEmail().then(html => setHtml(html))

  return (
    <>
      <div className='flex flex-col bg-white'>
        <p>Email Verification Token</p>
        <div dangerouslySetInnerHTML={{ __html: html }} />
      </div>
    </>
  )
}
