import { ValidationArguments, ValidationOptions } from '../..';
export interface IsSomeValidOptions<T = any> {
    name?: string;
    keys: Array<keyof T>;
    validate: (value: unknown, args: ValidationArguments) => string | undefined | void | Promise<string | undefined | void>;
}
export declare function IsSomeValid<T = any>(options: IsSomeValidOptions<T>, validationOptions?: ValidationOptions): PropertyDecorator;
