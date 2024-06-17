import { Headers, JovoRequest, QueryParams, Server } from '..';
export declare class TestServer extends Server {
    private readonly request;
    constructor(request: JovoRequest);
    hasWriteFileAccess(): boolean;
    getRequestObject(): JovoRequest;
    getQueryParams(): QueryParams;
    getNativeRequestHeaders(): Headers;
    setResponseHeaders(): void;
    setResponse(): Promise<void>;
    fail(error: Error): void;
}
