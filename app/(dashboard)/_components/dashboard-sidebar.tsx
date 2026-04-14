import { NavBoards } from './nav-boards'
import { OrganizationSwitcher } from './organization-switcher'
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarRail,
} from '@/components/ui/sidebar'

export function DashboardSidebar({
  ...props
}: React.ComponentProps<typeof Sidebar>) {
  // Sample data
  const data = {
    organizations: [
      {
        id: 'org-1',
        name: 'Acme Inc',
      },
      {
        id: 'org-2',
        name: 'Acme Corp.',
      },
      {
        id: 'org-3',
        name: 'Evil Corp.',
      },
    ],
    boards: [
      {
        id: 'board-1',
        title: 'Board 1',
        organization: 'org-1',
        isFavorite: true,
      },
      {
        id: 'board-2',
        title: 'Board 2',
        organization: 'org-1',
        isFavorite: false,
      },
      {
        id: 'board-3',
        title: 'Board 3',
        organization: 'org-1',
        isFavorite: false,
      },
      {
        id: 'board-4',
        title: 'Board 4',
        organization: 'org-1',
        isFavorite: true,
      },
      {
        id: 'board-5',
        title: 'Board 5',
        organization: 'org-1',
        isFavorite: false,
      },
      {
        id: 'board-6',
        title: 'Board 6',
        organization: 'org-1',
        isFavorite: false,
      },
    ],
  }

  return (
    <Sidebar {...props}>
      <SidebarHeader>
        <OrganizationSwitcher organizations={data.organizations} />
      </SidebarHeader>
      <SidebarContent>
        <NavBoards boards={data.boards} />
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  )
}
