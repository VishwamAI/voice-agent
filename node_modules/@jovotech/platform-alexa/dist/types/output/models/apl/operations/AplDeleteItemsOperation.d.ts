import { AplOperation, AplOperationType } from '../AplOperation';
export declare class AplDeleteItemsOperation extends AplOperation<AplOperationType.DeleteItems> {
    type: AplOperationType.DeleteItems;
    count: number;
}
