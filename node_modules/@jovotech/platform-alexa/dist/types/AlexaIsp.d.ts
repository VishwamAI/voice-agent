import { Alexa } from './Alexa';
import { InSkillProduct, InSkillProductsParams, ProductListResponse } from './api/IspApi';
import { PurchaseResultLike } from './interfaces';
export declare class AlexaIsp {
    private alexa;
    constructor(alexa: Alexa);
    getProductList(params?: InSkillProductsParams): Promise<ProductListResponse>;
    getProductByReferenceName(referenceName: string): Promise<InSkillProduct | undefined>;
    getPurchaseResult(): PurchaseResultLike | undefined;
    getProductId(): string | undefined;
    toJSON(): AlexaIsp;
}
