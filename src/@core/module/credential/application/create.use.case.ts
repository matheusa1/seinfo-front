import { ICredentialGateway } from '@/@core/module/credential/domain/credental.gateway'
import {
  TCreateCredential,
  TCredential,
} from '@/@core/module/credential/domain/credential.entity'
import { CryptPasswordUseCase } from '@/@core/module/credential/application/crypt-password.use.case'

export class CreateUseCase {
  crypt = new CryptPasswordUseCase()

  constructor(private readonly gateway: ICredentialGateway) {}

  execute(params: TCreateCredential, KDF: Buffer): Promise<TCredential> {
    const cryptedPassword = this.crypt.execute(params.password, KDF)

    return this.gateway.create({
      ...params,
      password: cryptedPassword,
    })
  }
}
