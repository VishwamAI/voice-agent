"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IsValidDynamicEntitiesSlotTypesArray = void 0;
const output_1 = require("@jovotech/output");
const DialogUpdateDynamicEntitiesDirective_1 = require("../../models/dialog/DialogUpdateDynamicEntitiesDirective");
function IsValidDynamicEntitiesSlotTypesArray(options) {
    return function (object, propertyKey) {
        (0, output_1.registerDecorator)({
            name: 'isValidDynamicEntitiesSlotTypesArray',
            target: object.constructor,
            propertyName: propertyKey.toString(),
            constraints: [],
            options,
            async: true,
            validator: {
                async validate(value, args) {
                    const behavior = args.object.updateBehavior;
                    if (behavior === DialogUpdateDynamicEntitiesDirective_1.DynamicEntitiesUpdateBehavior.Replace) {
                        if (!Array.isArray(value)) {
                            args.constraints[0] = '$property must be an array';
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
                    else {
                        if ((0, output_1.isDefined)(value)) {
                            args.constraints[0] = `$property can not be set when updateBehavior is set to ${behavior}`;
                            return false;
                        }
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
exports.IsValidDynamicEntitiesSlotTypesArray = IsValidDynamicEntitiesSlotTypesArray;
//# sourceMappingURL=IsValidDynamicEntitiesSlotTypesArray.js.map