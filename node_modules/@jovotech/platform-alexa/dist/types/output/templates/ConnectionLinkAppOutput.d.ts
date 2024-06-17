import { BaseOutput, OutputOptions, OutputTemplate } from '@jovotech/framework';
import { OnCompletion } from '../models/common/OnCompletion';
export declare enum DirectLaunchDefaultPromptBehavior {
    Speak = "SPEAK",
    Suppress = "SUPPRESS"
}
export interface ConnectionLinkAppOutputOptions extends OutputOptions {
    shouldEndSession?: boolean;
    token?: string;
    onCompletion: OnCompletion;
    topic: string;
    links: unknown;
    directLaunchDefaultPromptBehavior?: DirectLaunchDefaultPromptBehavior;
    sendToDeviceEnabled: boolean;
    directLaunchEnabled: boolean;
}
export declare class ConnectionLinkAppOutput extends BaseOutput<ConnectionLinkAppOutputOptions> {
    getDefaultOptions(): ConnectionLinkAppOutputOptions;
    build(): OutputTemplate | OutputTemplate[];
}
