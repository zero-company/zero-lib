'use client'
import { AppLayout } from '@/lib'

type Props = {
  children: React.ReactNode
}

export default function Layout({ children }: Props) {
  return (
    <>
      <AppLayout body={children} />
    </>
  )
}
