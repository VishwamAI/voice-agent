import { JovoResponse, NormalizedOutputTemplate } from '@jovotech/output';
import { CoreResponseContext } from '.';
export declare class CoreResponse extends JovoResponse {
    version: string;
    platform: string;
    output: NormalizedOutputTemplate[];
    context: CoreResponseContext;
    hasSessionEnded(): boolean;
    getSpeech(): string | string[] | undefined;
    getReprompt(): string | string[] | undefined;
    replaceSpeech(speech: string | string[]): void;
    replaceReprompt(reprompt: string | string[]): void;
}
