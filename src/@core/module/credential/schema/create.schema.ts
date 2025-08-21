import { z } from 'zod'

export const createCredentialSchema = z.object({
  name: z
    .string({ error: 'O nome precisa ser um texto' })
    .nonempty({ error: 'Informe um nome' }),
  password: z
    .string({ error: 'A senha precisa ser um texto ' })
    .nonempty({ error: 'Informe uma senha' }),
  username: z
    .string({ error: 'O nome precisa ser um texto' })
    .nonempty({ error: 'Informe um nome' }),
  url: z
    .url({ error: 'Informe uma url válida' })
    .nonempty({ error: 'Informe uma url' }),
  notes: z.string({ error: 'As notas precisam ser um texto' }).optional(),
})
