import { RequestBuilder, UnknownObject } from '@jovotech/framework';
import { AlexaPlatform } from './AlexaPlatform';
import { AlexaRequest } from './AlexaRequest';
export declare class AlexaRequestBuilder extends RequestBuilder<AlexaPlatform> {
    launch(json?: UnknownObject): AlexaRequest;
    intent(name?: string): AlexaRequest;
    intent(json?: UnknownObject): AlexaRequest;
}
