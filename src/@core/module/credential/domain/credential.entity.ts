import { z } from 'zod'
import { createCredentialSchema } from '@/@core/module/credential/schema/create.schema'

export type TCredential = {
  id: string
  userId: string
  name: string
  password?: string
  username?: string
  url?: string
  notes?: string
  createdAt: string
  updatedAt: string
}

export type TCreateCredential = z.infer<typeof createCredentialSchema>
