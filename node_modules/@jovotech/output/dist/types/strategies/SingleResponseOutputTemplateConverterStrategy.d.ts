import { MessageValue, NullableOutputTemplateBase, NormalizedOutputTemplate, OutputTemplateBase, OutputTemplateConverterStrategyConfig, PlainObjectType, OutputTemplate } from '..';
import { OutputTemplateConverterStrategy } from '../OutputTemplateConverterStrategy';
/**
 * Strategy that merges multiple OutputTemplates into a single NormalizedOutputTemplate and only converts the merged NormalizedOutputTemplate to a response.
 * - Strings get concatenated and separated by a whitespace.
 * - Quick Replies get merged into a single array.
 * - Card/Carousel the last in the array is used.
 * - NativeResponses get merged.
 * - Listen gets merged.
 */
export declare abstract class SingleResponseOutputTemplateConverterStrategy<RESPONSE extends Record<string, unknown>, CONFIG extends OutputTemplateConverterStrategyConfig> extends OutputTemplateConverterStrategy<RESPONSE, CONFIG> {
    normalizeOutput(output: OutputTemplate | OutputTemplate[]): NormalizedOutputTemplate;
    normalizeResponse(rawResponse: PlainObjectType<RESPONSE>): RESPONSE;
    protected abstract sanitizeOutput(output: NormalizedOutputTemplate): NormalizedOutputTemplate;
    abstract toResponse(output: NormalizedOutputTemplate): RESPONSE;
    abstract fromResponse(response: RESPONSE): NormalizedOutputTemplate;
    protected mergeOutputTemplates(output: NormalizedOutputTemplate[]): NormalizedOutputTemplate;
    protected mergeOutputTemplateWith(target: NormalizedOutputTemplate, mergeWith: NormalizedOutputTemplate): NormalizedOutputTemplate;
    protected mergeOutputTemplateBaseWith(target: OutputTemplateBase | NullableOutputTemplateBase, mergeWith: OutputTemplateBase | NullableOutputTemplateBase): void;
    protected mergeMessages(target: MessageValue | null | undefined, mergeWith: MessageValue): MessageValue;
    protected mergeSpeech(target: string | undefined, mergeWith: string | undefined): string | undefined;
    protected mergeText(target: string | undefined, mergeWith: string | undefined): string | undefined;
}
