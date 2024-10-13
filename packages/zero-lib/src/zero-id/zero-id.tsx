import { nanoid, customAlphabet } from 'nanoid'

// c079f8d9a49b392351cde7b9a010336b4b25
export const generateZeroId = ({ prefix }: { prefix: string }) => {
  //const id2 = customAlphabet('1234567890abcdef', 36)
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
