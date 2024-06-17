import { JovoError } from '@jovotech/common';
export declare class ComponentNotFoundError extends JovoError {
    constructor(componentPath: string[]);
}
