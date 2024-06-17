"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LanguageModelDirectoryNotFoundError = void 0;
const framework_1 = require("@jovotech/framework");
class LanguageModelDirectoryNotFoundError extends framework_1.JovoError {
    constructor(languageModelPath) {
        super({
            message: `Can not find language model directory at ${languageModelPath}.`,
        });
        this.languageModelPath = languageModelPath;
    }
}
exports.LanguageModelDirectoryNotFoundError = LanguageModelDirectoryNotFoundError;
//# sourceMappingURL=LanguageModelDirectoryNotFoundError.js.map