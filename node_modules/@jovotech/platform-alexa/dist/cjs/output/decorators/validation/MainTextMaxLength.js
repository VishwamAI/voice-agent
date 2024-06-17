"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MainTextMaxLength = void 0;
const output_1 = require("@jovotech/output");
const models_1 = require("../../models");
function MainTextMaxLength(length, options) {
    return function (object, propertyKey) {
        (0, output_1.registerDecorator)({
            name: 'mainTextMaxLength',
            target: object.constructor,
            propertyName: propertyKey.toString(),
            constraints: [length],
            options,
            validator: {
                validate(value, args) {
                    var _a, _b;
                    if (!(value instanceof models_1.TextContent)) {
                        return true;
                    }
                    if (((_b = (_a = value.primaryText) === null || _a === void 0 ? void 0 : _a.text) === null || _b === void 0 ? void 0 : _b.length) > args.constraints[0]) {
                        args.constraints[1] = `primaryText of $property can not exceed ${args.constraints[0]} characters`;
                        return false;
                    }
                    return true;
                },
                defaultMessage(args) {
                    return args.constraints[1];
                },
            },
        });
    };
}
exports.MainTextMaxLength = MainTextMaxLength;
//# sourceMappingURL=MainTextMaxLength.js.map