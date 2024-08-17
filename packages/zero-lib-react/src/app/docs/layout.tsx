'use client'
import { SidebarPortal } from '@/lib'

type Props = {
  children: React.ReactNode
}

export default function Layout({ children }: Props) {
  return (
    <>
      <SidebarPortal>
        <p>inside docs layout portal</p>
      </SidebarPortal>
      {children}
    </>
  )
}
