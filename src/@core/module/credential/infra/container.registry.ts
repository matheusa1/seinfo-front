import { CredentialHttpGateway } from './http.gateway'
import { Container } from 'inversify'
import { AxiosInstance } from 'axios'
import { HTTP } from '@/@core/module/common/infra/http'

import { CreateUseCase } from '../application/create.use.case'
import { PaginationUseCase } from '../application/pagination.use.case'
import { DecryptPasswordUseCase } from '../application/decrypt-password.use.case'
import { UpdateUseCase } from '../application/update.use.case'
import { DeleteUseCase } from '../application/delete.use.case'

const registry = {
  HTTP: Symbol.for('HTTP'),
  CredentialHttpGateway: Symbol.for('CredentialHttpGateway'),

  CreateUseCase: Symbol.for('CreateUseCase'),
  PaginationUseCase: Symbol.for('PaginationUseCase'),
  DecryptPasswordUseCase: Symbol.for('DecryptPasswordUseCase'),
  UpdateUseCase: Symbol.for('UpdateUseCase'),
  DeleteUseCase: Symbol.for('DeleteUseCase'),
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

container
  .bind<PaginationUseCase>(registry.PaginationUseCase)
  .toDynamicValue((context) => {
    return new PaginationUseCase(context.get(registry.CredentialHttpGateway))
  })

container
  .bind<DecryptPasswordUseCase>(registry.DecryptPasswordUseCase)
  .toConstantValue(new DecryptPasswordUseCase())

container
  .bind<UpdateUseCase>(registry.UpdateUseCase)
  .toDynamicValue(
    (context) => new UpdateUseCase(context.get(registry.CredentialHttpGateway)),
  )

container
  .bind<DeleteUseCase>(registry.DeleteUseCase)
  .toDynamicValue(
    (context) => new DeleteUseCase(context.get(registry.CredentialHttpGateway)),
  )

export const credential = {
  create: container.get<CreateUseCase>(registry.CreateUseCase),
  pagination: container.get<PaginationUseCase>(registry.PaginationUseCase),
  decryptPassword: container.get<DecryptPasswordUseCase>(
    registry.DecryptPasswordUseCase,
  ),
  update: container.get<UpdateUseCase>(registry.UpdateUseCase),
  delete: container.get<DeleteUseCase>(registry.DeleteUseCase),
}
