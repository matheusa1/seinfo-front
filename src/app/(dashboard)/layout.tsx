import { FC, ReactNode } from 'react'
import { SidebarProvider } from '@/components/ui/sidebar'
import { AppSidebar } from '@/components/app-sidebar'
import Header from '@/app/(dashboard)/components/header'

type TDashboardLayout = {
  children: ReactNode
}

const DashboardLayout: FC<TDashboardLayout> = ({ children }) => {
  return (
    <SidebarProvider>
      <AppSidebar />
      <main className={'flex flex-1 flex-col'}>
        <Header />
        {children}
      </main>
    </SidebarProvider>
  )
}
export default DashboardLayout
