import type { Metadata } from 'next'
import React from 'react'
import { Inter } from 'next/font/google'
import './../globals.css'
import { Inter as FontSans } from 'next/font/google'
import { cn, TooltipProvider } from '@/components/shadcn'
import { ThemeProvider } from '@/components/theme-provider'

const inter = Inter({ subsets: ['latin'] })
const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans',
})

export const metadata: Metadata = {
  title: 'zero-lib-react',
  description: 'zero-lib-react',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body className={cn(fontSans.variable)}>
        <main className='flex w-screen h-screen shrink-0'>
          <ThemeProvider
            attribute='class'
            defaultTheme='dark'
            enableSystem
            disableTransitionOnChange
          >
            <TooltipProvider>{children}</TooltipProvider>
          </ThemeProvider>
        </main>
      </body>
    </html>
  )
}
