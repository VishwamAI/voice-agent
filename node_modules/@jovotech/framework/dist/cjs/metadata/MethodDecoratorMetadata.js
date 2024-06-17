"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MethodDecoratorMetadata = void 0;
const ClassDecoratorMetadata_1 = require("./ClassDecoratorMetadata");
class MethodDecoratorMetadata extends ClassDecoratorMetadata_1.ClassDecoratorMetadata {
    constructor(
    // eslint-disable-next-line @typescript-eslint/ban-types
    target, propertyKey) {
        super(target);
        this.target = target;
        this.propertyKey = propertyKey;
    }
    hasSameTargetAs(otherMetadata) {
        return this.target === otherMetadata.target && this.propertyKey === otherMetadata.propertyKey;
    }
}
exports.MethodDecoratorMetadata = MethodDecoratorMetadata;
//# sourceMappingURL=MethodDecoratorMetadata.js.map