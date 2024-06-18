import { AplOperation, AplOperationType } from '../AplOperation';
export declare class AplSetItemOperation extends AplOperation<AplOperationType.SetItem> {
    type: AplOperationType.SetItem;
    item: Record<string, unknown>;
}
