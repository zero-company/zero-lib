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

const normalizeCss = `
/*! modern-normalize v3.0.1 | MIT License | https://github.com/sindresorhus/modern-normalize */
*,::after,::before{box-sizing:border-box}html{font-family:system-ui,'Segoe UI',Roboto,Helvetica,Arial,sans-serif,'Apple Color Emoji','Segoe UI Emoji';line-height:1.15;-webkit-text-size-adjust:100%;tab-size:4}body{margin:0}b,strong{font-weight:bolder}code,kbd,pre,samp{font-family:ui-monospace,SFMono-Regular,Consolas,'Liberation Mono',Menlo,monospace;font-size:1em}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}table{border-color:currentcolor}button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0}[type=button],[type=reset],[type=submit],button{-webkit-appearance:button}legend{padding:0}progress{vertical-align:baseline}::-webkit-inner-spin-button,::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}summary{display:list-item}
/*# sourceMappingURL=/sm/d2d8cd206fb9f42f071e97460f3ad9c875edb5e7a4b10f900a83cdf8401c53a9.map */
`
const twConfig: TailwindConfig = {
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
const tw = {
  // Polyfills to fix lack of base styles, https://github.com/resend/react-email/issues/1615
  borderT: ' border-solid border-border border-x-0 border-t border-b-0',
  borderB: 'border-solid border-border border-x-0 border-b border-t-0',
}

type Props = {
  children: React.ReactNode
  preview?: string
}

const Header = ({ className }: { className?: string }) => (
  <div className={`flex ${className}`}>
    <span>Header</span>
    <span>Logo</span>
  </div>
)

const Footer = ({ className }: { className?: string }) => (
  <div className={`flex ${className}`}>
    <span>Footer</span>
    <span>Socials</span>
  </div>
)

export const EmailV1 = ({ children, preview }: Props) => {
  return (
    <Html lang='en'>
      <Head>
        <style type='text/css'>{normalizeCss}</style>
      </Head>
      {preview && <Preview>{preview}</Preview>}
      <Tailwind config={twConfig}>
        <Body
          className='bg-background text-foreground my-auto mx-auto font-sans p-2'
          style={{}}
        >
          <div className='border border-solid border-border rounded max-w-[465px] mx-auto'>
            <Header className={`${tw.borderB}`} />
            <div className={`p-2`}>{children}</div>
            <Footer className={`${tw.borderT}`} />
          </div>
        </Body>
      </Tailwind>
    </Html>
  )
}

export const renderEmailV1 = render
