import { z } from 'zod'
import { parseZeroId } from '../zero-id/zero-id'
import { v4 as uuidV4, validate as uuidValidate } from 'uuid'

const uuidZodSchemas = {
  uuid: z.string().uuid().nullish(),
  uuidRequired: z.string().uuid(),
  uuidArray: z.string().uuid().array(),
  uuidGeneratedOnly: z
    .null()
    .or(z.undefined())
    .transform(zeroId => zeroId ?? uuidV4()),
  uuidGeneratedOrCustom: z
    .string()
    .uuid()
    .nullish()
    .transform(zeroId => zeroId ?? uuidV4()),
}

export const zodSchemas = {
  ...uuidZodSchemas,
  name: z.string().min(1, { message: 'Empty string not Allowed' }).nullish(),
  description: z
    .string()
    .min(1, { message: 'Empty string not Allowed' })
    .nullish(),

  zeroId: z
    .string()
    .nullish()
    .refine(zeroId => (zeroId ? parseZeroId({ zeroId }).isZeroIdValid : true), {
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
  expirationDate: z.string().datetime().nullish(),
}
