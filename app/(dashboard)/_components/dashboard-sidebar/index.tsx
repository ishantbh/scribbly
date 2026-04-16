import { Sidebar } from '@/components/ui/sidebar'
import { PrimaryDashboardSidebar } from './primary'

export function DashboardSidebar({
  ...props
}: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar
      collapsible='icon'
      className='overflow-hidden *:data-[sidebar=sidebar]:flex-row'
      {...props}
    >
      {/* This is the first sidebar */}
      {/* We disable collapsible and adjust width to icon. */}
      {/* This will make the sidebar appear as icons. */}
      <PrimaryDashboardSidebar />
    </Sidebar>
  )
}
