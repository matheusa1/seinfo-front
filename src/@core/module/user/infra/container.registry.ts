import { Container } from 'inversify'
import { HTTP } from '@/@core/module/common/infra/http'
import { UserHttpGateway } from './http.gateway'
import { GetUserInfoUseCase } from '../application/get-user-info.use.case'

const registry = {
  HTTP: Symbol.for('HTTP'),
  UserHttpGateway: Symbol.for('UserHttpGateway'),

  GetUserInfoUseCase: Symbol.for('GetUserInfoUseCase'),
}

const container = new Container()

container.bind(registry.HTTP).toConstantValue(HTTP)

container.bind(registry.UserHttpGateway).toDynamicValue((context) => {
  return new UserHttpGateway(context.get(registry.HTTP))
})

container.bind(registry.GetUserInfoUseCase).toDynamicValue((context) => {
  return new GetUserInfoUseCase(context.get(registry.UserHttpGateway))
})

export const user = {
  getUserInfo: container.get<GetUserInfoUseCase>(registry.GetUserInfoUseCase),
}
