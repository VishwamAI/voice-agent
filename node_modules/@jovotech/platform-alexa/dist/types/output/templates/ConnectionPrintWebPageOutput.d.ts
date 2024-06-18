import { BaseOutput, OutputOptions, OutputTemplate } from '@jovotech/framework';
import { OnCompletion } from '../models/common/OnCompletion';
export interface ConnectionPrintWebPageOutputOptions extends OutputOptions {
    shouldEndSession?: boolean;
    token?: string;
    onCompletion: OnCompletion;
    title: string;
    description?: string;
    url: string;
}
export declare class ConnectionPrintWebPageOutput extends BaseOutput<ConnectionPrintWebPageOutputOptions> {
    getDefaultOptions(): ConnectionPrintWebPageOutputOptions;
    build(): OutputTemplate | OutputTemplate[];
}
