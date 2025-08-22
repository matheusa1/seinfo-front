'use client'

import { FC, ReactNode, useState } from 'react'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import PasswordForm from '@/app/(dashboard)/components/password-form'
import { TCredential } from '@/@core/module/credential/domain/credential.entity'

type TPasswordModal = {
  actionButton: ReactNode
  data?: TCredential
}

const PasswordModal: FC<TPasswordModal> = ({ actionButton, data }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false)

  return (
    <Dialog onOpenChange={setIsOpen} open={isOpen}>
      <DialogTrigger asChild>{actionButton}</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Senhas</DialogTitle>
          <DialogDescription>
            Salve sua senha com as informações abaixo.
          </DialogDescription>
        </DialogHeader>
        <PasswordForm setIsOpenModal={setIsOpen} data={data} />
      </DialogContent>
    </Dialog>
  )
}

export default PasswordModal
