import { z } from 'zod'
import { signInSchema } from '@/@core/module/auth/schema/sign-in.schema'

export type TSignInSchema = z.infer<typeof signInSchema>

export type TSignInResponse = {
  access_token: string
}
