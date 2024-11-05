import { z } from 'zod'
import { parseZeroId } from '../zero-id/zero-id'

export const zodSchemas = {
  name: z.string().min(1, { message: 'Empty string not Allowed' }).nullish(),
  description: z
    .string()
    .min(1, { message: 'Empty string not Allowed' })
    .nullish(),
  zeroId: z.string().refine(zeroId => parseZeroId({ zeroId }).isZeroIdValid, {
    message: 'Invalid zeroId format',
  }),
}
