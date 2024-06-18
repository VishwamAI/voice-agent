"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IsEitherValid = void 0;
const __1 = require("../..");
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function IsEitherValid(options, validationOptions) {
    if (options.keys.length <= 1) {
        throw new Error('At least 2 keys have to be defined in order to use IsEitherValid.');
    }
    return function (object, propertyKey) {
        (0, __1.registerDecorator)({
            name: options.name || 'isEitherValid',
            target: object.constructor,
            propertyName: propertyKey.toString(),
            constraints: [options],
            options: validationOptions,
            async: true,
            validator: {
                async validate(value, args) {
                    const { keys, validate } = args.constraints[0];
                    const otherKeys = keys.filter((key) => {
                        return key !== args.property;
                    });
                    const otherPropertyMap = {};
                    for (const key of otherKeys) {
                        otherPropertyMap[key] = args.object[key];
                    }
                    const otherDefinedPropertyPairs = Object.entries(otherPropertyMap).filter((entry) => {
                        return (0, __1.isDefined)(entry[1]);
                    });
                    // check if either multiple or none are defined
                    if (((0, __1.isDefined)(value) && otherDefinedPropertyPairs.length) ||
                        (!(0, __1.isDefined)(value) && !otherDefinedPropertyPairs.length)) {
                        const keysText = (0, __1.formatList)(keys);
                        const otherDefinedPropertyKeys = otherDefinedPropertyPairs.map((entry) => {
                            return entry[0];
                        });
                        const tipText = otherDefinedPropertyKeys.length === 0
                            ? 'None is defined.'
                            : otherDefinedPropertyKeys.length === 1
                                ? `The property ${otherDefinedPropertyKeys[0]} is also defined.`
                                : `The properties ${(0, __1.formatList)(otherDefinedPropertyKeys, ', ', ' and ')} are also defined.`;
                        args.constraints[1] = `Either ${keysText} must be defined. ${tipText}`;
                        return false;
                    }
                    // assume value is not defined because we check the case before that in the previous condition
                    // return true to skip validation for these properties and not throw an error.
                    if (otherDefinedPropertyPairs.length) {
                        return true;
                    }
                    if (validate) {
                        const validationResult = await validate(value, args);
                        if (validationResult) {
                            args.constraints[1] = validationResult;
                            return false;
                        }
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
exports.IsEitherValid = IsEitherValid;
//# sourceMappingURL=IsEitherValid.js.map