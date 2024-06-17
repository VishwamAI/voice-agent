import { AplOperation, AplOperationType } from '../AplOperation';
export declare class AplInsertItemOperation extends AplOperation<AplOperationType.InsertItem> {
    type: AplOperationType.InsertItem;
    item: Record<string, unknown>;
}
