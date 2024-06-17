"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NluPlugin = void 0;
const common_1 = require("@jovotech/common");
const InterpretationPlugin_1 = require("./InterpretationPlugin");
class NluPlugin extends InterpretationPlugin_1.InterpretationPlugin {
    constructor() {
        super(...arguments);
        this.targetSampleRate = undefined;
        this.processAudio = undefined;
    }
    getDefaultConfig() {
        return {
            input: {
                supportedTypes: [common_1.InputType.Text, common_1.InputType.TranscribedSpeech, common_1.InputType.Speech],
            },
        };
    }
}
exports.NluPlugin = NluPlugin;
//# sourceMappingURL=NluPlugin.js.map