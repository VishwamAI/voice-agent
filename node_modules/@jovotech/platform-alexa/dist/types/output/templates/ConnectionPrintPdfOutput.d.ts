import { BaseOutput, OutputOptions, OutputTemplate } from '@jovotech/framework';
import { OnCompletion } from '../models/common/OnCompletion';
export interface ConnectionPrintPdfOutputOptions extends OutputOptions {
    shouldEndSession?: boolean;
    token?: string;
    onCompletion: OnCompletion;
    title: string;
    description?: string;
    url: string;
}
export declare class ConnectionPrintPdfOutput extends BaseOutput<ConnectionPrintPdfOutputOptions> {
    getDefaultOptions(): ConnectionPrintPdfOutputOptions;
    build(): OutputTemplate | OutputTemplate[];
}
