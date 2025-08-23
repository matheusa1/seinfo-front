'use client'

import { FC } from 'react'
import PasswordModal from '@/app/(dashboard)/components/password-modal'
import { Button } from '@/components/ui/button'
import { EditIcon } from 'lucide-react'
import ConfirmDeletionModal from '@/app/(dashboard)/components/confirm-deletion-modal'
import { TCredential } from '@/@core/module/credential/domain/credential.entity'
import { credential } from '@/@core/module/credential/infra/container.registry'
import { toast } from 'sonner'
import { useAuth } from '@/app/context/auth.context'
import { PasswordInput } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

type TPasswordItem = {
  data: TCredential
}

const PasswordItem: FC<TPasswordItem> = ({ data }) => {
  const { KDF } = useAuth()

  const decryptPassword = (encrypted: string) => {
    try {
      return credential.decryptPassword.execute(encrypted, KDF!)
    } catch (err: unknown) {
      const typedErr = err as Error
      toast.error(typedErr.message)
    }
  }

  return (
    <div className="flex items-center justify-between border-b p-4">
      <div>
        <h4 className="text-lg font-semibold">{data.name}</h4>
        {data.username && (
          <div className={'flex flex-col space-y-1'}>
            <Label>Nome de usuário</Label>
            <h4 className="text-lg font-semibold">{data.username}</h4>
          </div>
        )}

        {data.password && (
          <div className={'flex flex-col space-y-1'}>
            <Label>Senha</Label>
            <PasswordInput
              value={decryptPassword(data.password)}
              contentEditable={'plaintext-only'}
            />
          </div>
        )}
      </div>

      {data?.notes && (
        <div className={'flex max-w-sm flex-col space-y-1'}>
          <Label>Notas:</Label>
          <p>{data.notes}</p>
        </div>
      )}

      <div className={'flex space-x-2'}>
        <PasswordModal
          actionButton={
            <Button size={'icon'} variant={'ghost'}>
              <EditIcon />{' '}
            </Button>
          }
          data={data}
        />
        <ConfirmDeletionModal id={data.id} />
      </div>
    </div>
  )
}

export default PasswordItem
