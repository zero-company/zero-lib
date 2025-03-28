'use client'
import { LuChevronRight } from 'react-icons/lu'
import {
  Sidebar,
  SidebarHeader,
  SidebarFooter,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  Collapsible,
  CollapsibleTrigger,
  CollapsibleContent,
  SidebarMenuSub,
  SidebarMenuSubItem,
  SidebarMenuSubButton,
} from '@/lib'

type Props = {
  inTriggerButton?: React.ReactNode
  disabled?: boolean
  defaultOpen?: boolean
  menuSubButtons?: {
    href?: string
    text?: string
    child?: React.ReactNode
    onClick?: () => void
  }[]
}

export const SidebarGroupV1Collapsible = ({
  inTriggerButton,
  disabled,
  menuSubButtons,
  defaultOpen,
}: Props) => {
  return (
    <SidebarGroup>
      <SidebarGroupContent>
        <SidebarMenu>
          <Collapsible className='group/collapsible' defaultOpen={defaultOpen}>
            <SidebarMenuItem>
              <CollapsibleTrigger asChild disabled={disabled}>
                <SidebarMenuButton>
                  {inTriggerButton}
                  <LuChevronRight className='transition-transform ml-auto group-data-[state=open]/collapsible:rotate-90' />
                </SidebarMenuButton>
              </CollapsibleTrigger>
              <CollapsibleContent>
                <SidebarMenuSub>
                  {menuSubButtons?.map((button, key) => (
                    <SidebarMenuSubItem key={key}>
                      <SidebarMenuSubButton
                        asChild
                        onClick={button.onClick}
                        className='cursor-default'
                      >
                        {button.text ? (
                          <a href={button.href}>
                            <span>{button.text}</span>
                          </a>
                        ) : (
                          button.child
                        )}
                      </SidebarMenuSubButton>
                    </SidebarMenuSubItem>
                  ))}
                </SidebarMenuSub>
              </CollapsibleContent>
            </SidebarMenuItem>
          </Collapsible>
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  )
}
