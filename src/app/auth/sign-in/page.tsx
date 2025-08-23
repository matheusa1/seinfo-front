import { FC } from 'react'
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import SignInForm from '@/app/auth/sign-in/components/sign-in-form'

const SignInPage: FC = () => {
  return (
    <Card className={'w-full max-w-md'}>
      <CardHeader>
        <CardTitle>Entre com sua conta</CardTitle>
        <CardDescription>
          Preencha seu e-mail e credenciais para entrar na sua conta
        </CardDescription>
      </CardHeader>
      <SignInForm />
    </Card>
  )
}

export default SignInPage
