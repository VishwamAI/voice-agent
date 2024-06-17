"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Handle = void 0;
const HandlerMetadata_1 = require("../metadata/HandlerMetadata");
const MetadataStorage_1 = require("../metadata/MetadataStorage");
function Handle(options) {
    return function (target, propertyKey) {
        MetadataStorage_1.MetadataStorage.getInstance().addHandlerMetadata(new HandlerMetadata_1.HandlerMetadata(target.constructor, propertyKey, options));
    };
}
exports.Handle = Handle;
//# sourceMappingURL=Handle.js.map