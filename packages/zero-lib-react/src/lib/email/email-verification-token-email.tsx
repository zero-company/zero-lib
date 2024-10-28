import { Html, Button } from '@react-email/components'

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
