"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DebuggerConfig = void 0;
class DebuggerConfig {
    constructor(config) {
        var _a;
        this.locales = ['en'];
        if ((_a = config === null || config === void 0 ? void 0 : config.locales) === null || _a === void 0 ? void 0 : _a.length) {
            this.locales = config.locales;
        }
        if (config === null || config === void 0 ? void 0 : config.buttons) {
            this.buttons = config.buttons;
        }
    }
}
exports.DebuggerConfig = DebuggerConfig;
//# sourceMappingURL=DebuggerConfig.js.map