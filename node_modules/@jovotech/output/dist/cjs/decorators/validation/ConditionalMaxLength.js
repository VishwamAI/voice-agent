"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConditionalMaxLength = void 0;
const __1 = require("../..");
function ConditionalMaxLength(conditionFn, options) {
    return function (object, propertyKey) {
        (0, __1.registerDecorator)({
            name: 'conditionalMaxLength',
            target: object.constructor,
            propertyName: propertyKey.toString(),
            constraints: [conditionFn],
            options,
            validator: {
                validate(value, args) {
                    if (!value) {
                        return false;
                    }
                    const maxLength = args.constraints[0](args.object);
                    return value.length <= maxLength;
                },
            },
        });
    };
}
exports.ConditionalMaxLength = ConditionalMaxLength;
//# sourceMappingURL=ConditionalMaxLength.js.map