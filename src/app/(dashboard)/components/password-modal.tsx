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

type TPasswordModal = {
  actionButton: ReactNode
}

const PasswordModal: FC<TPasswordModal> = ({ actionButton }) => {
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
        <PasswordForm setIsOpenModal={setIsOpen} />
      </DialogContent>
    </Dialog>
  )
}

export default PasswordModal
