import { AnyObject, HandleRequest, Platform, PlatformConfig, RequiredOnlyWhere } from '@jovotech/framework';
import { Alexa } from './Alexa';
import { AlexaDevice } from './AlexaDevice';
import { AlexaRequest } from './AlexaRequest';
import { AlexaRequestBuilder } from './AlexaRequestBuilder';
import { AlexaResponse } from './AlexaResponse';
import { AlexaUser } from './AlexaUser';
import { AlexaOutputTemplateConverterStrategy } from './output';
export interface AlexaConfig extends PlatformConfig {
    output: {
        genericOutputToApl: boolean;
        aplTemplates?: Record<string, unknown>;
    };
    intentMap: Record<string, string>;
}
export declare class AlexaPlatform extends Platform<AlexaRequest, AlexaResponse, Alexa, AlexaUser, AlexaDevice, AlexaPlatform, AlexaConfig> {
    readonly id: string;
    readonly outputTemplateConverterStrategy: AlexaOutputTemplateConverterStrategy;
    readonly requestClass: typeof AlexaRequest;
    readonly jovoClass: typeof Alexa;
    readonly userClass: typeof AlexaUser;
    readonly deviceClass: typeof AlexaDevice;
    readonly requestBuilder: typeof AlexaRequestBuilder;
    getDefaultConfig(): AlexaConfig;
    getInitConfig(): RequiredOnlyWhere<AlexaConfig, 'intentMap'>;
    mount(parent: HandleRequest): void;
    isRequestRelated(request: AnyObject | AlexaRequest): boolean;
    isResponseRelated(response: AnyObject | AlexaResponse): boolean;
    finalizeResponse(response: AlexaResponse, alexaSkill: Alexa): AlexaResponse | Promise<AlexaResponse>;
    private onRequestStart;
}
