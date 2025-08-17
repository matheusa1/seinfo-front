import { TSignUpOutputSchema } from '@/@core/module/auth/domain/sign-up.entity'

export interface IAuthGateway {
  signUp(params: TSignUpOutputSchema): Promise<void>
}