import { BaseOutput, OutputOptions, OutputTemplate } from '@jovotech/framework';
export interface IspCancelOutputOptions extends OutputOptions {
    token?: string;
    productId: string;
}
export declare class IspCancelOutput extends BaseOutput<IspCancelOutputOptions> {
    build(): OutputTemplate | OutputTemplate[];
}
