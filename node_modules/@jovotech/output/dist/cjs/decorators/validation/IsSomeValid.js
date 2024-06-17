"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IsSomeValid = void 0;
const __1 = require("../..");
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function IsSomeValid(options, validationOptions) {
    if (options.keys.length <= 1) {
        throw new Error('At least 2 keys have to be defined in order to use IsSomeValid.');
    }
    return function (object, propertyKey) {
        (0, __1.registerDecorator)({
            name: options.name || 'isSomeValid',
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
                    // check if none are defined
                    if (!(0, __1.isDefined)(value) && !otherDefinedPropertyPairs.length) {
                        const keysText = (0, __1.formatList)(keys);
                        args.constraints[1] = `At least one of the properties ${keysText} must be defined. None is set.`;
                        return false;
                    }
                    // return true to skip validation for this property and not throw an error.
                    if (!(0, __1.isDefined)(value)) {
                        return true;
                    }
                    const validationResult = await validate(value, args);
                    if (validationResult) {
                        args.constraints[1] = validationResult;
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
exports.IsSomeValid = IsSomeValid;
//# sourceMappingURL=IsSomeValid.js.map