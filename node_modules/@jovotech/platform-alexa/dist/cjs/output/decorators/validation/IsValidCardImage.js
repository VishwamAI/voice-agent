"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IsValidCardImage = void 0;
const output_1 = require("@jovotech/output");
const models_1 = require("../../models");
function IsValidCardImage(relatedTypes, options) {
    return function (object, propertyKey) {
        (0, output_1.registerDecorator)({
            name: 'isValidCardImage',
            target: object.constructor,
            propertyName: propertyKey.toString(),
            constraints: [],
            options,
            async: true,
            validator: {
                async validate(value, args) {
                    const type = args.object.type;
                    // if there is no type, skip for now because another decorator should take care of that
                    if (!type) {
                        return true;
                    }
                    if ((0, output_1.isDefined)(value) && !relatedTypes.includes(type)) {
                        args.constraints[0] = `$property can not be set when the type is ${type}`;
                        return false;
                    }
                    if ((0, output_1.isDefined)(value)) {
                        if (!(value instanceof models_1.CardImage)) {
                            args.constraints[0] = '$property must be an instance of CardImage';
                            return false;
                        }
                        const errors = await (0, output_1.validate)(value);
                        args.constraints[0] = (0, output_1.formatValidationErrors)(errors, {
                            text: '$property is invalid:',
                            delimiter: '\n  - ',
                            path: '$property',
                        });
                        return !errors.length;
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
exports.IsValidCardImage = IsValidCardImage;
//# sourceMappingURL=IsValidCardImage.js.map