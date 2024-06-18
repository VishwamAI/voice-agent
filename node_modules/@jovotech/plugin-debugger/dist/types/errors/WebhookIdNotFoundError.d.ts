import { JovoError } from '@jovotech/framework';
export declare class WebhookIdNotFoundError extends JovoError {
    readonly configPath: string;
    constructor(configPath: string);
}
