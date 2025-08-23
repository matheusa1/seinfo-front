import { FC } from 'react'
import { Card, CardDescription, CardHeader, CardTitle, } from '@/components/ui/card'
import SignUpForm from '@/app/auth/sign-up/components/sign-up-form'

const SignUpPage: FC = () => {
  return (
    <Card className={'w-full max-w-md'}>
      <CardHeader>
        <CardTitle>Cadastre sua conta</CardTitle>
        <CardDescription>
          Entre com suas informações abaixo para criar a sua conta
        </CardDescription>
      </CardHeader>
      <SignUpForm />
    </Card>
  )
}

export default SignUpPage
