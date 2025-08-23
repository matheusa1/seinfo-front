'use client'

import { FC } from 'react'
import { SidebarTrigger } from '@/components/ui/sidebar'
import { useAuth } from '@/app/context/auth.context'
import { Button } from '@/components/ui/button'
import { LogOutIcon } from 'lucide-react'
import { ThemeToggleButton } from '@/components/theme-toggle'

const Header: FC = () => {
  const { signOut, userInfo } = useAuth()

  return (
    <header className={'flex items-center justify-between py-2'}>
      <div className={'flex items-center space-x-4'}>
        <SidebarTrigger />
        <h4>Olá, {userInfo?.name}</h4>
      </div>

      <div className={'flex space-x-4'}>
        <ThemeToggleButton />
        <Button size={'icon'} onClick={signOut} variant={'ghost'}>
          <LogOutIcon />
        </Button>
      </div>
    </header>
  )
}

export default Header
