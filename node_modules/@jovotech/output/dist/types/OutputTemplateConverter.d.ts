import { ValidationError } from 'class-validator';
import { JovoResponse, NormalizedOutputTemplate, OutputTemplate, OutputTemplateConverterStrategy, OutputTemplateConverterStrategyConfig, PlainObjectType } from '.';
export declare class OutputTemplateConverter<STRATEGY extends OutputTemplateConverterStrategy<RESPONSE, CONFIG>, RESPONSE extends JovoResponse = InstanceType<STRATEGY['responseClass']>, CONFIG extends OutputTemplateConverterStrategyConfig = STRATEGY['config']> {
    readonly strategy: STRATEGY;
    constructor(strategy: STRATEGY);
    validateOutput(output: OutputTemplate | OutputTemplate[] | NormalizedOutputTemplate | NormalizedOutputTemplate[]): Promise<ValidationError[]>;
    validateResponse(response: RESPONSE | RESPONSE[]): Promise<ValidationError[]>;
    toResponse(output: OutputTemplate | OutputTemplate[]): Promise<ReturnType<STRATEGY['toResponse']>>;
    fromResponse(response: PlainObjectType<RESPONSE> | PlainObjectType<RESPONSE>[]): Promise<ReturnType<STRATEGY['fromResponse']>>;
    private shouldValidate;
    private validate;
}
