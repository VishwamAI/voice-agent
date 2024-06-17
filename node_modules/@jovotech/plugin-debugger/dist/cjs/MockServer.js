"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MockServer = void 0;
const framework_1 = require("@jovotech/framework");
class MockServer extends framework_1.Server {
    constructor(req) {
        super();
        this.req = req;
    }
    // eslint-disable-next-line @typescript-eslint/no-empty-function, @typescript-eslint/no-unused-vars
    fail(error) { }
    getQueryParams() {
        return this.req.params || {};
    }
    getNativeRequestHeaders() {
        return this.req.headers || {};
    }
    getRequestObject() {
        return this.req.data;
    }
    hasWriteFileAccess() {
        return false;
    }
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    async setResponse(response) {
        return;
    }
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    setResponseHeaders(header) {
        return;
    }
}
exports.MockServer = MockServer;
//# sourceMappingURL=MockServer.js.map