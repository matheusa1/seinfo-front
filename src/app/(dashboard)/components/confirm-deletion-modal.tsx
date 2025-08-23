'use client'

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog'
import { Button } from '@/components/ui/button'
import { TrashIcon } from 'lucide-react'
import { FC, useState } from 'react'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { credential } from '@/@core/module/credential/infra/container.registry'
import { toast } from 'sonner'

type TConfirmDeletionModal = {
  id: string
}

const ConfirmDeletionModal: FC<TConfirmDeletionModal> = ({ id }) => {
  const [open, setIsOpen] = useState<boolean>(false)
  const queryClient = useQueryClient()

  const { mutate } = useMutation({
    mutationKey: ['deleteCredential'],
    mutationFn: () => credential.delete.execute(id),
  })

  const onHandleConfirm = () => {
    mutate(undefined, {
      onSuccess: async () => {
        toast.success('Credencial apagada com sucesso!')
        await queryClient.invalidateQueries({
          queryKey: ['CredentialList'],
        })
        setIsOpen(false)
      },
      onError: () => {
        toast.error('Erro ao apagar a credencial. Tente novamente mais tarde.')
      },
    })
  }

  return (
    <AlertDialog open={open} onOpenChange={setIsOpen}>
      <AlertDialogTrigger asChild>
        <Button variant={'destructive'}>
          <TrashIcon />
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>
            Deseja realmente apagar esta credencial?
          </AlertDialogTitle>
          <AlertDialogDescription>
            Essa ação não pode ser desfeita. Isso apagará permanentemente a
            credencial associada.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancelar</AlertDialogCancel>
          <AlertDialogAction onClick={onHandleConfirm}>
            Sim, desejo apagar.
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}

export default ConfirmDeletionModal
