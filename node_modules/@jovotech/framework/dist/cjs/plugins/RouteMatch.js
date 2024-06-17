"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RouteMatch = void 0;
const enums_1 = require("../enums");
class RouteMatch {
    constructor(metadata, path, stackIndex) {
        this.metadata = metadata;
        this.path = path;
        this.stackIndex = stackIndex;
    }
    get component() {
        return this.path.join('.');
    }
    get handler() {
        return this.metadata.propertyKey;
    }
    get score() {
        var _a, _b;
        let score = 0;
        // make if higher ranked than any other condition option
        if ((_a = this.metadata.options) === null || _a === void 0 ? void 0 : _a.if) {
            score += 1.5;
        }
        if ((_b = this.metadata.options) === null || _b === void 0 ? void 0 : _b.platforms) {
            score++;
        }
        return score;
    }
    get subState() {
        var _a;
        return (_a = this.metadata.options) === null || _a === void 0 ? void 0 : _a.subState;
    }
    get global() {
        var _a;
        return (_a = this.metadata.options) === null || _a === void 0 ? void 0 : _a.global;
    }
    get prioritizedOverUnhandled() {
        var _a;
        return (_a = this.metadata.options) === null || _a === void 0 ? void 0 : _a.prioritizedOverUnhandled;
    }
    get type() {
        return this.metadata.intentNames.includes(enums_1.BuiltInHandler.Unhandled)
            ? enums_1.BuiltInHandler.Unhandled
            : undefined;
    }
    toJSON() {
        return {
            component: this.component,
            handler: this.handler,
            type: this.type,
            subState: this.subState,
            global: this.global,
            skip: this.skip,
            prioritizedOverUnhandled: this.prioritizedOverUnhandled,
        };
    }
}
exports.RouteMatch = RouteMatch;
//# sourceMappingURL=RouteMatch.js.map