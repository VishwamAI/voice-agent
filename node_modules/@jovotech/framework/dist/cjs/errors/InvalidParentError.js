"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InvalidParentError = void 0;
const common_1 = require("@jovotech/common");
// TODO: improve
class InvalidParentError extends common_1.JovoError {
    constructor(pluginName, assumedParentType) {
        super({
            message: `${pluginName} can only be installed for plugins of type ${assumedParentType}.`,
        });
    }
}
exports.InvalidParentError = InvalidParentError;
//# sourceMappingURL=InvalidParentError.js.map