"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SluPlugin = void 0;
const common_1 = require("@jovotech/common");
const InterpretationPlugin_1 = require("./InterpretationPlugin");
class SluPlugin extends InterpretationPlugin_1.InterpretationPlugin {
    getDefaultConfig() {
        return {
            input: {
                supportedTypes: [common_1.InputType.Text, common_1.InputType.TranscribedSpeech, common_1.InputType.Speech],
            },
        };
    }
}
exports.SluPlugin = SluPlugin;
//# sourceMappingURL=SluPlugin.js.map