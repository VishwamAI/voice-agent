"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClassDecoratorMetadata = void 0;
class ClassDecoratorMetadata {
    // eslint-disable-next-line @typescript-eslint/ban-types
    constructor(target) {
        this.target = target;
    }
    hasSameTargetAs(otherMetadata) {
        return this.target === otherMetadata.target;
    }
}
exports.ClassDecoratorMetadata = ClassDecoratorMetadata;
//# sourceMappingURL=ClassDecoratorMetadata.js.map