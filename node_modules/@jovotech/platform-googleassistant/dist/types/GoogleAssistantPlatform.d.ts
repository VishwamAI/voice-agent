import { AnyObject, App, Jovo, Platform, PlatformConfig } from '@jovotech/framework';
import { GoogleAssistant } from './GoogleAssistant';
import { GoogleAssistantDevice } from './GoogleAssistantDevice';
import { GoogleAssistantRequest } from './GoogleAssistantRequest';
import { GoogleAssistantRequestBuilder } from './GoogleAssistantRequestBuilder';
import { GoogleAssistantResponse } from './GoogleAssistantResponse';
import { GoogleAssistantUser } from './GoogleAssistantUser';
import { GoogleAssistantOutputTemplateConverterStrategy } from './output';
export interface GoogleAssistantConfig extends PlatformConfig {
}
export declare class GoogleAssistantPlatform extends Platform<GoogleAssistantRequest, GoogleAssistantResponse, GoogleAssistant, GoogleAssistantUser, GoogleAssistantDevice, GoogleAssistantPlatform, GoogleAssistantConfig> {
    readonly id: string;
    readonly outputTemplateConverterStrategy: GoogleAssistantOutputTemplateConverterStrategy;
    readonly requestClass: typeof GoogleAssistantRequest;
    readonly jovoClass: typeof GoogleAssistant;
    readonly userClass: typeof GoogleAssistantUser;
    readonly deviceClass: typeof GoogleAssistantDevice;
    readonly requestBuilder: typeof GoogleAssistantRequestBuilder;
    getDefaultConfig(): GoogleAssistantConfig;
    mount(parent: App): void;
    initialize(parent: App): void;
    isRequestRelated(request: AnyObject | GoogleAssistantRequest): boolean;
    isResponseRelated(response: AnyObject | GoogleAssistantResponse): boolean;
    finalizeResponse(response: GoogleAssistantResponse, googleAssistant: GoogleAssistant): GoogleAssistantResponse | Promise<GoogleAssistantResponse>;
    onRequestStart(jovo: Jovo): void;
}
