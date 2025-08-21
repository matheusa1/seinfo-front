import { ICredentialGateway } from '@/@core/module/credential/domain/credental.gateway'
import { AxiosInstance } from 'axios'
import {
  TCreateCredential,
  TCredential,
} from '@/@core/module/credential/domain/credential.entity'
import { paths } from '@/@core/module/credential/infra/key'
import {
  TGetPagination,
  TPagination,
} from '@/@core/module/common/domain/pagination.entity'

export class CredentialHttpGateway implements ICredentialGateway {
  constructor(private readonly http: AxiosInstance) {}

  async create(params: TCreateCredential): Promise<TCredential> {
    return this.http.post(paths.create, params)
  }

  async paginate(params: TGetPagination): Promise<TPagination<TCredential>> {
    const path = `${paths.pagination}?page=${params.page}&limit=${params.limit}`

    return await this.http.get(path)
  }
}
