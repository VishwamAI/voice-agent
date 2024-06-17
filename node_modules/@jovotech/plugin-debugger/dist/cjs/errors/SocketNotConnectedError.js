"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SocketNotConnectedError = void 0;
const framework_1 = require("@jovotech/framework");
class SocketNotConnectedError extends framework_1.JovoError {
    constructor(webhookUrl) {
        super({
            message: `Not connected to socket at ${webhookUrl}.`,
        });
        this.webhookUrl = webhookUrl;
    }
}
exports.SocketNotConnectedError = SocketNotConnectedError;
//# sourceMappingURL=SocketNotConnectedError.js.map