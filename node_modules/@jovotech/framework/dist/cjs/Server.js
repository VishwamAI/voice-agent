"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Server = void 0;
class Server {
    /**
     * Converts native header keys to lowercase
     *
     * Example:
     * headers = {
     *    Host: 'localhost:3000',
     *    Authorization: 'Bearer TOKEN',
     * }
     * Converts to:
     * headers = {
     *    host: 'localhost:3000',
     *    authorization: 'Bearer TOKEN',
     * }
     *
     */
    getRequestHeaders() {
        const headers = this.getNativeRequestHeaders();
        return Object.keys(headers).reduce((destination, key) => {
            destination[key.toLowerCase()] = headers[key];
            return destination;
        }, {});
    }
}
exports.Server = Server;
//# sourceMappingURL=Server.js.map