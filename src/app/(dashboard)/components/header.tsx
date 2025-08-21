'use client'

import { FC } from 'react'
import { SidebarTrigger } from '@/components/ui/sidebar'
import { useAuth } from '@/app/context/auth.context'
import { Button } from '@/components/ui/button'
import { LogOutIcon } from 'lucide-react'

const Header: FC = () => {
  const { signOut, userInfo } = useAuth()

  return (
    <header className={'flex items-center justify-between px-4 py-2'}>
      <div className={'flex items-center space-x-4'}>
        <SidebarTrigger />
        <h3>Olá, {userInfo?.name}</h3>
      </div>

      <div className={'flex space-x-4'}>
        <Button size={'icon'} onClick={signOut} variant={'ghost'}>
          <LogOutIcon />
        </Button>
      </div>
    </header>
  )
}

export default Header
