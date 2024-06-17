import { AudioItemStreamCaption } from './AudioItemStreamCaption';
export declare class AudioItemStream {
    url: string;
    token: string;
    expectedPreviousToken?: string;
    offsetInMilliseconds: number;
    caption?: AudioItemStreamCaption;
}
