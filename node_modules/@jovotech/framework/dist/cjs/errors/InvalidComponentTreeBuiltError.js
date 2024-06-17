"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InvalidComponentTreeBuiltError = void 0;
const common_1 = require("@jovotech/common");
class InvalidComponentTreeBuiltError extends common_1.JovoError {
    constructor(errors) {
        super({
            message: `Invalid ComponentTree was built:${errors.map((error) => `\n- ${error}`)}`,
        });
    }
}
exports.InvalidComponentTreeBuiltError = InvalidComponentTreeBuiltError;
//# sourceMappingURL=InvalidComponentTreeBuiltError.js.map