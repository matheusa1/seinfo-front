'use client'

import { Dispatch, FC, SetStateAction } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { TCreateCredential } from '@/@core/module/credential/domain/credential.entity'
import { zodResolver } from '@hookform/resolvers/zod'
import { createCredentialSchema } from '@/@core/module/credential/schema/create.schema'
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input, PasswordInput } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'
import { DialogClose } from '@radix-ui/react-dialog'
import { useMutation } from '@tanstack/react-query'
import { credential } from '@/@core/module/credential/infra/container.registry'
import { useAuth } from '@/app/context/auth.context'
import { toast } from 'sonner'

type TPasswordForm = {
  setIsOpenModal: Dispatch<SetStateAction<boolean>>
  data?: TCreateCredential
}

const PasswordForm: FC<TPasswordForm> = ({ setIsOpenModal, data }) => {
  const { KDF } = useAuth()

  const form = useForm<TCreateCredential>({
    resolver: zodResolver(createCredentialSchema),
    defaultValues: {
      password: data?.password
        ? credential.decryptPassword.execute(data?.password, KDF!)
        : '',
      url: data?.url ?? '',
      notes: data?.notes ?? '',
      name: data?.name ?? '',
      username: data?.username ?? '',
    },
  })

  const { mutate } = useMutation({
    mutationKey: ['credentialForm'],
    mutationFn: (params: TCreateCredential) =>
      credential.create.execute(params, KDF!),
  })

  const onHandleSubmit = (data: TCreateCredential) => {
    mutate(data, {
      onSuccess: () => {
        toast.success('Senha salva com sucesso')
        setIsOpenModal(false)
      },
      onError: () => {
        toast.error('Erro ao salvar a senha. Por favor, tente novamente.')
      },
    })
  }

  return (
    <FormProvider {...form}>
      <form
        className={'flex flex-col space-y-4'}
        onSubmit={form.handleSubmit(onHandleSubmit)}
      >
        <div className={'flex flex-col space-y-2'}>
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Nome</FormLabel>
                <FormControl>
                  <Input placeholder="Nome" {...field} />
                </FormControl>
                <FormDescription>
                  Insira o nome da credencial, por exemplo, &#34;Google&#34; ou
                  &#34;GitHub&#34;.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Usuário</FormLabel>
                <FormControl>
                  <Input placeholder="Usuário" {...field} />
                </FormControl>
                <FormDescription>
                  Insira o nome de usuário ou e-mail associado à credencial.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Senha</FormLabel>
                <FormControl>
                  <PasswordInput placeholder="Senha" {...field} />
                </FormControl>
                <FormDescription>
                  Insira a senha para a credencial. Certifique-se de que seja
                  forte e segura.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="url"
            render={({ field }) => (
              <FormItem>
                <FormLabel>URL</FormLabel>
                <FormControl>
                  <Input placeholder="URL" {...field} />
                </FormControl>
                <FormDescription>
                  Insira a URL do site ou serviço associado à credencial, por
                  exemplo, &#34;https://www.google.com&#34;.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="notes"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Notas</FormLabel>
                <FormControl>
                  <Textarea placeholder="Notas" {...field} />
                </FormControl>
                <FormDescription>
                  Insira quaisquer notas adicionais ou informações relevantes
                  sobre a credencial.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className={'flex flex-col space-y-2'}>
          <DialogClose asChild>
            <Button block variant={'secondary'} type={'button'}>
              Cancelar
            </Button>
          </DialogClose>

          <Button block>Salvar</Button>
        </div>
      </form>
    </FormProvider>
  )
}

export default PasswordForm
