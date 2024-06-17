import { Constructor } from '@jovotech/common';
import { NormalizedOutputTemplate, OutputTemplateConverterStrategyConfig, SingleResponseOutputTemplateConverterStrategy } from '@jovotech/output';
import { TestResponse } from './TestResponse';
export declare class TestOutputConverterStrategy extends SingleResponseOutputTemplateConverterStrategy<TestResponse, OutputTemplateConverterStrategyConfig> {
    readonly responseClass: Constructor<TestResponse>;
    readonly platformName: string;
    protected sanitizeOutput(output: NormalizedOutputTemplate): NormalizedOutputTemplate;
    toResponse(output: NormalizedOutputTemplate): TestResponse;
    fromResponse(): NormalizedOutputTemplate;
}
