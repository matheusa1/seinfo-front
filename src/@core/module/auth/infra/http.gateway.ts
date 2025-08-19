import { IAuthGateway } from '@/@core/module/auth/domain/auth.gateway'
import { AxiosInstance } from 'axios'
import { TSignUpOutputSchema } from '@/@core/module/auth/domain/sign-up.entity'
import { paths } from '@/@core/module/auth/infra/key'
import {
  TSignInResponse,
  TSignInSchema,
} from '@/@core/module/auth/domain/sign-in.entity'

export class AuthHttpGateway implements IAuthGateway {
  constructor(private readonly http: AxiosInstance) {}

  async signUp(params: TSignUpOutputSchema): Promise<void> {
    return await this.http.post(paths.signUp, params)
  }

  async signIn(params: TSignInSchema): Promise<TSignInResponse> {
    return await this.http.post(paths.signIn, params)
  }
}
