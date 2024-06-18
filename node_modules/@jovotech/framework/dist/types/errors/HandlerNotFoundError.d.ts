import { JovoError } from '@jovotech/common';
export declare class HandlerNotFoundError extends JovoError {
    constructor(className: string, handler: string);
}
