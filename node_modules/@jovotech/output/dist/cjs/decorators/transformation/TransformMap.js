"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransformMap = void 0;
const __1 = require("../..");
function TransformMap(typeFunction) {
    return (0, __1.Transform)(({ value }) => {
        const result = {};
        if (!value) {
            return result;
        }
        const entries = Object.entries(value);
        for (let i = 0, len = entries.length; i < len; i++) {
            const [key, obj] = entries[i];
            result[key] = (0, __1.plainToClass)(typeFunction(), obj);
        }
        return result;
    });
}
exports.TransformMap = TransformMap;
//# sourceMappingURL=TransformMap.js.map