import { BaseOutput, OutputOptions, OutputTemplate } from '@jovotech/framework';
export interface NextSceneOptions extends OutputOptions {
    name: string;
    slots?: Record<string, unknown>;
}
export declare class NextSceneOutput extends BaseOutput<NextSceneOptions> {
    build(): OutputTemplate | OutputTemplate[];
}
