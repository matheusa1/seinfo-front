import { z } from 'zod'

export const signInSchema = z.object({
  email: z
    .email({ error: 'Informe um e-mail válido' })
    .nonempty({ error: 'O e-mail é obrigatório' }),
  password: z
    .string()
    .min(6, { message: 'A senha deve ter no mínimo 6 caracteres' })
    .nonempty({ error: 'A senha é obrigatória' }),
})
