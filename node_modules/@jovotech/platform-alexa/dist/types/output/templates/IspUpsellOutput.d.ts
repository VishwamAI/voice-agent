import { BaseOutput, OutputOptions, OutputTemplate } from '@jovotech/framework';
export interface IspUpsellOutputOptions extends OutputOptions {
    token?: string;
    productId: string;
    upsellMessage: string;
}
export declare class IspUpsellOutput extends BaseOutput<IspUpsellOutputOptions> {
    build(): OutputTemplate | OutputTemplate[];
}
