'use client'

import Image from 'next/image'
import { useOrganization, useOrganizationList } from '@clerk/nextjs'
import { PlusIcon } from 'lucide-react'

import { cn } from '@/lib/utils'
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from '@/components/ui/sidebar'

export function PrimaryDashboardSidebar() {
  const { organization: activeOrg } = useOrganization()
  const { userMemberships, setActive } = useOrganizationList({
    userMemberships: {
      infinite: true,
    },
  })

  return (
    <Sidebar
      collapsible='none'
      className='w-[calc(var(--sidebar-width-icon)+1px)]! border-r'
    >
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent className='px-1.5 md:px-0'>
            <SidebarMenu className='gap-4'>
              {userMemberships.data?.map((mem) => {
                const isActive = activeOrg?.id === mem.organization.id
                return (
                  <SidebarMenuItem key={mem.organization.id}>
                    <SidebarMenuButton
                      tooltip={{
                        children: mem.organization.name,
                        hidden: false,
                      }}
                      onClick={() => {
                        if (setActive) {
                          setActive({ organization: mem.organization.id })
                        }
                      }}
                      isActive={isActive}
                      className={cn(
                        'p-0 opacity-80',
                        isActive && 'opacity-100',
                      )}
                    >
                      <Image
                        src={mem.organization.imageUrl}
                        alt={mem.organization.name}
                        width={32}
                        height={32}
                      />
                      <span>{mem.organization.name}</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                )
              })}

              <SidebarMenuItem>
                {/* TODO: Add logic to create org */}
                <SidebarMenuButton
                  tooltip={{
                    children: 'Create organization',
                    hidden: false,
                  }}
                  className='px-2.5 md:px-2 bg-white/10'
                >
                  <PlusIcon />
                  <span>Create organization</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}
