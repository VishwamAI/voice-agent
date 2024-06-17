import { Alexa } from './Alexa';
import { PlayerActivity, Request } from './interfaces';
export declare class AlexaAudioPlayer {
    private alexa;
    constructor(alexa: Alexa);
    get offsetInMilliseconds(): number | undefined;
    get playerActivity(): PlayerActivity | undefined;
    get token(): string | undefined;
    get error(): Request['error'];
    toJSON(): AlexaAudioPlayer;
}
