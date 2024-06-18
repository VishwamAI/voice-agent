"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GoogleAssistantUser = void 0;
const framework_1 = require("@jovotech/framework");
const lodash_set_1 = __importDefault(require("lodash.set"));
const output_1 = require("./output");
class GoogleAssistantUser extends framework_1.JovoUser {
    get id() {
        var _a, _b;
        return (_b = (_a = this.jovo.$request.user) === null || _a === void 0 ? void 0 : _a.params) === null || _b === void 0 ? void 0 : _b._GOOGLE_ASSISTANT_USER_ID_;
    }
    get accessToken() {
        const headers = this.jovo.$server.getRequestHeaders();
        return headers.authorization;
    }
    isAccountLinked() {
        var _a;
        return ((_a = this.jovo.$request.user) === null || _a === void 0 ? void 0 : _a.accountLinkingStatus) === output_1.AccountLinkingStatus.Linked;
    }
    isVerified() {
        var _a;
        return ((_a = this.jovo.$request.user) === null || _a === void 0 ? void 0 : _a.verificationStatus) === output_1.UserVerificationStatus.Verified;
    }
    // TODO: determine whether a method or setter is better
    setId(id) {
        (0, lodash_set_1.default)(this.jovo.$request, 'user.params._GOOGLE_ASSISTANT_USER_ID_', id);
    }
    async getGoogleProfile() {
        const headers = this.jovo.$server.getRequestHeaders();
        const token = headers.authorization;
        if (!token) {
            throw new framework_1.JovoError({
                message: 'No valid authorization token found.',
                hint: 'Make sure the authorization flow was completed.',
                // TODO: Docs link
                learnMore: '',
            });
        }
        try {
            const response = await framework_1.axios.get(`https://oauth2.googleapis.com/tokeninfo?id_token=${token}`);
            return response.data;
        }
        catch (error) {
            throw new framework_1.JovoError({ message: error.message });
        }
    }
}
exports.GoogleAssistantUser = GoogleAssistantUser;
//# sourceMappingURL=GoogleAssistantUser.js.map