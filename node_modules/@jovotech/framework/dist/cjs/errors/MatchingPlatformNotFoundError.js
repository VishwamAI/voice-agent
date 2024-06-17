"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MatchingPlatformNotFoundError = void 0;
const common_1 = require("@jovotech/common");
class MatchingPlatformNotFoundError extends common_1.JovoError {
    constructor(request) {
        super({
            message: 'No registered platform can handle the request.',
            context: {
                request,
            },
        });
    }
}
exports.MatchingPlatformNotFoundError = MatchingPlatformNotFoundError;
//# sourceMappingURL=MatchingPlatformNotFoundError.js.map