import { BaseOutput, OutputOptions, OutputTemplate } from '@jovotech/framework';
import { OnCompletion } from '../models/common/OnCompletion';
export interface ConnectionTestStatusCodeOutputOptions extends OutputOptions {
    shouldEndSession?: boolean;
    token?: string;
    onCompletion: OnCompletion;
    code: string;
}
export declare class ConnectionTestStatusCodeOutput extends BaseOutput<ConnectionTestStatusCodeOutputOptions> {
    getDefaultOptions(): ConnectionTestStatusCodeOutputOptions;
    build(): OutputTemplate | OutputTemplate[];
}
