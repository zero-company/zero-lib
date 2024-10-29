'use client'
import {
  render,
  Html,
  Button,
  Body,
  Container,
  Column,
  Head,
  Heading,
  Hr,
  Img,
  Link,
  Preview,
  Row,
  Section,
  Text,
  Tailwind,
  Markdown,
  TailwindConfig,
} from '@react-email/components'

const twconfig: TailwindConfig = {
  theme: {
    extend: {
      colors: {
        border: 'hsl(240 3.7% 15.9%)',
        background: 'hsl(240 10% 3.9%)',
        foreground: 'hsl(0 0% 98%)',
      },
    },
  },
}

type Props = {
  children: React.ReactNode
  preview?: string
}

export const EmailV1 = ({ children, preview }: Props) => {
  return (
    <Html lang='en'>
      <Head />
      {preview && <Preview>{preview}</Preview>}
      <Tailwind config={twconfig}>
        <Body className='bg-background text-foreground my-auto mx-auto font-sans px-2'>
          <Container className='border border-solid border-border rounded my-[40px] mx-auto p-[20px] max-w-[465px]'>
            {children}
          </Container>
        </Body>
      </Tailwind>
    </Html>
  )
}

export const renderEmailV1 = render
