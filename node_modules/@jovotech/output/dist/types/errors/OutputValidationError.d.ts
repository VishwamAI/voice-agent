import { ValidationError } from '..';
export declare class OutputValidationError extends Error {
    readonly validationErrors: ValidationError[];
    readonly prefix: string;
    constructor(validationErrors: ValidationError[], prefix?: string);
}
