import { BaseOutput, OutputOptions, OutputTemplate } from '@jovotech/framework';
export interface IspBuyOutputOptions extends OutputOptions {
    token?: string;
    productId: string;
}
export declare class IspBuyOutput extends BaseOutput<IspBuyOutputOptions> {
    build(): OutputTemplate | OutputTemplate[];
}
