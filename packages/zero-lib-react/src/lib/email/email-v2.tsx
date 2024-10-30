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
  Markdown as ReMarkdown,
  TailwindConfig,
} from '@react-email/components'

type Props = {
  children?: React.ReactNode
  preview?: string
  header?: string
  body?: string
  footer?: string
}

export const EmailV2 = (props: Props) => {
  return (
    <Html lang='en'>
      <Text>{props.header}</Text>
      <Hr />
      {props.body}
    </Html>
  )
}
export const renderEmailV2React = render
export const renderEmailV2 = ({
  header,
  body,
}: {
  header: string
  body: string
}) => render(<EmailV2 header={header} body={body} />, { pretty: true })
