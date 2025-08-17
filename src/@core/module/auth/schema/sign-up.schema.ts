import { z } from 'zod'

export const signUpSchema = z
  .object({
    name: z
      .string({
        error: 'O Nome deve ser um texto',
      })
      .min(3, { error: 'O nome deve ter ao menos 3 caracteres' })
      .nonempty({ error: 'O nome é obrigatório' }),
    email: z
      .email({ error: 'Informe um e-mail válido' })
      .nonempty({ error: 'O e-mail é obrigatório' }),
    password: z
      .string({ error: 'A senha deve ser um texto' })
      .min(6, 'A senha deve ter ao menos 6 caracteres')
      .nonempty({ error: 'A senha é obrigatória' }),
    confirmPassword: z
      .string({ error: 'A senha deve ser um texto' })
      .min(6, 'A senha deve ter ao menos 6 caracteres')
      .nonempty({ error: 'A senha é obrigatória' }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    error: 'As senhas não conferem',
    path: ['confirmPassword'],
  })
  .transform((data) => ({
    name: data.name,
    email: data.email,
    password: data.password,
  }))
