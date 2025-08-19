import { IAuthGateway } from '@/@core/module/auth/domain/auth.gateway'
import {
  TSignInResponse,
  TSignInSchema,
} from '@/@core/module/auth/domain/sign-in.entity'

export class SignInUseCase {
  constructor(private readonly gateway: IAuthGateway) {}

  execute(params: TSignInSchema): Promise<TSignInResponse> {
    return this.gateway.signIn(params)
  }
}
