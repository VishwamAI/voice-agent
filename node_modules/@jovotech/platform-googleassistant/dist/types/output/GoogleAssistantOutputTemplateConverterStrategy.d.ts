import { Carousel, MessageMaxLength, MessageValue, NormalizedOutputTemplate, OutputTemplate, OutputTemplateConverterStrategyConfig, QuickReplyValue, SingleResponseOutputTemplateConverterStrategy } from '@jovotech/output';
import { GoogleAssistantResponse } from '../GoogleAssistantResponse';
import { Suggestion } from './models';
export declare class GoogleAssistantOutputTemplateConverterStrategy extends SingleResponseOutputTemplateConverterStrategy<GoogleAssistantResponse, OutputTemplateConverterStrategyConfig> {
    platformName: "googleAssistant";
    responseClass: typeof GoogleAssistantResponse;
    normalizeOutput(output: OutputTemplate | OutputTemplate[]): NormalizedOutputTemplate;
    protected sanitizeOutput(output: NormalizedOutputTemplate): NormalizedOutputTemplate;
    protected sanitizeMessage(message: MessageValue, path: string, maxLength?: MessageMaxLength, offset?: number): MessageValue;
    protected sanitizeQuickReplies(quickReplies: QuickReplyValue[], path: string, maxSize?: number, maxLength?: number): QuickReplyValue[];
    protected sanitizeCarousel(carousel: Carousel, path: string, minSize?: number, maxSize?: number): Carousel;
    toResponse(output: NormalizedOutputTemplate): GoogleAssistantResponse;
    fromResponse(response: GoogleAssistantResponse): NormalizedOutputTemplate;
    convertQuickReplyToSuggestion(quickReply: QuickReplyValue): Suggestion;
    private convertDynamicEntityToTypeOverride;
    private convertTypeOverrideToDynamicEntity;
}
