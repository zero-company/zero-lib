'use client'
import {
  EmailV1,
  renderEmailV1,
  renderEmailVerificationTokenEmail,
  Textarea,
} from '@/lib'
import { useState, useEffect } from 'react'

export default function Page() {
  const [emailHtml, setEmailHtml] = useState<string | null>(null)

  useEffect(() => {
    // renderEmailVerificationTokenEmail().then(html => setHtml(html))
    renderEmailV1(
      <EmailV1>
        <p>Token: ----</p>
      </EmailV1>,
    ).then(html => setEmailHtml(html))
  })

  // max-w-screen-sm
  return (
    <>
      <div className='flex flex-col overflow-y-auto max-w-4xl w-full *:shrink-0'>
        <div className='p-4 space-y-4'>
          <p>Email Verification Token</p>
          <Textarea className='h-[10rem] ' readOnly value={emailHtml || ''} />
        </div>
        {emailHtml && <iframe className='h-[80rem]' srcDoc={emailHtml} />}
      </div>
    </>
  )
}
