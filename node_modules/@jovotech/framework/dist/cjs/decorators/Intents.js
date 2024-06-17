"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Intents = void 0;
const HandlerOptionMetadata_1 = require("../metadata/HandlerOptionMetadata");
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function Intents(...intents) {
    return (0, HandlerOptionMetadata_1.createHandlerOptionDecorator)({
        intents: (0, HandlerOptionMetadata_1.getValuesOfDecoratorRestParameter)(intents),
    });
}
exports.Intents = Intents;
//# sourceMappingURL=Intents.js.map