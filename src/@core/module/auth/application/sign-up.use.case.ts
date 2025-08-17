import { IAuthGateway } from '@/@core/module/auth/domain/auth.gateway'
import { TSignUpOutputSchema } from '@/@core/module/auth/domain/sign-up.entity'

export class SignUpUseCase {
  constructor(private readonly gateway: IAuthGateway) {}

  execute(params: TSignUpOutputSchema): Promise<void> {
    return this.gateway.signUp(params)
  }
}
