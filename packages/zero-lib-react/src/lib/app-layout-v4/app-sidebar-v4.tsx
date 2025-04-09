'use client'
import {
  cn,
  Sidebar,
  SidebarHeader,
  SidebarContent,
  SidebarFooter,
} from '@/lib'

type Props = {
  header?: React.ReactNode
  content?: React.ReactNode
  footer?: React.ReactNode
}

export const AppSidebarV4 = ({ header, content, footer }: Props) => {
  return (
    <Sidebar
      className='*:bg-(--background) *:divide-y !border-r-0'
      collapsible='icon'
      data-name='AppSidebarV4'
    >
      {header && <SidebarHeader>{header}</SidebarHeader>}
      {content && <SidebarContent>{content}</SidebarContent>}
      {footer && <SidebarFooter>{footer}</SidebarFooter>}
    </Sidebar>
  )
}
