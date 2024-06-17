"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IsValidMediaObjectImage = void 0;
const output_1 = require("@jovotech/output");
const models_1 = require("../../models");
function IsValidMediaObjectImage(validationOptions) {
    return (0, output_1.IsEitherValid)({
        name: 'isValidMediaObjectImage',
        keys: ['large', 'icon'],
        validate: async (value) => {
            if (!(value instanceof models_1.Image)) {
                return `$property has to be an instance of Image`;
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
exports.IsValidMediaObjectImage = IsValidMediaObjectImage;
//# sourceMappingURL=IsValidMediaObjectImage.js.map