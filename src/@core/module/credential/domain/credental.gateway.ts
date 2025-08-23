import {
  TCreateCredential,
  TCredential,
} from '@/@core/module/credential/domain/credential.entity'
import {
  TGetPagination,
  TPagination,
} from '@/@core/module/common/domain/pagination.entity'

export interface ICredentialGateway {
  paginate(params: TGetPagination): Promise<TPagination<TCredential>>
  create(params: TCreateCredential): Promise<TCredential>
  update(id: string, params: TCreateCredential): Promise<TCredential>
  delete(id: string): Promise<void>
}
