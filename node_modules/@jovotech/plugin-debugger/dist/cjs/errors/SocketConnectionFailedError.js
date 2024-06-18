"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SocketConnectionFailedError = void 0;
const framework_1 = require("@jovotech/framework");
class SocketConnectionFailedError extends framework_1.JovoError {
    constructor(webhookUrl, error) {
        super({
            message: `Could not connect to socket server at ${webhookUrl}: ${error.message}.`,
        });
        this.webhookUrl = webhookUrl;
    }
}
exports.SocketConnectionFailedError = SocketConnectionFailedError;
//# sourceMappingURL=SocketConnectionFailedError.js.map