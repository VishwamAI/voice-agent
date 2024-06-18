"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TestServer = void 0;
const __1 = require("..");
class TestServer extends __1.Server {
    constructor(request) {
        super();
        this.request = request;
    }
    hasWriteFileAccess() {
        return true;
    }
    getRequestObject() {
        return this.request;
    }
    getQueryParams() {
        return {};
    }
    getNativeRequestHeaders() {
        return { 'jovo-test': 'TestServer' };
    }
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    setResponseHeaders() { }
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    async setResponse() { }
    fail(error) {
        // eslint-disable-next-line no-console
        console.error('TestServer.fail:');
        // eslint-disable-next-line no-console
        console.error(error);
    }
}
exports.TestServer = TestServer;
//# sourceMappingURL=TestServer.js.map