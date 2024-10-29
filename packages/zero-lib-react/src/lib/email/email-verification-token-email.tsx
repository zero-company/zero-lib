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
  TailwindProps,
  TailwindConfig,
} from '@react-email/components'

type Props = {
  username?: string
  userImage?: string
  invitedByUsername?: string
  invitedByEmail?: string
  teamName?: string
  teamImage?: string
  inviteLink?: string
  inviteFromIp?: string
  inviteFromLocation?: string
}

const baseUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : ''

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

// TODO: Add RSA digital signature qrcode
export const EmailVerificationTokenEmail = ({
  username,
  userImage,
  invitedByUsername,
  invitedByEmail,
  teamName,
  teamImage,
  inviteLink,
  inviteFromIp,
  inviteFromLocation,
}: Props) => {
  return (
    <Html lang='en'>
      <Head />
      {/* <Preview>{previewText}</Preview> */}
      <Tailwind config={twconfig}>
        <Body className='bg-background text-foreground my-auto mx-auto font-sans px-2'>
          <Container className='border border-solid border-border rounded my-[40px] mx-auto p-[20px] max-w-[465px]'>
            <Section className='mt-[32px]'>
              <Img
                src={`${baseUrl}/static/vercel-logo.png`}
                width='40'
                height='37'
                alt='Vercel'
                className='my-0 mx-auto'
              />
            </Section>
            <Heading className='text-[24px] font-normal text-center p-0 my-[30px] mx-0'>
              Join <strong>{teamName}</strong> on <strong>Vercel</strong>
            </Heading>
            <Text className='text-[14px] leading-[24px]'>
              Hello {username},
            </Text>
            <Text className='text-[14px] leading-[24px]'>
              <strong>{invitedByUsername}</strong> (
              <Link
                href={`mailto:${invitedByEmail}`}
                className='text-blue-600 no-underline'
              >
                {invitedByEmail}
              </Link>
              ) has invited you to the <strong>{teamName}</strong> team on{' '}
              <strong>Vercel</strong>.
            </Text>
            <Section>
              <Row>
                <Column align='right'>
                  <Img
                    className='rounded-full'
                    src={userImage}
                    width='64'
                    height='64'
                  />
                </Column>
                <Column align='center'>
                  <Img
                    src={`${baseUrl}/static/vercel-arrow.png`}
                    width='12'
                    height='9'
                    alt='invited you to'
                  />
                </Column>
                <Column align='left'>
                  <Img
                    className='rounded-full'
                    src={teamImage}
                    width='64'
                    height='64'
                  />
                </Column>
              </Row>
            </Section>
            <Section className='text-center mt-[32px] mb-[32px]'>
              <Button
                className='bg-[#000000] rounded text-white text-[12px] font-semibold no-underline text-center px-5 py-3'
                href={inviteLink}
              >
                Join the team
              </Button>
            </Section>
            <Text className='text-[14px] leading-[24px]'>
              or copy and paste this URL into your browser:{' '}
              <Link href={inviteLink} className='text-blue-600 no-underline'>
                {inviteLink}
              </Link>
            </Text>
            <Hr className='border border-solid border-[#eaeaea] my-[26px] mx-0 w-full' />
            <Text className='text-[#666666] text-[12px] leading-[24px]'>
              This invitation was intended for{' '}
              <span className='text-foreground'>{username}</span>. This invite
              was sent from{' '}
              <span className='text-foreground'>{inviteFromIp}</span> located in{' '}
              <span className='text-foreground'>{inviteFromLocation}</span>. If
              you were not expecting this invitation, you can ignore this email.
              If you are concerned about your account&#39;s safety, please reply
              to this email to get in touch with us.
            </Text>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  )
}

export const renderEmailVerificationTokenEmail = async () =>
  await render(
    <EmailVerificationTokenEmail
      username='alanturing'
      userImage={`${baseUrl}/static/vercel-user.png`}
      invitedByUsername='Alan'
      invitedByEmail='alan.turing@example.com'
      teamName='Enigma'
      teamImage={`${baseUrl}/static/vercel-team.png`}
      inviteLink='https://vercel.com/teams/invite/foo'
      inviteFromIp='204.13.186.218'
      inviteFromLocation='São Paulo, Brazil'
    />,
  )
