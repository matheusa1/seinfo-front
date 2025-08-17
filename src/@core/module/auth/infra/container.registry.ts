import 'reflect-metadata'
import { HTTP } from '@/@core/module/common/infra/http'
import { AuthHttpGateway } from './http.gateway'
import { Container } from 'inversify'
import { AxiosInstance } from 'axios'
import { SignUpUseCase } from '../application/sign-up.use.case'

const registry = {
  HTTP: Symbol.for('HTTP'),
  AuthHttpGateway: Symbol.for('AuthHttpGateway'),

  SignUpUseCase: Symbol.for('SignUpUseCase'),
}

const container = new Container()

container.bind<AxiosInstance>(registry.HTTP).toConstantValue(HTTP)
container
  .bind<AuthHttpGateway>(registry.AuthHttpGateway)
  .toDynamicValue((context) => {
    return new AuthHttpGateway(context.get(registry.HTTP))
  })

container
  .bind<SignUpUseCase>(registry.SignUpUseCase)
  .toDynamicValue((context) => {
    return new SignUpUseCase(context.get(registry.AuthHttpGateway))
  })

export const auth = {
  signUp: container.get<SignUpUseCase>(registry.SignUpUseCase),
}
