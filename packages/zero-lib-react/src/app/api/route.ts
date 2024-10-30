import { NextResponse, NextRequest } from 'next/server'
import { MailTransporter, MailEmail, TestEmail } from '@/components'

export async function POST(req: NextRequest, res: NextResponse) {
  const { header, body } = await req.json()
  console.log('header', header)
  try {
    await MailTransporter.sendMail({
      from: `Zero <${MailEmail}>`,
      to: TestEmail,
      subject: `${body.header}`,
      html: `${body.html}`,
    })
  } catch (error) {
    console.log('Failed to send email', error)
  }
}
