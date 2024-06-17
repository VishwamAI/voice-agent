import { AnyObject, Headers, QueryParams, Server } from '@jovotech/framework';
export interface MockServerRequest {
    data: AnyObject;
    headers?: Headers;
    params?: QueryParams;
}
export declare class MockServer extends Server {
    readonly req: MockServerRequest;
    constructor(req: MockServerRequest);
    fail(error: Error): void;
    getQueryParams(): QueryParams;
    getNativeRequestHeaders(): Headers;
    getRequestObject(): Record<string, string>;
    hasWriteFileAccess(): boolean;
    setResponse(response: AnyObject): Promise<void>;
    setResponseHeaders(header: Record<string, string>): void;
}
