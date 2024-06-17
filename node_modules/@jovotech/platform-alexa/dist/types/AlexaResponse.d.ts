import { JovoResponse } from '@jovotech/output';
import { Response } from './output';
export declare class AlexaResponse extends JovoResponse {
    version: string;
    sessionAttributes?: Record<string, unknown>;
    response: Response;
    hasSessionEnded(): boolean;
    getSpeech(): string | string[] | undefined;
    getReprompt(): string | string[] | undefined;
    replaceSpeech(speech: string | string[]): void;
    replaceReprompt(reprompt: string | string[]): void;
}
