import { NextApiResponse, NextApiRequest } from 'next'
import { MailTransporter, MailEmail, TestEmail } from '@/components'

export async function POST(req: NextApiRequest, res: NextApiResponse) {
  const body = JSON.parse(req.body)

  try {
    MailTransporter.sendMail({
      from: `Zero <${MailEmail}>`,
      to: TestEmail,
      subject: `${body.header}`,
      html: `${body.html}`,
    })
  } catch (error) {
    console.log('Failed to send email', error)
  }
}
