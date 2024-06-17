import { JovoResponse } from '@jovotech/output';
import { Device, Expected, Home, Prompt, Scene, Session, User } from './output';
export declare class GoogleAssistantResponse extends JovoResponse {
    [key: string]: unknown;
    prompt?: Prompt;
    scene?: Scene;
    session?: Session;
    user?: User;
    home?: Home;
    device?: Device;
    expected?: Expected;
    hasSessionEnded(): boolean;
    getSpeech(): string | string[] | undefined;
    getReprompt(): string | string[] | undefined;
    replaceSpeech(speech: string | string[]): void;
    replaceReprompt(reprompt: string | string[]): void;
}
