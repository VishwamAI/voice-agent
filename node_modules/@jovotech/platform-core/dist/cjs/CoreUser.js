"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CoreUser = void 0;
const framework_1 = require("@jovotech/framework");
class CoreUser extends framework_1.JovoUser {
    constructor(jovo) {
        super(jovo);
    }
    get id() {
        var _a, _b;
        return (_b = (_a = this.jovo.$request.context) === null || _a === void 0 ? void 0 : _a.user) === null || _b === void 0 ? void 0 : _b.id;
    }
}
exports.CoreUser = CoreUser;
//# sourceMappingURL=CoreUser.js.map