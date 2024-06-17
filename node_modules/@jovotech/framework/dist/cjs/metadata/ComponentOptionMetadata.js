"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ComponentOptionMetadata = exports.createComponentOptionDecorator = void 0;
const ClassDecoratorMetadata_1 = require("./ClassDecoratorMetadata");
const MetadataStorage_1 = require("./MetadataStorage");
function createComponentOptionDecorator(options) {
    return function (target) {
        MetadataStorage_1.MetadataStorage.getInstance().addComponentOptionMetadata(new ComponentOptionMetadata(target, options));
    };
}
exports.createComponentOptionDecorator = createComponentOptionDecorator;
class ComponentOptionMetadata extends ClassDecoratorMetadata_1.ClassDecoratorMetadata {
    constructor(
    // eslint-disable-next-line @typescript-eslint/ban-types
    target, options = {}) {
        super(target);
        this.target = target;
        this.options = options;
    }
}
exports.ComponentOptionMetadata = ComponentOptionMetadata;
//# sourceMappingURL=ComponentOptionMetadata.js.map