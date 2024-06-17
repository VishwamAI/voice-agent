import { RequestBuilder, UnknownObject } from '@jovotech/framework';
import { GoogleAssistantPlatform } from './GoogleAssistantPlatform';
import { GoogleAssistantRequest } from './GoogleAssistantRequest';
export declare class GoogleAssistantRequestBuilder extends RequestBuilder<GoogleAssistantPlatform> {
    launch(json?: UnknownObject): GoogleAssistantRequest;
    intent(name?: string): GoogleAssistantRequest;
    intent(json?: UnknownObject): GoogleAssistantRequest;
}
