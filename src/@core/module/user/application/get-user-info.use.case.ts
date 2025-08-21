import { IUserGateway } from '@/@core/module/user/domain/user.gateway'

export class GetUserInfoUseCase {
  constructor(private readonly gateway: IUserGateway) {}

  async execute() {
    return await this.gateway.getUserInfo()
  }
}