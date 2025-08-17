import { IAuthGateway } from '@/@core/module/auth/domain/auth.gateway'
import { AxiosInstance } from 'axios'
import { TSignUpOutputSchema } from '@/@core/module/auth/domain/sign-up.entity'
import { paths } from '@/@core/module/auth/infra/key'

export class AuthHttpGateway implements IAuthGateway {
  constructor(private readonly http: AxiosInstance) {}

  async signUp(params: TSignUpOutputSchema): Promise<void> {
    return await this.http.post(paths.signUp, params)
  }
}
