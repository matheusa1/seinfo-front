'use client'
import { FC, useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import { credential } from '@/@core/module/credential/infra/container.registry'
import { useAuth } from '@/app/context/auth.context'
import { toast } from 'sonner'
import PasswordModal from '@/app/(dashboard)/components/password-modal'
import { Button } from '@/components/ui/button'
import { EditIcon, WindIcon } from 'lucide-react'
import ConfirmDeletionModal from '@/app/(dashboard)/components/confirm-deletion-modal'

const PasswordList: FC = () => {
  const { KDF } = useAuth()
  const [page, setPage] = useState<number>(1)
  const [limit, setLimit] = useState<number>(10)

  const { data } = useQuery({
    queryKey: ['CredentialList', page, limit],
    queryFn: () => credential.pagination.execute({ page, limit }),
  })

  const decryptPassword = (encrypted: string) => {
    try {
      return credential.decryptPassword.execute(encrypted, KDF!)
    } catch (err: unknown) {
      const typedErr = err as Error
      toast.error(typedErr.message)
    }
  }

  if (!data || data.data.length === 0) {
    return (
      <div className={'flex flex-col items-center'}>
        <WindIcon />
        <p>Não há dados.</p>
      </div>
    )
  }

  return (
    <div>
      {data?.data.map((cred) => (
        <div key={cred.id} className="border-b p-4">
          <h4 className="text-lg font-semibold">{cred.name}</h4>
          <p className="text-sm text-gray-600">
            {cred.password && decryptPassword(cred.password)}
          </p>
          <PasswordModal
            actionButton={
              <Button size={'icon'} variant={'ghost'}>
                <EditIcon />{' '}
              </Button>
            }
            data={cred}
          />
          <ConfirmDeletionModal id={cred.id} />
        </div>
      ))}
    </div>
  )
}

export default PasswordList
