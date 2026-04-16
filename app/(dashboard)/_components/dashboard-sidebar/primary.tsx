'use client'

import Image from 'next/image'
import {
  CreateOrganization,
  useOrganization,
  useOrganizationList,
} from '@clerk/nextjs'
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
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'

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
                <Dialog>
                  <DialogTrigger asChild>
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
                  </DialogTrigger>
                  <DialogContent
                    showCloseButton={false}
                    className='p-0 max-w-fit sm:max-w-fit'
                  >
                    <DialogHeader className='sr-only'>
                      <DialogTitle>Create Organization</DialogTitle>
                    </DialogHeader>
                    <CreateOrganization />
                  </DialogContent>
                </Dialog>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}
