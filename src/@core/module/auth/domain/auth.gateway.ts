import { TSignUpOutputSchema } from '@/@core/module/auth/domain/sign-up.entity'
import {
  TSignInResponse,
  TSignInSchema,
} from '@/@core/module/auth/domain/sign-in.entity'

export interface IAuthGateway {
  signUp(params: TSignUpOutputSchema): Promise<void>
  signIn(params: TSignInSchema): Promise<TSignInResponse>
}
