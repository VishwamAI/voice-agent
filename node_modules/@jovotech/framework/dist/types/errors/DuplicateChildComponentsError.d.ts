import { JovoError } from '@jovotech/common';
export declare class DuplicateChildComponentsError extends JovoError {
    constructor(componentName: string, parentName: string);
}
