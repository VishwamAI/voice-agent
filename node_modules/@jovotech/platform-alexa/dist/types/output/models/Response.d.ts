import { Card } from './card/Card';
import { OutputSpeech } from './common/OutputSpeech';
import { Directive } from './Directive';
import { Reprompt } from './Reprompt';
export declare class Response {
    [key: string]: unknown;
    outputSpeech?: OutputSpeech;
    card?: Card;
    reprompt?: Reprompt;
    shouldEndSession?: boolean;
    apiResponse?: Record<string, string | number | boolean>;
    directives?: Directive[];
}
