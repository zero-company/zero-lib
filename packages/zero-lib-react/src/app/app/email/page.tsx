'use client'
import { EmailV1, renderEmailV1, Textarea } from '@/lib'
import { useState, useEffect } from 'react'
import { EmailForm } from './email-form'

export default function Page() {
  const [emailHtml, setEmailHtml] = useState<string | null>(null)
  const [emailContent, setEmailContent] = useState({
    header: `Accouncements`,
    markdown: `
  # Changes
    - Add EmailV1 generation form
    `,
  })

  useEffect(() => {
    renderEmailV1(
      <EmailV1 header={emailContent.header}>{emailContent.markdown}</EmailV1>,
    ).then(html => setEmailHtml(html))
  })

  // max-w-screen-sm max-w-80
  return (
    <>
      <div className='flex flex-col overflow-y-auto max-w-4xl w-full *:shrink-0'>
        <div className='p-4 space-y-4'>
          <p>Email Template</p>
          <EmailForm
            onSubmit={values => setEmailContent(values)}
            html={emailHtml}
            className='max-w-2xl'
          />
        </div>
        <div className='p-4'> Breakpoint: 896px</div>
        {emailHtml && (
          <iframe className='h-[32rem] px-4 max-w-4xl' srcDoc={emailHtml} />
        )}
        <div className='p-4'> Breakpoint: 320px</div>
        {emailHtml && (
          <iframe className='h-[32rem] px-4 max-w-80' srcDoc={emailHtml} />
        )}
      </div>
    </>
  )
}