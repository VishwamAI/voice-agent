"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Platforms = void 0;
const index_1 = require("../index");
const HandlerOptionMetadata_1 = require("../metadata/HandlerOptionMetadata");
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function Platforms(...platforms) {
    return (0, HandlerOptionMetadata_1.createHandlerOptionDecorator)({
        platforms: (0, index_1.getValuesOfDecoratorRestParameter)(platforms),
    });
}
exports.Platforms = Platforms;
//# sourceMappingURL=Platforms.js.map