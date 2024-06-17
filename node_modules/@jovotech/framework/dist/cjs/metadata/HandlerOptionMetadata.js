"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HandlerOptionMetadata = exports.createHandlerOptionDecorator = exports.getValuesOfDecoratorRestParameter = void 0;
const MetadataStorage_1 = require("./MetadataStorage");
const MethodDecoratorMetadata_1 = require("./MethodDecoratorMetadata");
/**
 * Get values of the rest parameter of a decorator.
 * Useful for following case:
 * `@Intent(['foo', 'bar'])` in this case, the actual value in the intents-parameter is `[ ['foo', 'bar'] ]`, therefore we only need to return the inner array.
 */
function getValuesOfDecoratorRestParameter(restParameter) {
    return restParameter.length && Array.isArray(restParameter[0])
        ? restParameter[0]
        : restParameter;
}
exports.getValuesOfDecoratorRestParameter = getValuesOfDecoratorRestParameter;
function createHandlerOptionDecorator(options) {
    return function (target, propertyKey) {
        MetadataStorage_1.MetadataStorage.getInstance().addHandlerOptionMetadata(new HandlerOptionMetadata(target.constructor, propertyKey, options));
    };
}
exports.createHandlerOptionDecorator = createHandlerOptionDecorator;
class HandlerOptionMetadata extends MethodDecoratorMetadata_1.MethodDecoratorMetadata {
    constructor(
    // eslint-disable-next-line @typescript-eslint/ban-types
    target, propertyKey, options = {}) {
        super(target, propertyKey);
        this.target = target;
        this.propertyKey = propertyKey;
        this.options = options;
    }
}
exports.HandlerOptionMetadata = HandlerOptionMetadata;
//# sourceMappingURL=HandlerOptionMetadata.js.map