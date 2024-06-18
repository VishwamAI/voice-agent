"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MatchingRouteNotFoundError = void 0;
const common_1 = require("@jovotech/common");
class MatchingRouteNotFoundError extends common_1.JovoError {
    constructor({ request, input, state, matches }) {
        super({
            message: 'No matching route was found for the request.',
            context: {
                input,
                state,
                matches,
                request,
            },
        });
    }
}
exports.MatchingRouteNotFoundError = MatchingRouteNotFoundError;
//# sourceMappingURL=MatchingRouteNotFoundError.js.map