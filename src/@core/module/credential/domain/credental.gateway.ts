import {
  TCreateCredential,
  TCredential,
} from '@/@core/module/credential/domain/credential.entity'

export interface ICredentialGateway {
  create(params: TCreateCredential): Promise<TCredential>
}