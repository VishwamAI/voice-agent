"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HandlerNotFoundError = void 0;
const common_1 = require("@jovotech/common");
// TODO: improve
class HandlerNotFoundError extends common_1.JovoError {
    constructor(className, handler) {
        super({
            message: `Could not find handler ${handler} in component ${className}.`,
        });
    }
}
exports.HandlerNotFoundError = HandlerNotFoundError;
//# sourceMappingURL=HandlerNotFoundError.js.map