export const isValidatorType = (maybeValidator) => {
  return (maybeValidator === 'Validator' ||
    maybeValidator === 'ArrayValidator' ||
    maybeValidator === 'BooleanValidator' ||
    maybeValidator === 'ConstantValidator' ||
    maybeValidator === 'EnumValidator' ||
    maybeValidator === 'IntegerValidator' ||
    maybeValidator === 'NumberValidator' ||
    maybeValidator === 'StringValidator' ||
    maybeValidator === 'TupleValidator');
};
//# sourceMappingURL=types.js.map