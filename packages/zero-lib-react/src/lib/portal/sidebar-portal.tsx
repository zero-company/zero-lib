'use client'

import { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'

type Props = {
  children: React.ReactNode
}

/*
<div id='SidebarPortal' />
<SidebarPortal>
  <p>inside sidebar portal</p>
</SidebarPortal>
*/

export const SidebarPortal = ({ children }: Props) => {
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
