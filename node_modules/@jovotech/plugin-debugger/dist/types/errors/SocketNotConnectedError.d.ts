import { JovoError } from '@jovotech/framework';
export declare class SocketNotConnectedError extends JovoError {
    readonly webhookUrl: string;
    constructor(webhookUrl: string);
}
