import { Extension } from '@codemirror/state';
import { CodeError } from '@stencila/schema';
export declare const updateErrors: import("@codemirror/state").StateEffectType<(string | CodeError)[] | undefined>;
export declare const codeErrors: () => Extension;
