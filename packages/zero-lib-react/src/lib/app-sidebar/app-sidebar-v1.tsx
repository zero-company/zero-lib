'use client'
import {
  Calendar,
  Home,
  Inbox,
  Search,
  Settings,
  ChevronDown,
  LifeBuoy,
  Send,
} from 'lucide-react'
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
} from '@/lib'

const items = [
  {
    title: 'Components',
    url: '#',
    icon: Home,
  },
  {
    title: 'Docs',
    url: '#',
    icon: Inbox,
  },
  {
    title: 'About',
    url: '#',
    icon: Calendar,
  },
  {
    title: 'Search',
    url: '#',
    icon: Search,
  },
  {
    title: 'Settings',
    url: '#',
    icon: Settings,
  },
]

type Props = {}

export const AppSidebarV1 = ({}: Props) => {
  return (
    <Sidebar>
      <SidebarContent>
        <Collapsible className='group/collapsible'>
          <SidebarGroup>
            <SidebarGroupLabel
              asChild
              className='text-sm hover:bg-sidebar-accent hover:text-sidebar-accent-foreground'
            >
              <CollapsibleTrigger>
                Help
                <ChevronDown className='ml-auto transition-transform group-data-[state=open]/collapsible:rotate-180' />
              </CollapsibleTrigger>
            </SidebarGroupLabel>
            <CollapsibleContent>
              <SidebarGroupContent>
                <SidebarMenu>
                  <SidebarMenuItem>
                    <SidebarMenuButton>
                      <LifeBuoy />
                      Support
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton>
                      <Send />
                      Feedback
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                </SidebarMenu>
              </SidebarGroupContent>
            </CollapsibleContent>
          </SidebarGroup>
        </Collapsible>
      </SidebarContent>
    </Sidebar>
  )
}
