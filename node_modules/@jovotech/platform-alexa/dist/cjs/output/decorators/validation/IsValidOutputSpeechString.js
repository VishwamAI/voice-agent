"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IsValidOutputSpeechString = void 0;
const output_1 = require("@jovotech/output");
const utilities_1 = require("../../utilities");
function IsValidOutputSpeechString(relatedType, options) {
    return function (object, propertyKey) {
        (0, output_1.registerDecorator)({
            name: 'isValidOutputSpeechString',
            target: object.constructor,
            propertyName: propertyKey.toString(),
            constraints: [],
            options,
            validator: {
                validate(value, args) {
                    const type = args.object.type;
                    // if there is no type, skip for now because another decorator should take care of that
                    if (!type) {
                        return true;
                    }
                    if (type === relatedType) {
                        const result = (0, utilities_1.validateAlexaString)(value);
                        if (result) {
                            args.constraints[0] = result;
                            return false;
                        }
                    }
                    else if (value) {
                        args.constraints[0] = `$property can not be set when the type is ${type}`;
                        return false;
                    }
                    return true;
                },
                defaultMessage(args) {
                    return args.constraints[0];
                },
            },
        });
    };
}
exports.IsValidOutputSpeechString = IsValidOutputSpeechString;
//# sourceMappingURL=IsValidOutputSpeechString.js.map