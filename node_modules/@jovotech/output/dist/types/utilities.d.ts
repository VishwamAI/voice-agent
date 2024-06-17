import { Constructor } from '@jovotech/common';
import type { O } from 'ts-toolbelt';
import { ListenValue, ValidationError } from '.';
export declare function registerOutputPlatform<TYPE extends Record<string, unknown>>(platformKey: string, platformType: Constructor<TYPE>): void;
export interface FormatValidationErrorsOptions {
    text?: string;
    delimiter?: string;
    path?: string;
}
export declare function formatValidationErrors(errors: ValidationError[], options?: FormatValidationErrorsOptions): string;
export declare function formatList(items: Array<string | number | symbol>, delimiter?: string, lastDelimiter?: string): string;
export declare function isAnInstance(instance: unknown, ignoredConstructorNames?: string[]): boolean;
export declare function instanceToObject<T>(instance: T): T;
export declare function mergeInstances<D extends object, S extends any[]>(destination: D, ...sources: S): O.MergeAll<D, S, 'deep'>;
export declare function mergeListen(target: ListenValue | null | undefined, mergeWith: ListenValue | null | undefined): ListenValue | null | undefined;
