"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IsOfEitherType = void 0;
const __1 = require("../..");
function IsOfEitherType(types, options) {
    return function (object, propertyKey) {
        (0, __1.registerDecorator)({
            name: 'isOfEitherType',
            target: object.constructor,
            propertyName: propertyKey.toString(),
            constraints: [types],
            options,
            validator: {
                validate(value, args) {
                    if (!value) {
                        return false;
                    }
                    if (!args.constraints[0].includes(typeof value)) {
                        args.constraints[1] = typeof value;
                        return false;
                    }
                    if (Array.isArray(value)) {
                        if (args.constraints[0].includes('array')) {
                            return true;
                        }
                        else {
                            args.constraints[1] = 'Array';
                            return false;
                        }
                    }
                    return false;
                },
                defaultMessage(args) {
                    const typesText = (0, __1.formatList)(args.constraints[0]);
                    const eachText = (options === null || options === void 0 ? void 0 : options.each) ? 'each item in ' : '';
                    return `${eachText}$property has to be one of the following types ${typesText}. Current type is ${args.constraints[1]}`;
                },
            },
        });
    };
}
exports.IsOfEitherType = IsOfEitherType;
//# sourceMappingURL=IsOfEitherType.js.map