"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IsValidAlexaString = void 0;
const output_1 = require("@jovotech/output");
const utilities_1 = require("../../utilities");
function IsValidAlexaString(options) {
    return function (object, propertyKey) {
        (0, output_1.registerDecorator)({
            name: 'isValidAlexaString',
            target: object.constructor,
            propertyName: propertyKey.toString(),
            constraints: [],
            options,
            async: true,
            validator: {
                async validate(value, args) {
                    const error = (0, utilities_1.validateAlexaString)(value);
                    if (error) {
                        args.constraints[0] = error;
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
exports.IsValidAlexaString = IsValidAlexaString;
//# sourceMappingURL=IsValidAlexaString.js.map