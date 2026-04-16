import { UserButton } from '@clerk/nextjs'

import { DashboardSidebar } from './_components/dashboard-sidebar'
import { Separator } from '@/components/ui/separator'
import {
  SidebarProvider,
  SidebarInset,
  SidebarTrigger,
} from '@/components/ui/sidebar'

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <SidebarProvider
      style={
        {
          '--sidebar-width': '350px',
        } as React.CSSProperties
      }
    >
      <DashboardSidebar />

      <SidebarInset>
        <header className='sticky top-0 flex shrink-0 items-center gap-2 border-b bg-background p-4'>
          <SidebarTrigger className='-ml-1' />
          <Separator
            orientation='vertical'
            className='mr-2 data-[orientation=vertical]:h-4'
          />

          <div className='flex-1'>Search</div>

          <UserButton />
        </header>

        {children}
      </SidebarInset>
    </SidebarProvider>
  )
}
