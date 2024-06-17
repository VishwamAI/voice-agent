"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TestResponse = void 0;
const __1 = require("..");
class TestResponse extends __1.JovoResponse {
    hasSessionEnded() {
        return !!this.shouldEndSession;
    }
}
exports.TestResponse = TestResponse;
//# sourceMappingURL=TestResponse.js.map