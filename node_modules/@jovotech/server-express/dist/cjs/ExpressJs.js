"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExpressJs = void 0;
const framework_1 = require("@jovotech/framework");
class ExpressJs extends framework_1.Server {
    constructor(req, res) {
        super();
        this.req = req;
        this.res = res;
    }
    fail(error) {
        if (!this.res.headersSent) {
            const responseObj = {
                code: 500,
                msg: error.message,
            };
            if (process.env.NODE_ENV === 'production') {
                responseObj.stack = error.stack;
            }
            this.res.status(responseObj.code).json(responseObj);
        }
    }
    getQueryParams() {
        return this.req.query || {};
    }
    getRequestObject() {
        return this.req.body;
    }
    getNativeRequestHeaders() {
        return this.req.headers;
    }
    hasWriteFileAccess() {
        return true;
    }
    setResponse(response) {
        return new Promise((resolve) => {
            if (!this.res.headersSent) {
                this.res.json(response);
            }
            resolve();
        });
    }
    // eslint-disable-next-line
    setResponseHeaders(header) {
        Object.keys(header).forEach((key) => {
            this.res.setHeader(key, header[key]);
        });
    }
}
exports.ExpressJs = ExpressJs;
//# sourceMappingURL=ExpressJs.js.map