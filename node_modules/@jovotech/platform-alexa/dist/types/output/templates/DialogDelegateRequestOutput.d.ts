import { BaseOutput, OutputOptions, OutputTemplate } from '@jovotech/framework';
export interface UpdatedRequestSlot {
    name: string;
    value: string;
}
export interface UpdatedRequestData {
    name: string;
    slots?: Record<string, UpdatedRequestSlot>;
}
export interface UpdatedIntentRequest {
    type: 'IntentRequest';
    intent: UpdatedRequestData;
}
export interface UpdatedInputRequest {
    type: 'Dialog.InputRequest';
    input: UpdatedRequestData;
}
export interface DialogDelegateRequestIntentOutputOptions extends OutputOptions {
    target: 'skill';
    updatedRequest?: UpdatedIntentRequest;
}
export interface DialogDelegateRequestInputOutputOptions extends OutputOptions {
    target: 'AMAZON.Conversations';
    updatedRequest?: UpdatedInputRequest;
}
export declare class DialogDelegateRequestOutput extends BaseOutput<DialogDelegateRequestInputOutputOptions | DialogDelegateRequestIntentOutputOptions> {
    build(): OutputTemplate | OutputTemplate[];
}
