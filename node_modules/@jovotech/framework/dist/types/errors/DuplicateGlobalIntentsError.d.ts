import { JovoError } from '@jovotech/common';
import { HandlerMetadata } from '../metadata/HandlerMetadata';
export declare function buildDuplicateGlobalIntentsErrorMessage(entries: [string, HandlerMetadata[]][], separator?: string): string;
export declare class DuplicateGlobalIntentsError extends JovoError {
    constructor(entries: [string, HandlerMetadata[]][]);
}
