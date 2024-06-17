"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Output = void 0;
const MetadataStorage_1 = require("../metadata/MetadataStorage");
function Output(name) {
    return function (target) {
        MetadataStorage_1.MetadataStorage.getInstance().addOutputMetadata(target, name || target.name);
        return;
    };
}
exports.Output = Output;
//# sourceMappingURL=Output.js.map