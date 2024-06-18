import { NormalizedOutputTemplate } from '../models/NormalizedOutputTemplate';
import { OutputTemplate } from '../models/OutputTemplate';
import { OutputTemplateConverterStrategy, OutputTemplateConverterStrategyConfig } from '../OutputTemplateConverterStrategy';
/**
 * Strategy that can have multiple OutputTemplates and multiple Responses.
 */
export declare abstract class MultipleResponsesOutputTemplateConverterStrategy<RESPONSE extends Record<string, unknown>, CONFIG extends OutputTemplateConverterStrategyConfig> extends OutputTemplateConverterStrategy<RESPONSE, CONFIG> {
    normalizeOutput(output: OutputTemplate | OutputTemplate[]): NormalizedOutputTemplate | NormalizedOutputTemplate[];
    protected abstract sanitizeOutput(output: NormalizedOutputTemplate, index?: number): NormalizedOutputTemplate;
    abstract convertOutput(output: NormalizedOutputTemplate): RESPONSE | RESPONSE[];
    abstract convertResponse(response: RESPONSE): NormalizedOutputTemplate;
    toResponse(output: NormalizedOutputTemplate | NormalizedOutputTemplate[]): RESPONSE | RESPONSE[];
    fromResponse(responseOrResponses: RESPONSE | RESPONSE[]): NormalizedOutputTemplate | NormalizedOutputTemplate[];
}
