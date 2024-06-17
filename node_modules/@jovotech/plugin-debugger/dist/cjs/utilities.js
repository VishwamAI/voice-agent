"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.propagateStreamAsLog = void 0;
const _1 = require(".");
function propagateStreamAsLog(stream, socket) {
    const originalWriteFn = stream.write;
    stream.write = function (chunk, ...args) {
        socket.emit(_1.JovoDebuggerEvent.AppConsoleLog, chunk.toString(), new Error().stack);
        /* eslint-disable @typescript-eslint/no-explicit-any */
        return originalWriteFn.call(this, chunk, ...args);
    };
}
exports.propagateStreamAsLog = propagateStreamAsLog;
//# sourceMappingURL=utilities.js.map