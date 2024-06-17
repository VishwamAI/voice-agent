import { BaseOutput, OutputOptions, OutputTemplate } from '@jovotech/framework';
import { AsinProduct } from '../models';
import { OnCompletion } from '../models/common/OnCompletion';
export interface ConnectionBuyShoppingProductsOutputOptions extends OutputOptions {
    shouldEndSession?: boolean;
    token?: string;
    onCompletion: OnCompletion;
    products: AsinProduct[];
}
export declare class ConnectionBuyShoppingProductsOutput extends BaseOutput<ConnectionBuyShoppingProductsOutputOptions> {
    getDefaultOptions(): ConnectionBuyShoppingProductsOutputOptions;
    build(): OutputTemplate | OutputTemplate[];
}
