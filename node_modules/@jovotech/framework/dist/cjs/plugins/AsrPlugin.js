"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AsrPlugin = void 0;
const common_1 = require("@jovotech/common");
const InterpretationPlugin_1 = require("./InterpretationPlugin");
class AsrPlugin extends InterpretationPlugin_1.InterpretationPlugin {
    constructor() {
        super(...arguments);
        this.processText = undefined;
    }
    getDefaultConfig() {
        return {
            input: {
                supportedTypes: [common_1.InputType.Speech],
            },
        };
    }
}
exports.AsrPlugin = AsrPlugin;
//# sourceMappingURL=AsrPlugin.js.map