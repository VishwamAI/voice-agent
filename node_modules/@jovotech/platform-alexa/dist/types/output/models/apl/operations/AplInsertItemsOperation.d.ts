import { AplOperation, AplOperationType } from '../AplOperation';
export declare class AplInsertItemsOperation extends AplOperation<AplOperationType.InsertItems> {
    type: AplOperationType.InsertItems;
    items: Record<string, unknown>[];
}
