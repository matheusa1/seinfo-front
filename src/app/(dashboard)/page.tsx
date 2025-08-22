import PasswordModal from '@/app/(dashboard)/components/password-modal'
import { Button } from '@/components/ui/button'
import PasswordList from '@/app/(dashboard)/components/password-list'

export default function Home() {
  return (
    <main className={'flex flex-1 flex-col space-y-4'}>
      <header className={'flex h-fit w-full items-center justify-between'}>
        <h3>Minhas senhas</h3>
        <PasswordModal actionButton={<Button>Criar nova</Button>} />
      </header>
      <PasswordList />
    </main>
  )
}
