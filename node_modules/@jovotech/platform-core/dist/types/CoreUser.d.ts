import { JovoUser } from '@jovotech/framework';
import { Core } from './Core';
export declare class CoreUser extends JovoUser<Core> {
    constructor(jovo: Core);
    get id(): string | undefined;
}
