import { ICredentialGateway } from '@/@core/module/credential/domain/credental.gateway'
import {
  TGetPagination,
  TPagination,
} from '@/@core/module/common/domain/pagination.entity'
import { TCredential } from '@/@core/module/credential/domain/credential.entity'

export class PaginationUseCase {
  constructor(private readonly gateway: ICredentialGateway) {}

  execute(params: TGetPagination): Promise<TPagination<TCredential>> {
    return this.gateway.paginate(params)
  }
}