import { z } from 'zod'
import { parseZeroId } from '../zero-id/zero-id'

export const zodSchemas = {
  name: z.string().min(1, { message: 'Empty string not Allowed' }).nullish(),
  description: z
    .string()
    .min(1, { message: 'Empty string not Allowed' })
    .nullish(),
  zeroId: z
    .string()
    .nullish()
    .refine(zeroId => parseZeroId({ zeroId }).isZeroIdValid, {
      message: 'Invalid zeroId format',
    }),
  tagIds: z
    .string()
    .array()
    .nullish()
    .default([]) // undefined default
    .transform(tags => tags ?? []) // null default
    .refine(
      zeroIds => zeroIds.every(zeroId => parseZeroId({ zeroId }).isZeroIdValid),
      {
        message: 'Invalid zeroId format',
      },
    ),
  tags: z
    .string()
    .array()
    .nullish()
    .default([])
    .transform(tags => tags ?? []),
  expirationDate: z.date().nullish(),
}
