"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TestUser = void 0;
const __1 = require("..");
class TestUser extends __1.JovoUser {
    get id() {
        var _a, _b;
        return (_b = (_a = this.jovo) === null || _a === void 0 ? void 0 : _a.$request) === null || _b === void 0 ? void 0 : _b.userId;
    }
}
exports.TestUser = TestUser;
//# sourceMappingURL=TestUser.js.map