import { CredentialHttpGateway } from './http.gateway'
import { Container } from 'inversify'
import { AxiosInstance } from 'axios'
import { HTTP } from '@/@core/module/common/infra/http'

import { CreateUseCase } from '../application/create.use.case'

const registry = {
  HTTP: Symbol.for('HTTP'),
  CredentialHttpGateway: Symbol.for('CredentialHttpGateway'),

  CreateUseCase: Symbol.for('CreateUseCase'),
}

const container = new Container()

container.bind<AxiosInstance>(registry.HTTP).toConstantValue(HTTP)

container
  .bind<CredentialHttpGateway>(registry.CredentialHttpGateway)
  .toDynamicValue((context) => {
    return new CredentialHttpGateway(context.get(registry.HTTP))
  })

container
  .bind<CreateUseCase>(registry.CreateUseCase)
  .toDynamicValue((context) => {
    return new CreateUseCase(context.get(registry.CredentialHttpGateway))
  })

export const credential = {
  create: container.get<CreateUseCase>(registry.CreateUseCase),
}
