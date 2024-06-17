"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HandlerMetadata = void 0;
const MethodDecoratorMetadata_1 = require("./MethodDecoratorMetadata");
class HandlerMetadata extends MethodDecoratorMetadata_1.MethodDecoratorMetadata {
    constructor(
    // eslint-disable-next-line @typescript-eslint/ban-types
    target, propertyKey, options = {}) {
        super(target, propertyKey);
        this.target = target;
        this.propertyKey = propertyKey;
        this.options = options;
    }
    get intents() {
        var _a;
        return [this.propertyKey.toString(), ...(((_a = this.options) === null || _a === void 0 ? void 0 : _a.intents) || [])];
    }
    get intentNames() {
        return this.intents.map((intent) => (typeof intent === 'string' ? intent : intent.name));
    }
    get globalIntentNames() {
        return this.intents
            .filter((intent) => { var _a, _b, _c; return typeof intent === 'string' ? (_a = this.options) === null || _a === void 0 ? void 0 : _a.global : (_b = intent.global) !== null && _b !== void 0 ? _b : (_c = this.options) === null || _c === void 0 ? void 0 : _c.global; })
            .map((intent) => (typeof intent === 'string' ? intent : intent.name));
    }
    get hasCondition() {
        var _a, _b, _c;
        return !!(((_a = this.options) === null || _a === void 0 ? void 0 : _a.if) || ((_c = (_b = this.options) === null || _b === void 0 ? void 0 : _b.platforms) === null || _c === void 0 ? void 0 : _c.length));
    }
    mergeWith(otherMetadata) {
        for (const key in otherMetadata.options) {
            if (otherMetadata.options.hasOwnProperty(key) && otherMetadata.options[key]) {
                const valueToMergeIn = otherMetadata.options[key];
                if (Array.isArray(valueToMergeIn) && Array.isArray(this.options[key])) {
                    this.options[key].push(...valueToMergeIn);
                }
                else if (typeof valueToMergeIn === 'function' &&
                    typeof this.options[key] === 'function') {
                    // TODO: check if this is necessary: it is experimental
                    const currentFunction = this.options[key];
                    this.options[key] = async function (...args) {
                        const currentResult = await currentFunction.call(this, ...args);
                        const newResult = await valueToMergeIn.call(this, ...args);
                        return currentResult && newResult;
                    };
                }
                else {
                    this.options[key] = valueToMergeIn;
                }
            }
        }
        return this;
    }
}
exports.HandlerMetadata = HandlerMetadata;
//# sourceMappingURL=HandlerMetadata.js.map