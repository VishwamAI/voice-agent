import { BaseOutput, OutputOptions, OutputTemplate } from '@jovotech/framework';
export interface ProgressiveResponseOutputOptions extends OutputOptions {
    speech: string;
}
export declare class ProgressiveResponseOutput extends BaseOutput<ProgressiveResponseOutputOptions> {
    build(): Promise<OutputTemplate | OutputTemplate[]>;
    progressiveResponse(speech: string, requestId: string, apiEndPoint: string, apiAccessToken: string): Promise<void>;
}
