import { ValidationArguments, ValidationOptions } from '../..';
export interface IsEitherValidOptions<T = any> {
    name?: string;
    keys: Array<keyof T>;
    validate?: (value: unknown, args: ValidationArguments) => string | undefined | void | Promise<string | undefined | void>;
}
export declare function IsEitherValid<T = any>(options: IsEitherValidOptions<T>, validationOptions?: ValidationOptions): PropertyDecorator;
