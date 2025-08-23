'use client'

import { FC } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { CardContent, CardFooter } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input, PasswordInput } from '@/components/ui/input'
import { useMutation } from '@tanstack/react-query'
import { auth } from '@/@core/module/auth/infra/container.registry'
import { toast } from 'sonner'
import { useRouter } from 'next/navigation'
import { TSignInSchema } from '@/@core/module/auth/domain/sign-in.entity'
import { signInSchema } from '@/@core/module/auth/schema/sign-in.schema'
import { useAuth } from '@/app/context/auth.context'

const SignInForm: FC = () => {
  const form = useForm<TSignInSchema>({
    resolver: zodResolver(signInSchema),
    defaultValues: {
      password: '',
      email: '',
    },
  })

  const { mutate } = useMutation({
    mutationKey: ['signIn'],
    mutationFn: (params: TSignInSchema) => auth.signIn.execute(params),
  })

  const router = useRouter()
  const { signIn } = useAuth()

  const onHandleSubmit = (formData: TSignInSchema) => {
    mutate(formData, {
      onError: (err) => {
        toast.error(err.message)
      },
      onSuccess: async (response) => {
        toast.success('Login realizado com sucesso')
        signIn(response.access_token, formData.password)
        form.reset()
      },
    })
  }

  return (
    <FormProvider {...form}>
      <form
        onSubmit={form.handleSubmit(onHandleSubmit)}
        className={'flex flex-col space-y-4'}
      >
        <CardContent className={'flex flex-col space-y-2'}>
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>E-mail</FormLabel>
                <FormControl>
                  <Input placeholder="shadcn" {...field} />
                </FormControl>
                <FormDescription>
                  Qual será seu e-mail para entrar?
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
                  <PasswordInput placeholder="shadcn" {...field} />
                </FormControl>
                <FormDescription>Sua senha mestre?</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
        </CardContent>
        <CardFooter className={'flex flex-col space-y-2'}>
          <Button block>Entrar</Button>
          <Button
            onClick={() => router.push('/auth/sign-up')}
            type={'button'}
            block
            variant={'secondary'}
          >
            Criar uma conta
          </Button>
        </CardFooter>
      </form>
    </FormProvider>
  )
}

export default SignInForm
