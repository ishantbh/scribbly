import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from '@/components/ui/sidebar'
import Link from 'next/link'

type NavBoardsProps = {
  boards: {
    id: string
    title: string
    organization: string
    isFavorite: boolean
  }[]
}

export function NavBoards({ boards }: NavBoardsProps) {
  const favoriteBoards = boards.filter((board) => board.isFavorite)

  return (
    <>
      {/* Favorite Boards */}
      <SidebarGroup>
        <SidebarGroupLabel>Favorites</SidebarGroupLabel>
        <SidebarGroupContent>
          <SidebarMenu>
            {favoriteBoards.map((board) => (
              <SidebarMenuItem key={board.id}>
                <SidebarMenuButton asChild>
                  <Link href={`/boards/${board.id}`}>{board.title}</Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarGroupContent>
      </SidebarGroup>

      {/* All Boards */}
      <SidebarGroup>
        <SidebarGroupLabel>All Boards</SidebarGroupLabel>
        <SidebarGroupContent>
          <SidebarMenu>
            {boards.map((board) => (
              <SidebarMenuItem key={board.id}>
                <SidebarMenuButton asChild>
                  <Link href={`/boards/${board.id}`}>{board.title}</Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarGroupContent>
      </SidebarGroup>
    </>
  )
}
