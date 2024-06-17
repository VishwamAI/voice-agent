import { DynamicEntities, MessageMaxLength, MessageValue, NormalizedOutputTemplate, OutputTemplateConverterStrategyConfig, SingleResponseOutputTemplateConverterStrategy } from '@jovotech/output';
import { AlexaResponse } from '../AlexaResponse';
export interface AlexaOutputTemplateConverterStrategyConfig extends OutputTemplateConverterStrategyConfig {
    genericOutputToApl: boolean;
    aplTemplates?: Record<string, unknown>;
}
export declare class AlexaOutputTemplateConverterStrategy extends SingleResponseOutputTemplateConverterStrategy<AlexaResponse, AlexaOutputTemplateConverterStrategyConfig> {
    platformName: "alexa";
    responseClass: typeof AlexaResponse;
    getDefaultConfig(): AlexaOutputTemplateConverterStrategyConfig;
    protected sanitizeOutput(output: NormalizedOutputTemplate): NormalizedOutputTemplate;
    protected sanitizeMessage(message: MessageValue, path: string, maxLength?: MessageMaxLength, offset?: number): MessageValue;
    protected sanitizeDynamicEntities(dynamicEntities: DynamicEntities, path: string, maxSize?: number): DynamicEntities;
    toResponse(output: NormalizedOutputTemplate): AlexaResponse;
    fromResponse(response: AlexaResponse): NormalizedOutputTemplate;
    private convertDynamicEntityToSlotType;
    private convertSlotTypeToDynamicEntity;
}
