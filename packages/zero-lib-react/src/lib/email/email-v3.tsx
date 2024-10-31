import {
  Body,
  Container,
  Column,
  Head,
  Hr,
  Html,
  Img,
  Link,
  Preview,
  Row,
  Section,
  Text,
  render,
} from '@react-email/components'
import * as React from 'react'
import { ZERO_LINKS } from '../constants'

const baseUrl2 = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : ''

const baseUrl =
  'https://raw.githubusercontent.com/zero-company/zero-lib/refs/heads/main/packages/zero-lib-react/public'
// https://raw.githubusercontent.com/zero-company/zero-lib/refs/heads/main/packages/zero-lib-react/public/zero-logo-v1-padding.png

type Props = {
  header: string
  body: string
}

export const EmailV3 = (props: Props) => (
  <Html>
    <Head />
    <Preview>{props.header}</Preview>
    <Body style={main}>
      <Container style={container}>
        <Section style={{ backgroundColor: '#09090B' }}>
          <Row>
            <Column>
              <Img
                style={{
                  ...sectionLogo,
                  paddingTop: '10px',
                  paddingBottom: '10px',
                }}
                src={`${baseUrl}/zero-logo-v1-padding.png`}
                width='40'
                height='40'
                alt='Zero'
              />
            </Column>
          </Row>
        </Section>

        <Section style={paragraphContent}>
          <Text style={heading}>
            {props.header
              .split(' ')
              .filter(x => x !== '[zero]')
              .join(' ')}
          </Text>
          <Text style={{ ...paragraph, whiteSpace: 'pre-line' }}>
            {props.body}
          </Text>
          <Text style={paragraph}>Welcome New User,</Text>
          <Text style={paragraph}>
            We strive to make Google Play a safe and trusted experience for
            users.
          </Text>
          <Text style={paragraph}>
            We&apos;ve added clarifications to our{' '}
            <Link href='https://notifications.google.com' style={link}>
              Target API Level policy
            </Link>
            . Because this is a clarification, our enforcement standards and
            practices for this policy remain the same.
          </Text>
        </Section>
        <Section style={paragraphContent}>
          <Text style={paragraph}>
            We&apos;re noting exceptions to the{' '}
            <Link href='https://notifications.google.com' style={link}>
              Target API Level policy
            </Link>
            , which can be found in our updated{' '}
            <Link href='https://notifications.google.com' style={link}>
              Help Center article.
            </Link>
            These exceptions include permanently private apps and apps that
            target automotive or wearables form factors and are bundled within
            the same package.{' '}
            <Link href='https://notifications.google.com' style={link}>
              Learn more
            </Link>
          </Text>
        </Section>
        <Section style={paragraphContent}>
          <Text style={paragraph}>
            We&apos;re also extending the deadline to give you more time to
            adjust to these changes. Now, apps that target API level 29 or below
            will start experiencing reduced distribution starting{' '}
            <b>Jan 31, 2023</b> instead of Nov 1, 2022. If you need more time to
            update your app, you can request an extension to keep your app
            discoverable to all users until May 1, 2023.
          </Text>
          <Hr style={hr} />
        </Section>

        <Section style={paragraphContent}>
          <Text style={{ ...paragraph, marginBottom: 2, marginTop: 0 }}>
            Thank you,
          </Text>
          <Text
            style={{
              ...paragraph,
              fontSize: '20px',
              marginTop: 2,
              marginBottom: 24,
            }}
          >
            The Zero Team
          </Text>
        </Section>
        <Section
          style={{
            ...containerContact,
            width: '100%',
            paddingTop: '20px',
            paddingBottom: '20px',
            paddingLeft: '40px',
            paddingRight: '40px',
            backgroundColor: '#09090B',
            borderRadius: '0px',
            color: '#d1d1d1',
          }}
        >
          <Row>
            <Link
              style={footerLink}
              href={ZERO_LINKS.website}
              target='_blank'
              rel='noopener noreferrer'
            >
              website
            </Link>
            &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
            <Link
              style={footerLink}
              href={ZERO_LINKS.github}
              target='_blank'
              rel='noopener noreferrer'
            >
              github
            </Link>
            &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
            <Link
              style={footerLink}
              href={ZERO_LINKS.twitter}
              target='_blank'
              rel='noopener noreferrer'
            >
              x
            </Link>
            &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
            <Link
              style={footerLink}
              href={ZERO_LINKS.facebook}
              target='_blank'
              rel='noopener noreferrer'
            >
              facebook
            </Link>
            &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
            <Link
              style={footerLink}
              href={ZERO_LINKS.discord}
              target='_blank'
              rel='noopener noreferrer'
            >
              discord
            </Link>
            &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
            <Link
              style={footerLink}
              href={ZERO_LINKS.buymeacoffee}
              target='_blank'
              rel='noopener noreferrer'
            >
              support
            </Link>
            <Text
              style={{
                ...paragraph,
                fontSize: '12px',
                margin: 0,
                color: '#d1d1d1',
                marginTop: 20,
                lineHeight: '20px',
              }}
            >
              ©2024 Zero, an Open Source company. All Rights Reserved.
            </Text>
          </Row>
        </Section>
      </Container>
    </Body>
  </Html>
)

export const renderEmailV3React = render
export const renderEmailV3 = ({
  header,
  body,
}: {
  header: string
  body: string
}) => render(<EmailV3 header={header} body={body} />, { pretty: true })

const footerLink = {
  color: '#d1d1d1',
  textDecoration: 'underline',
}

const main = {
  backgroundColor: '#dbddde',
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
}

const sectionLogo = {
  padding: '0 40px',
  color: '#fff',
}

const headerBlue = {
  marginTop: '-1px',
  display: 'none',
}

const container = {
  margin: '30px auto',
  backgroundColor: '#fff',
  borderRadius: 5,
  overflow: 'hidden',
}

const containerContact = {
  backgroundColor: '#f0fcff',
  width: '90%',
  borderRadius: '5px',
  overflow: 'hidden',
  paddingLeft: '20px',
}

const heading = {
  fontSize: '14px',
  lineHeight: '26px',
  fontWeight: '700',
  color: '#004dcf',
}

const paragraphContent = {
  padding: '0 40px',
}

const paragraph = {
  fontSize: '14px',
  lineHeight: '22px',
  color: '#3c4043',
}

const link = {
  ...paragraph,
  color: '#004dcf',
}

const hr = {
  borderColor: '#e8eaed',
  margin: '20px 0',
}

const footer = {
  maxWidth: '100%',
}
