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
  preview?: string
  header?: string
  body?: string
  footer?: string
}

export const EmailV2 = (props: Props) => {
  return (
    <Html lang='en'>
      <Head />
      {props.preview && <Preview>{`${props.preview}`}</Preview>}
      <Body style={body}>
        <Text>{props.header}</Text>
        <Hr />
        {props.body}
      </Body>
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

const body = {
  backgroundColor: '#09090B',
  color: '#ffffff',
  borderRadius: '6px', // rounded-md
  border: '1px solid #27272a', // hsl(240, 3.7%, 15.9%)
}
