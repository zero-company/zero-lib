import { nanoid, customAlphabet } from 'nanoid'

export const generateZeroId = ({ prefix }: { prefix: string }) => {
  const keys = Array.from({ length: 6 }, () =>
    customAlphabet('1234567890abcdef', 6)(),
  )
  return [prefix, ...keys].join('-')
}

// zero1-c079f8-d9a49b-392351-cde7b9-a01033-6b4b25
export const parseZeroId = (zeroId: string) => {
  const [prefix, ...parts] = zeroId.split('-')
  return {
    zeroId,
    prefix,
  }
}

export const formatZeroId = (zeroId: string, prefix: string) => {
  return ``
}

export const validateZeroId = (zeroId: string) => {}
