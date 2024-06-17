"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Global = void 0;
const ComponentOptionMetadata_1 = require("../metadata/ComponentOptionMetadata");
const HandlerOptionMetadata_1 = require("../metadata/HandlerOptionMetadata");
function Global(isGlobal = true) {
    return function (target, propertyKey, 
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    descriptor) {
        // is a property-decorator
        if (typeof target === 'object' && propertyKey && descriptor) {
            (0, HandlerOptionMetadata_1.createHandlerOptionDecorator)({ global: isGlobal })(target, propertyKey, descriptor);
        }
        // class-decorator
        else if (typeof target === 'function') {
            (0, ComponentOptionMetadata_1.createComponentOptionDecorator)({ global: isGlobal })(target);
        }
    };
}
exports.Global = Global;
//# sourceMappingURL=Global.js.map