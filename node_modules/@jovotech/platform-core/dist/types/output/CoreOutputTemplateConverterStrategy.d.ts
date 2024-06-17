import { NormalizedOutputTemplate, OutputTemplateConverterStrategy, OutputTemplateConverterStrategyConfig } from '@jovotech/output';
import { CoreResponse } from '../CoreResponse';
export declare class CoreOutputTemplateConverterStrategy extends OutputTemplateConverterStrategy<CoreResponse, OutputTemplateConverterStrategyConfig> {
    responseClass: typeof CoreResponse;
    platformName: 'core' | string;
    toResponse(output: NormalizedOutputTemplate | NormalizedOutputTemplate[]): CoreResponse;
    fromResponse(response: CoreResponse): NormalizedOutputTemplate[];
}
