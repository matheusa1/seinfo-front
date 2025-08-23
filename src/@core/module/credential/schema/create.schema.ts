import { z } from 'zod'

export const createCredentialSchema = z.object({
  name: z
    .string({ error: 'O nome precisa ser um texto' })
    .nonempty({ error: 'Informe um nome' }),
  password: z.string({ error: 'A senha precisa ser um texto ' }).optional(),
  username: z.string({ error: 'O nome precisa ser um texto' }).optional(),
  url: z.url({ error: 'Informe uma url válida' }).optional(),
  notes: z.string({ error: 'As notas precisam ser um texto' }).optional(),
})
