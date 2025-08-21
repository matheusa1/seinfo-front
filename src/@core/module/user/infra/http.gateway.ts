import { IUserGateway } from '@/@core/module/user/domain/user.gateway'
import { AxiosInstance } from 'axios'
import { TUser } from '@/@core/module/user/domain/user.entity'
import { paths } from '@/@core/module/user/infra/key'

export class UserHttpGateway implements IUserGateway {
  constructor(private readonly http: AxiosInstance) {}

  async getUserInfo(): Promise<TUser> {
    return await this.http.get(paths.getUserInfo)
  }
}
