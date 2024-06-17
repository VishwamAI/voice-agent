import { Constructor, JovoError } from '@jovotech/common';
export declare class InvalidParentError extends JovoError {
    constructor(pluginName: string, assumedParentType: Constructor | string);
}
