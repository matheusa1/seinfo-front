import 'reflect-metadata'
import { HTTP } from '@/@core/module/common/infra/http'
import { AuthHttpGateway } from './http.gateway'
import { Container } from 'inversify'
import { AxiosInstance } from 'axios'
import { SignUpUseCase } from '../application/sign-up.use.case'
import { SignInUseCase } from '../application/sign-in.use.case'
import { GenerateKdfUseCase } from '../application/generate-kdf.use.case'

const registry = {
  HTTP: Symbol.for('HTTP'),
  AuthHttpGateway: Symbol.for('AuthHttpGateway'),

  SignUpUseCase: Symbol.for('SignUpUseCase'),
  SignInUseCase: Symbol.for('SignInUseCase'),
  GenerateKdfUseCase: Symbol.for('GenerateKdfUseCase'),
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

container
  .bind<SignInUseCase>(registry.SignInUseCase)
  .toDynamicValue((context) => {
    return new SignInUseCase(context.get(registry.AuthHttpGateway))
  })

container
  .bind<GenerateKdfUseCase>(registry.GenerateKdfUseCase)
  .toDynamicValue((context) => {
    return new GenerateKdfUseCase()
  })

export const auth = {
  signUp: container.get<SignUpUseCase>(registry.SignUpUseCase),
  signIn: container.get<SignInUseCase>(registry.SignInUseCase),
  generateKdf: container.get<GenerateKdfUseCase>(registry.GenerateKdfUseCase),
}
