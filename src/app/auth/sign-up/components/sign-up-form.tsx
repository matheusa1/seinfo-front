'use client'

import { FC } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import {
  TSignUpInputSchema,
  TSignUpOutputSchema,
} from '@/@core/module/auth/domain/sign-up.entity'
import { zodResolver } from '@hookform/resolvers/zod'
import { signUpSchema } from '@/@core/module/auth/schema/sign-up.schema'
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

const SignUpForm: FC = () => {
  const form = useForm<TSignUpInputSchema>({
    resolver: zodResolver(signUpSchema.in),
    defaultValues: {
      password: '',
      name: '',
      email: '',
      confirmPassword: '',
    },
  })

  const onHandleSubmit = (formData: TSignUpInputSchema) => {
    const parsed: TSignUpOutputSchema = signUpSchema.parse(formData)
    console.log({ formData: parsed })
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
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Nome</FormLabel>
                <FormControl>
                  <Input placeholder="shadcn" {...field} />
                </FormControl>
                <FormDescription>Como devemos te chamar?</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
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
          <FormField
            control={form.control}
            name="confirmPassword"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Confirme a senha</FormLabel>
                <FormControl>
                  <PasswordInput placeholder="shadcn" {...field} />
                </FormControl>
                <FormDescription>Confirme a sua senha</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
        </CardContent>
        <CardFooter className={'flex flex-col space-y-2'}>
          <Button block>Cadastrar</Button>
          <Button type={'button'} block variant={'secondary'}>
            Já possuo uma conta
          </Button>
        </CardFooter>
      </form>
    </FormProvider>
  )
}

export default SignUpForm
