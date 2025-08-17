import { z } from 'zod'
import { signUpSchema } from '@/@core/module/auth/schema/sign-up.schema'

export type TSignUpInputSchema = z.input<typeof signUpSchema>
export type TSignUpOutputSchema = z.output<typeof signUpSchema>
