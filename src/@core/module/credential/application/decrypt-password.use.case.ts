import crypto from 'crypto'

export class DecryptPasswordUseCase {
  execute(encryptedPassword: string, KDF: Buffer): string {
    try {
      const parts = encryptedPassword.split(':')
      const iv = Buffer.from(parts[0], 'hex')
      const authTag = Buffer.from(parts[1], 'hex')
      const encryptedData = parts[2]

      const decipher = crypto.createDecipheriv('aes-256-gcm', KDF, iv)

      decipher.setAuthTag(authTag)

      let decrypted = decipher.update(encryptedData, 'hex', 'utf8')
      decrypted += decipher.final('utf8')

      return decrypted
    } catch {
      throw new Error(
        'Não foi possível descriptografar os dados. A chave pode estar incorreta ou os dados foram corrompidos.',
      )
    }
  }
}
