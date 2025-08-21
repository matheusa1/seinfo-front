import { pbkdf2Sync } from 'crypto'

export class GenerateKdfUseCase {
  execute(password: string, passkey: string): Buffer {
    return pbkdf2Sync(password, passkey, 10000, 32, 'sha512')
  }
}
