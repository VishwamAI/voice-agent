"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GoogleAssistant = void 0;
const framework_1 = require("@jovotech/framework");
class GoogleAssistant extends framework_1.Jovo {
    constructor($app, $handleRequest, $platform) {
        var _a, _b;
        super($app, $handleRequest, $platform);
        if ((_b = (_a = this.$request.session) === null || _a === void 0 ? void 0 : _a.params) === null || _b === void 0 ? void 0 : _b._GOOGLE_ASSISTANT_REPROMPTS_) {
            this.$session._GOOGLE_ASSISTANT_REPROMPTS_ =
                this.$request.session.params._GOOGLE_ASSISTANT_REPROMPTS_;
        }
    }
    getPersistableData() {
        const persistableData = super.getPersistableData();
        if (persistableData.session) {
            persistableData.session._GOOGLE_ASSISTANT_REPROMPTS_ =
                this.$session._GOOGLE_ASSISTANT_REPROMPTS_;
        }
        return persistableData;
    }
    setPersistableData(data, config) {
        var _a, _b;
        super.setPersistableData(data, config);
        if ((typeof (config === null || config === void 0 ? void 0 : config.session) === 'object' && config.session.enabled) || (config === null || config === void 0 ? void 0 : config.session)) {
            if ((_a = data.session) === null || _a === void 0 ? void 0 : _a._GOOGLE_ASSISTANT_REPROMPTS_) {
                this.$session._GOOGLE_ASSISTANT_REPROMPTS_ = (_b = data.session) === null || _b === void 0 ? void 0 : _b._GOOGLE_ASSISTANT_REPROMPTS_;
            }
        }
    }
}
exports.GoogleAssistant = GoogleAssistant;
//# sourceMappingURL=GoogleAssistant.js.map