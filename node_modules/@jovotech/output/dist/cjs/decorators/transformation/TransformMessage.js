"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransformMessage = void 0;
const __1 = require("../..");
function TransformMessage() {
    return (0, __1.Transform)(({ value }) => {
        if (!value) {
            return;
        }
        if (value === null || value === void 0 ? void 0 : value.speech) {
            return (0, __1.plainToClass)(__1.SpeechMessage, value);
        }
        if (value === null || value === void 0 ? void 0 : value.text) {
            return (0, __1.plainToClass)(__1.TextMessage, value);
        }
        return (0, __1.plainToClass)(__1.Message, value);
    });
}
exports.TransformMessage = TransformMessage;
//# sourceMappingURL=TransformMessage.js.map