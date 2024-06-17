import { AnyObject } from '@jovotech/common';
import { HandleRequest } from '..';
import { ExtensibleInitConfig } from '../Extensible';
import { DbPluginConfig } from '../interfaces';
import { Jovo } from '../Jovo';
import { PersistableHistoryData } from '../JovoHistory';
import { PersistableSessionData } from '../JovoSession';
import { PersistableUserData } from '../JovoUser';
import { Plugin } from '../Plugin';
export declare const DEFAULT_SESSION_EXPIRES_AFTER_SECONDS = 900;
export interface DbItem extends AnyObject {
    id?: string;
    user?: PersistableUserData;
    session?: PersistableSessionData;
    history?: PersistableHistoryData;
    createdAt?: string;
    updatedAt?: string;
}
export declare abstract class DbPlugin<CONFIG extends DbPluginConfig = DbPluginConfig> extends Plugin<CONFIG> {
    constructor(config?: ExtensibleInitConfig<CONFIG>);
    getDefaultConfig(): CONFIG;
    mount(parent: HandleRequest): void;
    abstract loadData(userId: string, jovo: Jovo): Promise<void>;
    abstract saveData(userId: string, jovo: Jovo): Promise<void>;
    applyPersistableData(jovo: Jovo, item: DbItem): Promise<void>;
}
