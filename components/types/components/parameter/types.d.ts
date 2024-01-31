import { ValidatorTypes as ValidatorTypeSchema } from '@stencila/schema';
export declare type ValidatorTypes = Exclude<ValidatorTypeSchema['type'], 'Validator'>;
export declare const isValidatorType: (maybeValidator: string) => maybeValidator is ValidatorTypes;
