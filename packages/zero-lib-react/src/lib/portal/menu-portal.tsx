'use client'

import { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'

type Props = {
  sidebarIcons?: React.ReactNode
  sidebarMenu?: React.ReactNode
  header?: React.ReactNode
  children: React.ReactNode
}

export const MenuPortal = ({ children }: Props) => {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    return () => setMounted(false)
  }, [])

  return mounted
    ? createPortal(
        children,
        document.querySelector('#SidebarPortal') as HTMLElement,
      )
    : null
}
