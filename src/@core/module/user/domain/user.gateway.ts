import { TUser } from '@/@core/module/user/domain/user.entity'

export interface IUserGateway {
  getUserInfo(): Promise<TUser>
}
