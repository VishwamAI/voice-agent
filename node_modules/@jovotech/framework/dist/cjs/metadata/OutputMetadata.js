"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OutputMetadata = void 0;
const ClassDecoratorMetadata_1 = require("./ClassDecoratorMetadata");
class OutputMetadata extends ClassDecoratorMetadata_1.ClassDecoratorMetadata {
    // eslint-disable-next-line @typescript-eslint/ban-types
    constructor(target, name) {
        super(target);
        this.target = target;
        this.name = name;
    }
}
exports.OutputMetadata = OutputMetadata;
//# sourceMappingURL=OutputMetadata.js.map