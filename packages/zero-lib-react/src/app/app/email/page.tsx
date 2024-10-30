'use client'
import {
  EmailV1,
  renderEmailV1React,
  renderEmailV1,
  Textarea,
  renderEmailV2,
  renderEmailV3,
} from '@/lib'
import { useState, useEffect } from 'react'
import { EmailForm } from './email-form'

export default function Page() {
  const [emailHtml, setEmailHtml] = useState<string | null>(null)
  const [emailContent, setEmailContent] = useState({
    header: `[zero] User Registration`,
    body: `
  #### Changes
    - Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
    - Proin ullamcorper augue nisi, id ornare orci placerat ac.
    - Integer condimentum turpis vehicula turpis lacinia, vel ultrices urna aliquam.
    - Maecenas dictum gravida dictum.

    `,
  })

  useEffect(() => {
    renderEmailV3({
      header: emailContent.header,
      body: emailContent.body,
    }).then(html => setEmailHtml(html))
  })

  return (
    <>
      <div className='flex flex-col overflow-y-auto max-w-4xl w-full *:shrink-0'>
        <div className='p-4 space-y-4'>
          <p>Email Template</p>
          <EmailForm
            defaultValues={emailContent}
            onSubmit={values => setEmailContent(values)}
            html={emailHtml}
            className='max-w-2xl'
          />
        </div>
        <div className='p-4'> Breakpoint: 896px</div>
        {emailHtml && (
          <iframe className='h-[48rem] px-4 max-w-2xl' srcDoc={emailHtml} />
        )}
        <div className='p-4'> Breakpoint: 320px</div>
        {emailHtml && (
          <iframe className='h-[48rem] px-4 max-w-80' srcDoc={emailHtml} />
        )}
      </div>
    </>
  )
}
