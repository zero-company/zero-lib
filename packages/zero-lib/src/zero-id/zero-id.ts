import { nanoid, customAlphabet } from 'nanoid'

const PARTCOUNT = 6
const PARTSIZE = 6

const isHex = (str?: string | null) => {
  let RegExp = /^[0-9a-f]{6}$/i
  return str ? RegExp.test(str) : false
}

export const generateZeroId = ({ prefix }: { prefix: string }) => {
  const keys = Array.from({ length: PARTCOUNT }, () =>
    customAlphabet('1234567890abcdef', PARTSIZE)(),
  )
  return [prefix, ...keys].join('-')
}

export const parseZeroId = ({ zeroId }: { zeroId?: string | null }) => {
  const [prefix, ...parts] = zeroId?.split('-') || []
  const arePartsValidHex = parts.every(x => isHex(x))
  const isZeroIdValid = [parts.length === PARTCOUNT, arePartsValidHex].every(
    x => x === true,
  )
  return {
    zeroId,
    parts,
    prefix,
    isZeroIdValid,
  }
}
