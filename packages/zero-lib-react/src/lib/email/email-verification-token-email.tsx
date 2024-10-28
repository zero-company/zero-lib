'use client'
import { Html, Button, render } from '@react-email/components'

type Props = {
  url: string
}

export const EmailVerificationTokenEmail = ({ url }: Props) => {
  return (
    <Html lang='en'>
      <Button href={url}>Click me</Button>
    </Html>
  )
}

export const renderEmailVerificationTokenEmail = async () =>
  await render(<EmailVerificationTokenEmail url='https://example.com' />)
