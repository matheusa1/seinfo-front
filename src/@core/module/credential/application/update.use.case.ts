import { ICredentialGateway } from '@/@core/module/credential/domain/credental.gateway'
import {
  TCreateCredential,
  TCredential,
} from '@/@core/module/credential/domain/credential.entity'
import { CryptPasswordUseCase } from '@/@core/module/credential/application/crypt-password.use.case'

export class UpdateUseCase {
  hashPasswordUseCase = new CryptPasswordUseCase()

  constructor(private readonly gateway: ICredentialGateway) {}

  execute(
    id: string,
    params: TCreateCredential,
    KDF: Buffer,
  ): Promise<TCredential> {
    const hashedPassword =
      params.password && this.hashPasswordUseCase.execute(params.password, KDF)

    return this.gateway.update(id, { ...params, password: hashedPassword })
  }
}
