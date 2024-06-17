import { BaseOutput, OutputOptions, OutputTemplate } from '@jovotech/framework';
import { AsinProduct } from '../models';
import { OnCompletion } from '../models/common/OnCompletion';
export interface ConnectionAddToShoppingCartOutputOptions extends OutputOptions {
    shouldEndSession?: boolean;
    token?: string;
    onCompletion: OnCompletion;
    products: AsinProduct[];
}
export declare class ConnectionAddToShoppingCartOutput extends BaseOutput<ConnectionAddToShoppingCartOutputOptions> {
    getDefaultOptions(): ConnectionAddToShoppingCartOutputOptions;
    build(): OutputTemplate | OutputTemplate[];
}
