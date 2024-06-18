import { AnyObject, Headers, QueryParams, Server } from '@jovotech/framework';
import type { Request, Response } from 'express';
export interface ErrorResponse {
    code: number;
    msg: string;
    stack?: string;
}
export declare class ExpressJs extends Server {
    req: Request;
    res: Response;
    constructor(req: Request, res: Response);
    fail(error: Error): void;
    getQueryParams(): QueryParams;
    getRequestObject(): AnyObject;
    getNativeRequestHeaders(): Headers;
    hasWriteFileAccess(): boolean;
    setResponse(response: unknown): Promise<void>;
    setResponseHeaders(header: Record<string, string>): void;
}
