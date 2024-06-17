import { BaseOutput, OutputOptions, OutputTemplate } from '@jovotech/framework';
import { OnCompletion } from '../models/common/OnCompletion';
export declare enum ImageType {
    Jpg = "JPG",
    Jpeg = "JPEG"
}
export interface ConnectionPrintImageOutputOptions extends OutputOptions {
    shouldEndSession?: boolean;
    token?: string;
    onCompletion: OnCompletion;
    title: string;
    description?: string;
    url: string;
    imageType: ImageType;
}
export declare class ConnectionPrintImageOutput extends BaseOutput<ConnectionPrintImageOutputOptions> {
    getDefaultOptions(): ConnectionPrintImageOutputOptions;
    build(): OutputTemplate | OutputTemplate[];
}
