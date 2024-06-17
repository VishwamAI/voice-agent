import { BaseOutput, OutputOptions, OutputTemplate } from '@jovotech/framework';
import { OnCompletion } from '../models/common/OnCompletion';
export declare enum PolicyName {
    VoicePin = "VOICE_PIN"
}
export interface ConnectionVerifyPersonOutputOptions extends OutputOptions {
    shouldEndSession?: boolean;
    token?: string;
    onCompletion: OnCompletion;
    level: number;
    policyName: PolicyName;
}
export declare class ConnectionVerifyPersonOutput extends BaseOutput<ConnectionVerifyPersonOutputOptions> {
    getDefaultOptions(): ConnectionVerifyPersonOutputOptions;
    build(): OutputTemplate | OutputTemplate[];
}
