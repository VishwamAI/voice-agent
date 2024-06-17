import { AlexaResponse } from '../../AlexaResponse';
import { Response } from './Response';
export declare class AlexaOutputTemplateResponse implements Partial<AlexaResponse> {
    [key: string]: unknown;
    version?: string;
    sessionAttributes?: Record<string, unknown>;
    response?: Response;
}
