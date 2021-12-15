import { ValidatorTypes as ValidatorTypeSchema } from '@stencila/schema'

export type ValidatorTypes = Exclude<ValidatorTypeSchema['type'], 'Validator'>

export const isValidatorType = (
  maybeValidator: string
): maybeValidator is ValidatorTypes => {
  return (
    maybeValidator === 'Validator' ||
    maybeValidator === 'ArrayValidator' ||
    maybeValidator === 'BooleanValidator' ||
    maybeValidator === 'ConstantValidator' ||
    maybeValidator === 'EnumValidator' ||
    maybeValidator === 'IntegerValidator' ||
    maybeValidator === 'NumberValidator' ||
    maybeValidator === 'StringValidator' ||
    maybeValidator === 'TupleValidator'
  )
}
