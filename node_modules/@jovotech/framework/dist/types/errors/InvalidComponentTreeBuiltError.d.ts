import { JovoError } from '@jovotech/common';
import { DuplicateChildComponentsError } from './DuplicateChildComponentsError';
export declare class InvalidComponentTreeBuiltError extends JovoError {
    constructor(errors: Array<Error | DuplicateChildComponentsError>);
}
