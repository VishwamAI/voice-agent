import { AnyObject } from './index';
export interface JovoErrorOptions {
    message: string;
    name?: string;
    package?: string;
    context?: AnyObject;
    hint?: string;
    learnMore?: string;
}
export declare class JovoError extends Error {
    package?: string;
    context?: AnyObject;
    hint?: string;
    learnMore?: string;
    constructor(messageOrOptions: string | JovoErrorOptions);
    toJSON(): JovoError;
}
