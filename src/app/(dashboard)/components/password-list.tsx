'use client'
import { FC } from 'react'
import { useQuery } from '@tanstack/react-query'
import { credential } from '@/@core/module/credential/infra/container.registry'
import { useAuth } from '@/app/context/auth.context'
import { toast } from 'sonner'
import PasswordModal from '@/app/(dashboard)/components/password-modal'
import { Button } from '@/components/ui/button'
import { EditIcon } from 'lucide-react'

const PasswordList: FC = () => {
  const { KDF } = useAuth()

  const { data } = useQuery({
    queryKey: ['CredentialList'],
    queryFn: () => credential.pagination.execute({ page: 1, limit: 10 }),
  })

  const decryptPassword = (encrypted: string) => {
    try {
      return credential.decryptPassword.execute(encrypted, KDF!)
    } catch (err: unknown) {
      const typedErr = err as Error
      toast.error(typedErr.message)
    }
  }

  return (
    <div>
      {data?.data.map((cred) => (
        <div key={cred.id} className="border-b p-4">
          <h4 className="text-lg font-semibold">{cred.name}</h4>
          <p className="text-sm text-gray-600">
            {decryptPassword(cred.password)}
          </p>
          <PasswordModal
            actionButton={
              <Button size={'icon'} variant={'ghost'}>
                <EditIcon />{' '}
              </Button>
            }
            data={cred}
          />
        </div>
      ))}
    </div>
  )
}

export default PasswordList
