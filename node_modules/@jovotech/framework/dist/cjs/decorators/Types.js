"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Types = void 0;
const HandlerOptionMetadata_1 = require("../metadata/HandlerOptionMetadata");
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function Types(...types) {
    return (0, HandlerOptionMetadata_1.createHandlerOptionDecorator)({
        types: (0, HandlerOptionMetadata_1.getValuesOfDecoratorRestParameter)(types),
    });
}
exports.Types = Types;
//# sourceMappingURL=Types.js.map