import { BaseOutput, OutputOptions, OutputTemplate } from '@jovotech/framework';
export interface ApiResponseOutputOptions extends OutputOptions {
    apiResponse: Record<string, string | number | boolean>;
}
export declare class ApiResponseOutput extends BaseOutput<ApiResponseOutputOptions> {
    build(): OutputTemplate | OutputTemplate[];
}
