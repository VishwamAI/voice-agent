import { JovoResponse } from '..';
export declare class TestResponse extends JovoResponse {
    isTestResponse: boolean;
    shouldEndSession?: boolean;
    hasSessionEnded(): boolean;
}
