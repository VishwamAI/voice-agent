import { JovoCliError } from '@jovotech/cli-core';
export * from './constants';
export * from './interfaces';
export declare function checkForGactionsCli(): Promise<void>;
/**
 * Tries to parse the provided error message for standard errors.
 * @param errorMessage - Error message.
 */
export declare function getGactionsError(errorMessage: string): JovoCliError;
