import { JovoError } from '@jovotech/framework';
export declare class SocketConnectionFailedError extends JovoError {
    readonly webhookUrl: string;
    constructor(webhookUrl: string, error: Error);
}
