"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IsValidContentObject = void 0;
const output_1 = require("@jovotech/output");
function IsValidContentObject(validationOptions) {
    return (0, output_1.IsEitherValid)({
        name: 'isValidContentObject',
        keys: ['card', 'image', 'table', 'media', 'collection', 'list'],
        validate: async (value, args) => {
            var _a;
            const className = `${args.property.charAt(0).toUpperCase()}${args.property.slice(1)}`;
            if (!(0, output_1.isObject)(value) || ((_a = value === null || value === void 0 ? void 0 : value.constructor) === null || _a === void 0 ? void 0 : _a.name) !== className) {
                return `$property has to be an instance of ${className}`;
            }
            const errors = await (0, output_1.validate)(value);
            if (errors.length) {
                return (0, output_1.formatValidationErrors)(errors, {
                    text: '$property is invalid:',
                    delimiter: '\n  - ',
                    path: '$property',
                });
            }
            return;
        },
    }, validationOptions);
}
exports.IsValidContentObject = IsValidContentObject;
//# sourceMappingURL=IsValidContentObject.js.map