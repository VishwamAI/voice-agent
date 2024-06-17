"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DuplicateGlobalIntentsError = exports.buildDuplicateGlobalIntentsErrorMessage = void 0;
const common_1 = require("@jovotech/common");
function buildDuplicateGlobalIntentsErrorMessage(entries, separator = '\n - ') {
    const duplicateEntriesText = entries
        .map(([intentName, handlers]) => {
        const textBlocks = handlers.map((handler) => `${handler.target.name}.${handler.propertyKey.toString()}`);
        const startText = textBlocks.slice(0, textBlocks.length - 1);
        const text = `${startText.join(separator)} and ${textBlocks[textBlocks.length - 1]}`;
        return `${intentName} in ${text}`;
    })
        .join('; ');
    return `Duplicate global intent names detected:${separator}${duplicateEntriesText}.`;
}
exports.buildDuplicateGlobalIntentsErrorMessage = buildDuplicateGlobalIntentsErrorMessage;
// TODO improve to also display path of the components that cause the error
class DuplicateGlobalIntentsError extends common_1.JovoError {
    constructor(entries) {
        super({
            message: buildDuplicateGlobalIntentsErrorMessage(entries),
            hint: 'Check the intentMap as well.',
        });
    }
}
exports.DuplicateGlobalIntentsError = DuplicateGlobalIntentsError;
//# sourceMappingURL=DuplicateGlobalIntentsError.js.map