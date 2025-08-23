import { ICredentialGateway } from '@/@core/module/credential/domain/credental.gateway'

export class DeleteUseCase {
  constructor(private readonly gateway: ICredentialGateway) {}

  execute(id: string): Promise<void> {
    return this.gateway.delete(id)
  }
}
