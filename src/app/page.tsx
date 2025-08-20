'use client'

import Link from 'next/link'
import { useAuth } from '@/app/context/auth.context'
import { Button } from '@/components/ui/button'

export default function Home() {
  const { signOut } = useAuth()

  return (
    <main className={'flex space-x-50 bg-red-500'}>
      <div>Hello world!</div>
      <div>Bom dia</div>
      <Link href={'/auth/sign-up'}>Tela de cadastro</Link>
      <Button onClick={signOut}>Sair</Button>
    </main>
  )
}
