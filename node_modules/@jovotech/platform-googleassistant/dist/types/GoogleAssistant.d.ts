import { App, DbPluginStoredElementsConfig, EntityMap, HandleRequest, Jovo, JovoPersistableData } from '@jovotech/framework';
import { GoogleAssistantDevice } from './GoogleAssistantDevice';
import { GoogleAssistantPlatform } from './GoogleAssistantPlatform';
import { GoogleAssistantRequest } from './GoogleAssistantRequest';
import { GoogleAssistantResponse } from './GoogleAssistantResponse';
import { GoogleAssistantUser } from './GoogleAssistantUser';
import { GoogleAssistantEntity } from './interfaces';
export declare class GoogleAssistant extends Jovo<GoogleAssistantRequest, GoogleAssistantResponse, GoogleAssistant, GoogleAssistantUser, GoogleAssistantDevice, GoogleAssistantPlatform> {
    $entities: EntityMap<GoogleAssistantEntity>;
    constructor($app: App, $handleRequest: HandleRequest, $platform: GoogleAssistantPlatform);
    getPersistableData(): JovoPersistableData;
    setPersistableData(data: JovoPersistableData, config?: DbPluginStoredElementsConfig): void;
}
