'use client'
import {
  Calendar,
  Home,
  Inbox,
  Search,
  Settings,
  ChevronDown,
  ChevronRight,
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
  SidebarMenuSub,
  SidebarMenuSubItem,
  SidebarMenuSubButton,
} from '@/lib'
import Link from 'next/link'

const items = [
  {
    title: 'Getting Started',
    url: '#',
    items: [
      {
        title: 'Installation',
        url: '#',
      },
      {
        title: 'Project Structure',
        url: '#',
      },
    ],
  },
  {
    title: 'Building Your Application',
    url: '#',
    items: [
      {
        title: 'Routing',
        url: '#',
      },
      {
        title: 'Data Fetching',
        url: '#',
        isActive: true,
      },
      {
        title: 'Rendering',
        url: '#',
      },
      {
        title: 'Caching',
        url: '#',
      },
      {
        title: 'Styling',
        url: '#',
      },
      {
        title: 'Optimizing',
        url: '#',
      },
      {
        title: 'Configuring',
        url: '#',
      },
      {
        title: 'Testing',
        url: '#',
      },
      {
        title: 'Authentication',
        url: '#',
      },
      {
        title: 'Deploying',
        url: '#',
      },
      {
        title: 'Upgrading',
        url: '#',
      },
      {
        title: 'Examples',
        url: '#',
      },
    ],
  },
  {
    title: 'API Reference',
    url: '#',
    items: [
      {
        title: 'Components',
        url: '#',
      },
      {
        title: 'File Conventions',
        url: '#',
      },
      {
        title: 'Functions',
        url: '#',
      },
      {
        title: 'next.config.js Options',
        url: '#',
      },
      {
        title: 'CLI',
        url: '#',
      },
      {
        title: 'Edge Runtime',
        url: '#',
      },
    ],
  },
  {
    title: 'Architecture',
    url: '#',
    items: [
      {
        title: 'Accessibility',
        url: '#',
      },
      {
        title: 'Fast Refresh',
        url: '#',
      },
      {
        title: 'Next.js Compiler',
        url: '#',
      },
      {
        title: 'Supported Browsers',
        url: '#',
      },
      {
        title: 'Turbopack',
        url: '#',
      },
    ],
  },
]

type Props = {
  sidebarGroups?: React.ReactNode
}

export const AppSidebarV1 = ({ sidebarGroups }: Props) => {
  return (
    <Sidebar className='*:bg-(--background)'>
      <SidebarContent>
        {sidebarGroups}
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item, index) => (
                <Collapsible
                  key={index}
                  className='group/collapsible'
                  defaultOpen={index === 0}
                >
                  <SidebarMenuItem>
                    <CollapsibleTrigger asChild>
                      <SidebarMenuButton>
                        <span>{item.title}</span>
                        <ChevronRight className='transition-transform ml-auto group-data-[state=open]/collapsible:rotate-90' />
                      </SidebarMenuButton>
                    </CollapsibleTrigger>
                    <CollapsibleContent>
                      <SidebarMenuSub>
                        {item.items.map((subItem, subIndex) => (
                          <SidebarMenuSubItem key={subIndex}>
                            <SidebarMenuSubButton asChild>
                              <Link href={subItem.url}>
                                <span>{subItem.title}</span>
                              </Link>
                            </SidebarMenuSubButton>
                          </SidebarMenuSubItem>
                        ))}
                      </SidebarMenuSub>
                    </CollapsibleContent>
                  </SidebarMenuItem>
                </Collapsible>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}
